import React from 'react';
import LinkButton from '../components/LinkButton';
import UserForm from '../components/UserForm';


function CreateUser() {
  return (
    <div className='container' style={{flexDirection: 'column'}}>
        <p>Please fill out this form to create a new user</p>
        <UserForm />
        {/* <LinkButton to='/users' text={'Back to Users'}/> */}
    </div>
  )
}

export default CreateUser