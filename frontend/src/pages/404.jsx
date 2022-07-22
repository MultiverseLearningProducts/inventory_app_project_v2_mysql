import React from 'react'
import LinkButton from '../components/productPage/LinkButton'

function NotFound() {
  return (
    <div className='container'>
      <div>
          <h1>I'm Sorry Page not found: 404</h1>
          <img src={require('../Not-Found.png')}alt ={"cat"} />
          <div></div>
          <LinkButton to={'/'} text={'Home'}/>
      </div>
      
    </div>
  )
}

export default NotFound
