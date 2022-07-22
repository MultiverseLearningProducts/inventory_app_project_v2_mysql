import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Row, Col, Label, Input, Button } from "reactstrap";

function UserForm({ userId }) {
  const navigate = useNavigate();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPasswaord] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [profile_pic, setProfilePic] = useState("");
  const [is_admin, setIsAdmin] = useState(false);

  const getUser = async (userId) => {
    const response = await fetch(`http://localhost:8000/api/users/${userId}`);
    const data = await response.json();
    const { user } = data;
    console.log("User: ", user);

    setFirstName(user.first_name);
    setLastName(user.last_name);
    setUsername(user.username);
    setPasswaord(user.password);
    setEmail(user.email);
    setAvatar(user.avatar);
    setProfilePic(user.profile_pic);
    setIsAdmin(user.is_admin);
  };

  const updateUser = async (userId, updatedUser) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      const data = await response.json();
      console.log(`User updated: ${data}`);
      navigate(`/user/${userId}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedUser = {
      first_name,
      last_name,
      username,
      password,
      email,
      avatar,
      profile_pic,
      is_admin,
    };
    console.log("New User: ", updateUser);
    updateUser(userId, updatedUser);
  };

  useEffect(() => {
    getUser(userId);
  }, [userId]);

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              type="name"
              value={first_name}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              type="name"
              value={last_name}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="Username"
              type="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPasswaord(event.target.value)}
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </FormGroup>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="avatar">Avatar</Label>
            <Input
              id="avatar"
              name="avatar"
              placeholder="Avatar URL"
              value={avatar}
              onChange={(event) => setAvatar(event.target.value)}
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="profile_pic">Profile Picture</Label>
            <Input
              id="profile_pic"
              name="profile_pic"
              placeholder="Profile Picture URL"
              value={profile_pic}
              onChange={(event) => setProfilePic(event.target.value)}
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup check>
        <Input
          id="is_admin"
          name="is_admin"
          type="checkbox"
          value={is_admin}
          onChange={() => setIsAdmin(!is_admin)}
        />
        <Label check for="is_admin">
          Are you an Admin?
        </Label>
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UserForm;
