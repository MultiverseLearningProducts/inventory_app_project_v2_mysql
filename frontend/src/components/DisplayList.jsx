import React from 'react'
import ProductCard from './Display'

function DisplayList({displayList}){
    return (
        <div>
            {
            displayList.length > 0 ?
            displayList.map((cat) => <ProductCard key={cat.id} cats = {cat}/>)
            : 'No Cats In This List'
            }
        </div>

    )
}

export default DisplayList