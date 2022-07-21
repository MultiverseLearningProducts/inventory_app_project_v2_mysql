import React, { useState, useEffect } from "react";
import Card  from "../components/Card";
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);

    const [query, setQuery] = useState("")

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
        <input placeholder="Enter Users Name" onChange={event => setQuery(event.target.value)} />
        <div className="container">
          {users.length > 0
          ? users.filter(item => {
            if (query === '') {
              return item;
            } else if (item.first_name.toLowerCase().includes(query.toLowerCase()) || item.last_name.toLowerCase().includes(query.toLowerCase())) {
              return item;
            }
            return false;
          }).map((item) => <Card key={item.id} item={item}/> )
          : <Loader />}
        </div>
      </div>
    )
}

export default Users;