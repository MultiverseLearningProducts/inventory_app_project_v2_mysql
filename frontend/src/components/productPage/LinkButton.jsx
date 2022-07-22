import React from 'react'
import { Link } from 'react-router-dom';

function LinkButton({text, to, bgColor, textColor}) {

  const btnStyles = {
    backgroundColor: bgColor,
    color: textColor
  }
  return (
    <Link to={to} className='link-btn' style={btnStyles}>
      {text}
    </Link>
  )
}

export default LinkButton
