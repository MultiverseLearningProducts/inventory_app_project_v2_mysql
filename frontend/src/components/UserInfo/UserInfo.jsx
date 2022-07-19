import React from "react";

function UserInfo({ user }) {
  return (
    <div className="container">
      <div className="user-info-container">
        <div className="user-info-image">
          <img src={user.profile_pic} alt={user.first_name} />
        </div>
        <div className="user-info-name">
          <h3>
            `${user.first_name} ${user.last_name}`
          </h3>
        </div>
        <div className="user-info-content">
          <p>`Email: ${user.email}`</p>
          <p>`Username: ${user.username}`</p>
          <p>`Password: ${user.password}`</p>
          <p>`Admin: ${user.is_admin}`</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
