import React from "react";
import LinkButton from './LinkButton';
import HomePage from "../pages/HomePage";



 function Card({item}) {
    return (
        
        <div className="card">
            <h1>hi mom</h1>
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
                <LinkButton to={`profile/${item.id}`} text={'View'}/>
            </div>
        </div>
    )
}


export default Card