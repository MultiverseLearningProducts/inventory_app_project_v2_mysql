import React from 'react';


function ProductCard ({item}) {
    return (
        <div>
      <div>
        <h3>{item.title}</h3>
      </div>
      <div className>
        {`$ ${item.price}`}</div>
      <div>
        <img src={item.image} alt={item.title}/>
      </div>
      <div>
        {item.description}
      </div>
      </div>
    )
}

export default ProductCard;

