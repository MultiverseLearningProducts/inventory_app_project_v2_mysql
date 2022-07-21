import React from 'react'
import ProductCard from './Display'
//import './photos.css'

function DisplayList({cats}){

    
    return ( 
            <div className='cats'>
                <div className='list'>
                    {
                        cats.length > 0 ?
                        cats.map((cat) => <ProductCard key={cat.id} cats = {cat}/>)
                        : 'No Cats In This List'
                    }
                </div>
            </div>
    )
}

export default DisplayList