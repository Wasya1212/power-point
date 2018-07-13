import React, { Component } from 'react';
import {Link as RouteLink} from 'react-router-dom';
import {
  Button,
  Colors,
  Row
} from 'react-foundation';
import logoIcon from '../logo-icon.png';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    alert();
  }

  render() {
    return (
      <article className="sign-container login-container">
        <Row isColumn>
          <section className="login-logo-container">
            <img src={logoIcon} alt="Presentate.com"/>
          </section>
          <section className="login-form">
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <legend>Login</legend>
                <p>
                  <label>
                    <input type="text" placeholder="Email" name="username" />
                  </label>
                </p>
                <p>
                  <label>
                    <input type="password" placeholder="Password" name="password" />
                  </label>
                </p>
                <p>
                  <input id="remember-me" type="checkbox" name="rememberMe" />
                  <label htmlFor="remember-me">Remember me</label>
                </p>
                <p>
                  <Button color={Colors.SECONDARY} isExpanded>Log In</Button>
                </p>
                <p>
                  <span className="forgot-password">
                    <a href="/login/lost-password">Lost your password?</a>
                  </span>
                  <span className="registrate-switch">
                    <RouteLink exact to='/sign/signTarget=registration'>Registrate</RouteLink>
                  </span>
                </p>
              </fieldset>
            </form>
            <section className="social">
              <Button isExpanded><span className="link-icon"><img src=""/></span>Log in with Facebook</Button>
              <Button isExpanded><span className="link-icon"><img src=""/></span>Sing in with Goggle</Button>
            </section>
          </section>
        </Row>
      </article>
    );
  }
}

export default Login;
