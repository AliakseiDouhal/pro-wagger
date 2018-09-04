import React, { Component } from 'react';
import { compose } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { withRouter } from 'react-router-dom';
import { userSelector } from '../../selectors/auth';
import { app } from 'firebase';

class Board extends Component {

  componentDidMount() {
    const user = async () => app.auth().currentUser;
    console.log(user);
  }

  test = () => {
    app().firestore().collection("wagers").add({
      creator: "Alan",
      opport: "Mathison",
    })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }

  render() {
    console.log(this.props.user);
    return (
      <div>
        <p onClick={this.test}>Board</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: userSelector(state)
});

export default compose(
  connect(mapStateToProps, null),
  withRouter
)(Board);
