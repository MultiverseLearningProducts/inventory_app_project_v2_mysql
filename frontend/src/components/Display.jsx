import React from 'react';
import "./photos.css"

function ProductCard({cats}) {
    return (
        <div className='card'>
            <h3> Product: </h3>
            <h4>Name: {cats.name} </h4>
            <h2>Weight: { cats.weight} </h2>
        </div>
    )

}

export default ProductCard;