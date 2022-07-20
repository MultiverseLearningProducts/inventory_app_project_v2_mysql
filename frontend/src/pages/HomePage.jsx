import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
        <Link to='/users'>Users</Link>
        <Link to='/create-user'>Create User</Link>
    </div>
  )
}

export default HomePage