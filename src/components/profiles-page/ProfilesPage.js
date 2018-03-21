import React, { Component } from "react";
import Profile from "./Profile";
import "./Profile.css";

class ProfilesPage extends Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
    this.appendUsers = this.appendUsers.bind(this);
  }

  getUsers(number = 10) {
    return fetch("https://randomuser.me/api?results=" + number)
      .then(data => {
        return data.json();
      })
      .then(data => data.results);
  }

  componentDidMount() {
    this.getUsers().then(data => this.setState({ profiles: data }));
  }

  appendUsers(event, number = 10) {
    this.getUsers(number).then(data => {
      let newProfiles = this.state.profiles.concat(data);
      this.setState({ profiles: newProfiles });
    });
  }

  render() {
    const profiles = this.state.profiles.map((profile, i) => (
      <Profile key={i} profile={profile} />
    ));
    return (
      <div>
        <div className="profileContainer">{profiles}</div>
        <div className="buttonContainer">
          <button className="btn" onClick={this.appendUsers}>
            Get more users
          </button>
        </div>
      </div>
    );
  }
}

export default ProfilesPage;
