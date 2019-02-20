import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetails extends Component {
  render() {
    if (!this.props.user) {
      return <h4>Click on a user to view details...</h4>;
    }
    return (
      <div>
        <h2>
          {this.props.user.first} {this.props.user.last}
        </h2>
        <h3>Age: {this.props.user.age}</h3>
        <h3>Description: {this.props.user.description}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}
export default connect(mapStateToProps)(UserDetails);
