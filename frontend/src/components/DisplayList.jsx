import React from 'react'
import ProductCard from './Display'
import './photos.css'

function DisplayList({displayList}){
    return (
        <div className='list'>
            {
            displayList.length > 0 ?
            displayList.map((cat) => <ProductCard key={cat.id} cats = {cat}/>)
            : 'No Cats In This List'
            }
        </div>
    )
}

export default DisplayList