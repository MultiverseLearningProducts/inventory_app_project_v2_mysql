 
 import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//import Product from '../../../backend/src/models/Products';
import ProductCard from '../Components/productPage/ProductCard'

function ProductPage() {
    const {id} = useParams();

    const [ product, setProduct ] = useState();

    useEffect(() => {
        getProduct(id);
    },[id]);


    const getProduct = async (productId) => {
        const response = await fetch(`http://localhost:8000/api/product/${productId}`)

        const data = await response.json();

        console.log(data.product);

        setProduct(data.product)
    }


    return (
        <div>
            <h1> Product Details:</h1>
            <div>
                {product ? <ProductCard item={product}/> : <>Loading...</>}
            </div> 

        </div>
    )

}

export default ProductPage;