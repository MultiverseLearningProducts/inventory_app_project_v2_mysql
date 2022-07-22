import React from "react";
import "./UpdateUser.css";
import { useParams } from "react-router-dom";
import UserForm from "../../components/UserForm/UserForm";

function UpdateUser() {
  const { id } = useParams();

  return (
    <div className="container" style={{ backgroundColor: "#84A98C" }}>
      <h2>Update User: </h2>
      <UserForm userId={id} />
    </div>
  );
}

export default UpdateUser;
