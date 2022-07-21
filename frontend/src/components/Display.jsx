import React from 'react';
import "./photos.css"

function ProductCard({cats}) {
    return (
        <div className='cards'>
            <h3>Cat:  </h3>
            <h2>{cats.name} </h2>
            <h4>{cats.description} </h4>
            <img className = "catPhotos" src={cats.image_url} alt={cats.name}></img>
        </div>
    )

}

export default ProductCard
