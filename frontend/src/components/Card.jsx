import React from 'react';
import LinkButton from './LinkButton';

function Card({item}) {
    return (
        
        <div className="card">
            <div className="img">
                <img src={item.profile_pic} alt="profile_pic" />
            </div>
            <div className="card-Name">
                <h3>{item.first_name} {item.last_name}</h3>
             </div>
             <div className="job_title">
                    <p>{item.job_title}</p>
             </div>
            <div className="button">
                <LinkButton to={`/users/${item.id}`} text={'View'}/>
            </div>

        </div>
    )
}


export default Card