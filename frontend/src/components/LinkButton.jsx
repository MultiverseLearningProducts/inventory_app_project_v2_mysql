
import React from 'react'
import { Link } from 'react-router-dom';

function LinkButton({text, to}) {
  return (
    <Link to={to} className='link-btn'>
      {text}
    </Link>
  )
}

export default LinkButton
