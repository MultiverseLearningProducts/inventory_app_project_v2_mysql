import React, {useState} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ProductForm() {

    const navigate = useNavigate();

    const [title, setTitle ] = useState('');
    const [price, setPrice ] = useState('');
    const [image, setImage ] = useState('https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg');
    const [description, setDescription ] = useState('');
    const [category, setCategory] = useState('');

    const createProduct = async (newProduct) => {
        try {
            const response = await fetch('http://localhost:8000/api/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'SameSite': 'None'
                },
                body: JSON.stringify(newProduct)
            });

            const data = await response.json();

            console.log('Product Created!', data);

            navigate(`/product/${data.createdProduct.id}`)
            toast.success('Product successfully created!');


        } catch (error) {
            console.log(error.message);
            toast.error(`Product did not update - error: ${error.message}`)
        }
    
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newProduct = {
            title,
            price,
            image,
            description,
            category
        }
        createProduct(newProduct);

        setTitle('');
        setPrice('');
        setImage('https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg');
        setDescription('');
        setCategory('');
    }

  return (
    <div>
        <div>
            <h2>Details:</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter title' value={title} onChange={(event) => setTitle(event.target.value)} required/>
                <input type="number" placeholder='Enter price' value={price} onChange={(event) => setPrice(event.target.value)} step=".01" required/>
                <textarea type="text" placeholder='Enter category' value={category} onChange={(event) => setCategory(event.target.value)} required></textarea>
                <input type="text" placeholder='Enter image url' value={image} onChange={(event) => setImage(event.target.value)} required/>
                <textarea type="text" placeholder='Enter description' value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
                <button>Create Product</button>
            </form>

        </div>
    </div>

  )
}

export default ProductForm
