import React, { useState, useEffect }from "react";
import LinkButton from '../components/LinkButton';




function HomePage() {
    const [users, setUsers] = useState([]);

    const getData = async () => {
    const response = await fetch(`http://localhost:8000/users/`)
    const data = await response.json();
    console.log(data);
    }
    
    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="container">
            <h1>Hi mom</h1>
        </div>

    )
}

export default HomePage;