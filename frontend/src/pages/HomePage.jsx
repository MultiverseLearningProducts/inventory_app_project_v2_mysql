import React, { useState, useEffect }from "react";
import LinkButton from '../components/LinkButton';
import  Card  from "../components/Card";
import Loader from '../components/Loader';




function HomePage() {
    const [users, setUsers] = useState([]);

    const getData = async () => {
    const response = await fetch(`http://localhost:8000/api/users/`, {
        headers: {
          'SameSite': 'None'
        }
    })
    const data = await response.json();
    console.log(data);
    const { users } = data;
    console.log(data);
    setUsers(users);
    }
    
    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="container">
           {users.length > 0
        ? users.map((item) => <Card key={item.id} item={item} />)
        : <Loader />}
           

            
        </div>

    )
}

export default HomePage;