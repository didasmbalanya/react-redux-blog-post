import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {

  render() {
    return (
      <div className="header">{this.props.user && this.props.user.name}</div>
    );
  }
}

const mapStateToProps = ({ users, posts }, ownProp) => {
  return {
    user: users && users.find((user) => user.id === ownProp.id),
    posts: posts,
  };
};

export default connect(mapStateToProps)(UserHeader);
