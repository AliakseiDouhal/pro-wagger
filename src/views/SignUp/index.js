import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { signUp } from '../../redux/auth';

class SignUpPage extends Component {
  onSubmit = creds => this.props.signUp(creds);

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
  signUp,
};
export default connect(null, mapDispatchToProps)(SignUpPage);
