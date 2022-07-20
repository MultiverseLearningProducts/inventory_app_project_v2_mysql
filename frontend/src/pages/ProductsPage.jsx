
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//import Product from '../../../backend/src/models/Products';
import ProductCard from '../Components/productPage/ProductCard'

function ProductsPage() {
    const [products, setProducts] = useState();

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8000/api/products`)
            .then((response) => response.json());

        console.log(response)
        // const arr = Object.values(data)

        //    console.log("DATA:"+typeof arr.products);

        setProducts(response.products)
        // return arr;
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <h1> Product Details:</h1>
            <div>
                {products && products.map((product) =>
                    <ProductCard item={product} />
                )}
            </div>

        </div>
    )

}

export default ProductsPage;