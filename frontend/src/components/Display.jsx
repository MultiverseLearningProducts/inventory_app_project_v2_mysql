import React from 'react';

function ProductCard({item}) {
    return (
        <div className='card'>
            <h3> Product: </h3>
            <h4> {item.name} </h4>
            <h2> { item.description } </h2>
        </div>
    )
}

export default ProductCard;