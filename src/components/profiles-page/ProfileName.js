import React from "react";
import capFirst from "./utils"
import ProfileCountry from './ProfileCountry';


function ProfileName(props) {
  return (
    <div className="profileName">
      {capFirst(props.name.title)} {capFirst(props.name.first)}{" "}
      {capFirst(props.name.last)}
      <ProfileCountry nat={props.nat} />
    </div>
  );
}

export default ProfileName;
