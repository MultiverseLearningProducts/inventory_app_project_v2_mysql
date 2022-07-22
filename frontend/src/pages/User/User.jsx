import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UserInfo from "../../components/UserInfo/UserInfo";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState();

  const getUser = async (userId) => {
    const response = await fetch(`http://localhost:8000/api/users/${userId}`);

    const data = await response.json();

    console.log(data.user);

    setUser(data.user);
  };

  useEffect(() => {
    getUser(id);
  }, [id]);

  return (
    <div className="container">
      <div className="user-container">
        <h1>User Information:</h1>
        <div>{user ? <UserInfo user={user} /> : ""}</div>
      </div>
    </div>
  );
}

export default User;
