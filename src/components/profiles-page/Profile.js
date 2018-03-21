import React, { Component } from "react";
import ProfileName from "./ProfileName";
import ProfilePic from "./ProfilePic";
import ProfileContact from "./ProfileContact";
import ProfileAddress from "./ProfileAddress";

class Profile extends Component {
  constructor(props) {
    super();
    this.state = { showAddress: false };
  }
  render() {
    const profileClass =
      this.props.profile.gender === "male"
        ? "profile bluefish"
        : "profile magenta";
    const details = this.state.showAddress ? (
      <ProfileAddress location={this.props.profile.location} />
    ) : (
      <ProfileContact contact={this.props.profile} />
    );

    return (
      <div className={profileClass}>
        <ProfilePic picture={this.props.profile.picture} />
        <ProfileName name={this.props.profile.name} nat={this.props.profile.nat}/>
        <div className="clickable" onClick={this.toggleAddress.bind(this)}>
        {details}
        </div>
      </div>
    );
  }

  toggleAddress() {
    let newState = this.state;
    newState.showAddress = !newState.showAddress;
    this.setState(newState);
  }
}

export default Profile;
