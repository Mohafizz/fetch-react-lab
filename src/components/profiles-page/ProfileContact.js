import React from 'react';

function ProfileContact(props){
    return <div className="profileContact">
    <div>Email {props.contact.email}</div>
    <div>Phone {props.contact.phone}</div>
    <div>Cell {props.contact.cell}</div>
    </div>
}

export default ProfileContact;