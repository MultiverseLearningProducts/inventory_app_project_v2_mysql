import React from 'react';
import { useNavigate } from 'react-router-dom';

import LinkButton from './LinkButton';

function UserDescriptionCard ({item}) {

  const navigate = useNavigate();

  const deleteItem = async (itemId) => {
    if(window.confirm('Are you sure you want to delete?')){

      try{
        console.log('DELETE!');
        const response = await fetch(`http://localhost:8000/api/users/${itemId}`, {
          method: 'DELETE'
        });
  
        const data = await response.json();
  
        console.log('Product deleted!', data);  
      } catch (error) {
        console.log(error.message);
      }
      navigate('/')
    }
  }

  return (
    <div className='description-card'>
      <div className="description-card-title">
        <h3>{item.first_name} {item.last_name}</h3>
      </div>
      <div className='user-email'>
        <p>{item.email}</p>
      </div>
      <div className="description-card-image">
        <img src={item.avatar} alt={item.title}/>
      </div>
      <div className="job_title">
        <p>{item.job_title}</p>
      </div>
      <div className="location">
        <p>{item.location}</p>
      </div>

      <div className="description-card-actions">
        <LinkButton to={`/`} text={'Back'}/>
        <button className='link-btn' style={{
            border: 'none',  
            color: 'white', 
            backgroundColor: '#722946',
            cursor: 'pointer'}}
            onClick={() => deleteItem(item.id)}>
              Delete User
        </button>
        <LinkButton to={`/edit-user/${item.id}`}text={'Edit'}/>
      </div>
    </div>
  )
}

export default UserDescriptionCard;