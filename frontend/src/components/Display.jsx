import React from 'react';
import "./photos.css"

export default function ProductCard({cats}) {
    return (
        <div className='cards'>
            <h2> {cats.name} </h2>
            <h4> { cats.description } </h4>
            <img src={cats.image_url} alt={cats.name} className="catPhotos"/>
        </div>
    )

}
