import React from 'react'
import ProductCard from './Display'

function DisplayList({displayList}) {
    return (
        <div className="displaylist">
            {
                displayList.length > 0 ? displayList.map( (cat) => 
                <ProductCard key={cats.id} cats={cats}/>) : "No Cats in this list"
            } 
        </div>
    )
}

export default DisplayList;