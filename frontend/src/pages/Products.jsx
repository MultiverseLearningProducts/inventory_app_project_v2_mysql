import React, { useState, useEffect } from 'react'
import ProductCard from '../components/Display';
import DisplayList from '../components/DisplayList';

function Products(props) {
    const [ products, setProducts ] = useState([])
    const getData = async () => {
        const res = await fetch('http://localhost:8000/cats');
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
            {cats.length > 0 ? <DisplayList displaylist ={cats} /> 
            : "No cats to display"}
               
            </div>
        </div>
    )
}

export default Products