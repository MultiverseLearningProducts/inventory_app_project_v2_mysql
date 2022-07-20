import React, {useState, useEffect}  from 'react'; 
import { useParams } from 'react-router-dom';

import UserDescriptionCard from '../components/UserDescriptionCard';
import Loader from '../components/Loader';

function User() {

    const {id} = useParams();

    const [ user, setUser ] = useState();

    const getUser = async (userId) => {
        const response = await fetch(`http://localhost:8000/api/users/${userId}`);

        const data = await response.json();

        console.log(data.user);

        setUser(data.user);
    }

    useEffect(() => {
        getUser(id);
    },[id]);



  return (
    <div className='container'>
      <div className='user'>
        <h1>User Details:</h1>
        <div>
          {user ? <UserDescriptionCard item={user} /> : <Loader />}
        </div>
      </div>
    </div>
  )
}

export default User