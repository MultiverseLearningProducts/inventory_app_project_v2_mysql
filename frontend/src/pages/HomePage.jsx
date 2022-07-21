import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='home-page'>
        <Link to='/users' className='link-btn'>Users</Link>
        <Link to='/create-user' className='link-btn'>Create User</Link>
    </div>
  )
}

export default HomePage