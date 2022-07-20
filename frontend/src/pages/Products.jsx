import React, { useState, useEffect } from 'react';
import ProductCard from '../components/Display';

function Products(props) {
    const [cats, setCats] = useState([]);
    const getData = async () => {
        const res = await fetch('');
        const data = await res.json();
        console.log('Data: ', data);
        const {cats} = data;
        setCats(cats)
        console.log('Cats: ', cats)
    };
    useEffect( () => {
        getData();
    }, []);

    return(
        <div className="cats">
            <h1>Cat App </h1>
            <div className="container">
                {data.description}
                {cats.length > 0 ? cats.map( (data) => <ProductCard name={data.name} />) : "No cats to display"}
            </div>
        </div>
    )
}



export default Products