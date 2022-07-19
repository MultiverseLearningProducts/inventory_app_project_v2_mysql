import React, { useState, useEffect } from 'react'
import ProductCard from '../components/Display';

function Products() {
    const [ products, setProducts ] = useState([])

    const getData = async () => {
        const res = await fetch(``);
        const data = await res.json();

        console.log('Data: ', data);
        const { products } = data;
        setProducts(products);
        console.log('Products: ', products);
    };

    useEffect( () => {
        getData();
    }, []); 

    return (
        <div className='products'>
            <h1> Inventory App </h1>
            <div className='container'>
                {products.length > 0 
                ? products.map((item) => <ProductCard key={item} />)
                : 'No products to display at this time...' }
            </div>
        </div>
    )
}

export default Products