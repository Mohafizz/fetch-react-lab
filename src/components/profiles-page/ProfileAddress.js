import React from "react";
import { capWords } from "./utils";

function ProfileAddress(props) {
  console.log(props);
  return (
    <div className="profileAddress">
      <div>{capWords(props.location.street)}</div>
      <div>{capWords(props.location.city)}</div>
      <div>{capWords(props.location.state)}</div>
      <div>{capWords(props.location.postcode)}</div>
    </div>
  );
}

export default ProfileAddress;
