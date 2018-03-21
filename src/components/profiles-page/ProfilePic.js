import React from "react";

function ProfilePic(props) {
  return (
    <div className="profilePic" >
      <img src={props.picture.large} alt="" />
    </div>
  );
}

export default ProfilePic;
