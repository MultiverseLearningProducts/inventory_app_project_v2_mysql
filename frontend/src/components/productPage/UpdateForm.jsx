import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function UpdateForm({productId}) {

    const navigate = useNavigate();

    const [title, setTitle ] = useState('');
    const [price, setPrice ] = useState('');
    const [image, setImage ] = useState('');
    const [description, setDescription ] = useState('');
    const [category, setCategory] = useState('');

    const getProduct = async (productId) => {

        const response = await fetch(`http://localhost:8000/api/product/${productId}`, {
            headers: {
                'SameSite': 'None'
              }
        });
        const data = await response.json();
        const {product} = data;
    
        setTitle(product.title);
        setPrice(product.price);
        setImage(product.image);
        setDescription(product.description);
        setCategory(product.category);
    }

    const updateProduct = async (productId, updatedProduct) => {
        try {
            const response = await fetch(`http://localhost:8000/api/product/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'SameSite': 'None'
                },
                body: JSON.stringify(updatedProduct)
            });

            const data = await response.json();
            navigate(`/product/${data.updatedProduct.id}`)
            toast.success('Product successfully updated!');

        } catch (error) {
            console.log(error.message);
            toast.error(`Product did not update - error: ${error.message}`)
        }
    
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedProduct = {
            title,
            price,
            description,
            category,
            image
        }
        updateProduct(productId, updatedProduct);
    }

    useEffect(() => {
        getProduct(productId);
    }, [productId]);

  return (
    <div className="container">
        <div className='edit-form'>
            <h2>Details:</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter title' value={title} onChange={(event) => setTitle(event.target.value)} required/>
                <input type="number" placeholder='Enter price' value={price} onChange={(event) => setPrice(event.target.value)} step=".01" required/>
                <textarea type="text" placeholder='Enter description' value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
                <textarea type="text" placeholder='Enter category' value={category} onChange={(event) => setCategory(event.target.value)} required></textarea>
                <input type="text" placeholder='Enter image url' value={image} onChange={(event) => setImage(event.target.value)} required/>
                <button className='form-button'>Update Product</button>
            </form>

        </div>
    </div>

  )
}

export default UpdateForm
