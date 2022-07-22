import React from 'react'
import LinkButton from '../components/productPage/LinkButton';

import ProductForm from '../components/productPage/CreateCard';

function CreateProduct() {
    
  return (
    <div>
      <h1>Create New Product: </h1>
      <ProductForm />
      <LinkButton to="/" text={'Back'}/>
    </div>
  )
}

export default CreateProduct
