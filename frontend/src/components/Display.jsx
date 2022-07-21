import React from 'react';
import "./photos.css";
import popUp from '../pages/Product';

function ProductCard({cats}) {
    return (
        <div className='cards'>
            <h3>Cat:  </h3>
            <h2>{cats.name} </h2>
            <img className = "catPhotos" src={cats.image_url} alt={cats.name}></img>
            <button onClick={() => <popUp/>}>Details</button>
        </div>
    )

}

export default ProductCard