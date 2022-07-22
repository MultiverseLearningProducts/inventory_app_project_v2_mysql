import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

function UserInfo({ user }) {
  const navigate = useNavigate();

  const deleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        console.log("DELETE!");
        const response = await fetch(
          `http://localhost:8000/api/users/${userId}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();

        console.log("User deleted!", data);
        navigate("/api/users");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <Card
      style={{
        width: "42vh",
      }}
    >
      <CardBody>
        <CardTitle tag="h3">
          {user.first_name} {user.last_name}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h5">
          <p>Admin: {user.is_admin ? "Yes" : "No"}</p>
        </CardSubtitle>
      </CardBody>
      <CardImg
        className="text-center"
        alt={user.first_name}
        src={user.profile_pic}
        width="100%"
      />
      <CardBody>
        <CardText>Email: {user.email}</CardText>
        <CardText>Username: {user.username}</CardText>
        <CardText>Password: {user.password}</CardText>
        <CardText>This user has purchased: </CardText>
        <Button
          href={`/update-user/${user.id}`}
          style={{ backgroundColor: "#52796F" }}
        >
          Update Info
        </Button>{" "}
        <Button color="danger" onClick={() => deleteUser(user.id)}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
}

export default UserInfo;
