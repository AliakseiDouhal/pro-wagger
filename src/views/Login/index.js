import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import {login} from '../../redux/auth';

class LoginPage extends Component {
  onSubmit = creds => {
    const {history} = this.props;
    this.props.login(creds, history)
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                name="login"
                component="input"
                type="text"
                placeholder="Login"
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="password"
                component="input"
                type="text"
                placeholder="passsword"
              />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    );
  }
}

const mapDispatchToProps = {
  login,
};

export default compose(
  connect(null, mapDispatchToProps),
  withRouter
)(LoginPage);
