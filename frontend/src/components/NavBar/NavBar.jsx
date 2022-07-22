import React from 'react';

function Nav() {
  return (
    <nav className="topnav">
    <a className="active" href="#Inventory-App">Inventory App</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <a href="#Users-Page">Users Page</a>
    <a href="#User-Page">User Page</a>
    <a href="/products">Products Page</a>
    <a href="#Product-Page">Product Page</a>
    <a href="#User-Form">User Form</a>
    <a href="#Product-Form">Product Form</a>
    {/* <input type="text" placeholder="Search.."/> */}
  </nav>
  )
}

export default Nav