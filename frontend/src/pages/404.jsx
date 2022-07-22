import React from 'react'
import LinkButton from '../components/productPage/LinkButton'

function NotFound() {
  return (
    <div className='container'>
      <div className='about-page'>
          <h1>Page not found: 404</h1>
          <p>The route you're attempting to access does not exist.</p>
          <LinkButton to={'/'} text={'Home'}/>
      </div>
      
    </div>
  )
}

export default NotFound
