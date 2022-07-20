import React from 'react';
import LinkButton from '../components/LinkButton';
import UserForm from '../components/UserForm';

function CreateUser() {
  return (
    <div className='container' style={{flexDirection: 'column'}}>
        <h1>Create User: </h1>
        <UserForm />
        <LinkButton to='/users' text={'Back to Users'}/>
    </div>
  )
}

export default CreateUser