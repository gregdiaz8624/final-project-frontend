import React, { Component } from 'react';

class ProfileContainer extends Component {

  render() {
    let {username} = this.props.user

    return (
      <div>
        <h2>{username}&apos;s Profile</h2>
        <h3>Orders</h3>
     

      </div>
    );
  }

}

export default ProfileContainer;