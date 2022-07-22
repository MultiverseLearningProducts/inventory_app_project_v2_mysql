import React from 'react'

function Footer() {

    const year = new Date().getFullYear();
  return (
    <footer>
      Copyright &copy; {year} | Runtime Terror. LLC.
    </footer>
  )
}

export default Footer
