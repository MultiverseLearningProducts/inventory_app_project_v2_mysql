import { Link } from 'react-router-dom';

function NavBar() {
    return (
    <nav>
        <Link to='/' className='link-btn-user'>Home</Link>
        <Link to="/create-user" className='link-btn-user'>Create User</Link>
      </nav>
    )
}

export default NavBar;