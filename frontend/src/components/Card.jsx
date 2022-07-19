import React from "react";
import LinkButton from './LinkButton';



export function Card({User}) {
    return (
        <div className="card">
            <div className="img">
                <img src={User.profile_pic} alt="profile_pic" />
            </div>
            <div className="card-Name">
                <h3>{User.first_name} {User.last_name}</h3>
             </div>
             <div className="job_title">
                    <p>{User.job_title}</p>
             </div>
            <div className="button">
                <LinkButton to={`profile/${User.id}`} text={'View'}/>
            </div>
        </div>
    )
}