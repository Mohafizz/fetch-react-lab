import React from 'react';

function ProfileCountry(props){
    return <img className="countryIcon" src={"http://www.countryflags.io/"+props.nat+"/flat/16.png"} alt="country flag"/>
}

export default ProfileCountry;