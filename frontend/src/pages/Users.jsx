import React, { useState, useEffect } from "react";
// import LinkButton from '../components/LinkButton';
import Card  from "../components/Card";
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);

    const getData = async () => {
        const response = await fetch(`http://localhost:8000/api/users`);
        const data = await response.json();
    
        console.log('Data: ', data);
        const { users } = data;
        setUsers(users);
        console.log('Users: ', users);
      };
    
    useEffect(() => {
        getData();
      }, []);


    return (
      <div>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          {users.length > 0
          ? users.map((item) => <Card key={item.id} item={item}/> )
          : <Loader />}
        </div>
      </div>
    )
}

export default Users;