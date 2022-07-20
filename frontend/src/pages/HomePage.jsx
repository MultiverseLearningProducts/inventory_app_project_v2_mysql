import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
        <Link to='/users'>Users</Link>
    </div>
  )
}

export default HomePage