import React from 'react';
import "./photos.css"

function ProductCard({cats}) {
    return (
        <div className='cards'>
            <h2>{cats.name} </h2>
            <img className = "catPhotos" src={cats.image_url} alt={cats.name}></img>
            <button> Details </button>
        </div>
    )

}

export default ProductCard