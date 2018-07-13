import React, { Component } from 'react';
import {Link as RouteLink} from 'react-router-dom';
import {
  Button,
  Colors,
  Row
} from 'react-foundation';
import logoIcon from '../logo-icon.png';

class Registration extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    alert();
  }

  render() {
    return (
      <article className="sign-container registration-container">
        <Row isColumn>
          <section className="login-logo-container">
            <img src={logoIcon} alt="Presentate.com"/>
          </section>
          <section className="registration-form">
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <legend>Registration</legend>
                <p>
                  <label>
                    <input type="text" placeholder="Email" name="email" />
                  </label>
                </p>
                <p>
                  <label>
                    <input type="text" placeholder="Nickname" name="nickname"/>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="password" placeholder="Password" name="password" />
                  </label>
                </p>
                <p>
                  <label>
                    <input type="password" placeholder="Retype Password" name="retypePassword" />
                  </label>
                </p>
                <p>
                  <input id="term-conditions" type="checkbox"/>
                  <label htmlFor="">I accept the <a href="/about/terms-and-conditions" target="_blank">Terms and Conditions</a></label>
                </p>
                <p>
                  <Button color={Colors.SECONDARY} isExpanded>Sign Up</Button>
                </p>
                <p>
                  <span className="login-switch">
                    <RouteLink exact to='/sign/signTarget=login'>Login</RouteLink>
                  </span>
                </p>
              </fieldset>
            </form>
          </section>
        </Row>
      </article>
    );
  }
}

export default Registration;
