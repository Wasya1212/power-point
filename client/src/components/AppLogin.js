import React, { Component } from 'react';
import {Link as RouteLink} from 'react-router-dom';
import {
  Button,
  Colors,
  Row
} from 'react-foundation';
import logoIcon from '../logo-icon.png';

export class RegistrationItem extends Component {
  constructor(props) {
    super(props);
  }

  showLogin = () => {
    this.props.showLogin();
  }

  render() {
    return (
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
            <p className="additional-control">
              <span className="login-switch">
                <a onClick={this.showLogin}>Login</a>
              </span>
            </p>
          </fieldset>
        </form>
      </section>
    );
  }
}

export class LoginItem extends Component {
  constructor(props) {
    super(props);
  }

  showRegistration = () => {
    this.props.showRegisration();
  }

  render() {
    return (
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
            <p className="additional-control">
              <span className="forgot-password">
                <a href="/login/lost-password" target="_blank">Lost your password?</a>
              </span>
              <span className="registrate-switch">
                <a onClick={this.showRegistration}>Registrate</a>
              </span>
            </p>
          </fieldset>
        </form>
        <section className="social">
          <Button isExpanded className="facebook-login-btn"><span className="link-icon"><img src="https://www.vectorico.com/wp-content/uploads/2018/02/Facebook-Logo.png"/></span>Log in with Facebook</Button>
          <Button isExpanded className="google-login-btn"><span className="link-icon"><img src="http://blog.addthiscdn.com/wp-content/uploads/2015/11/Google_logo.png"/></span>Sing in with Goggle</Button>
        </section>
      </section>
    );
  }
}

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switcher: true
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    alert();
  }

  goToLogin = () => {
    this.setState({
      switcher: true
    });
  }

  goToRegistration = () => {
    this.setState({
      switcher: false
    });
  }

  render() {
    return (
      <article className="sign-container login-container">
        <Row isColumn>
          <section className="login-logo-container">
            <img src={logoIcon} alt="Presentate.com"/>
          </section>
          {
            this.state.switcher
              ? <LoginItem showRegisration={this.goToRegistration} />
              : <RegistrationItem showLogin={this.goToLogin}/>
          }
        </Row>
      </article>
    );
  }
}
