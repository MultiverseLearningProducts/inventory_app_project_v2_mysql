import React from 'react'
import ProductCard from './Display'

function DisplayList(displaylist) {
    return (
        <div>
            {
                displaylist.length > 0 ?
                displaylist.map( (cat) => <ProductCard key={cat.id} cats = {cat} />)
                : 'No Cat in this list'
            }
        </div>
    )
}

export default DisplayList