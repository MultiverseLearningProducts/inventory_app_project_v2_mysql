import React, { useParams } from 'react-router';
import EditForm from '../components/EditForm';
import LinkButton from '../components/LinkButton';


function EditUser() {
    const {id} = useParams();

  return (
    <div className='container'>
        <div className="edit-user">
            <h3>Edit User</h3>
            <EditForm userId={id} />
            <LinkButton to={`/users`} text={'Back'}/>
        </div>
    </div>
  )
}

export default EditUser 