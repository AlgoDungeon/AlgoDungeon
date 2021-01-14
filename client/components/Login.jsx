import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import "../styles/LoginPage.scss";
import Logo from "../images/AlgoDungeonLogo.png";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loginParams: {
        Username: "",
        Password: "",
      },
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.login = this.login.bind(this);
  }
  handleFormChange(event) {
    //updates state based on form input values
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;

    this.setState({ loginParams: loginParamsNew });
    console.log(this.state.loginParams);
  }
  login(event) {
    let username = this.state.loginParams.Username;
    let userpassword = this.state.loginParams.Password;
    //write conditional if username and password match the database

    //run next set cookie/session
    //add find one here

    event.preventDefault();
  }

  render() {
    //if condition to check for cookie here
    //when it is true return <Redirect to="/game"/>
    return (
      <div id="loginform">
        <div>&nbsp;</div>
        <div id="logininput">
          <form onSubmit={this.login} action="submit">
            <center>
              <img src={Logo} />
            </center>
            <br></br>
            <label>Username:&nbsp;</label>
            <input
              type="text"
              name="Username"
              value={this.state.Username}
              onChange={this.handleFormChange}
              required
            />
            <br></br>
            <br></br>
            <label>Password:&nbsp;&nbsp;</label>
            <input
              type="text"
              name="Password"
              value={this.state.Password}
              onChange={this.handleFormChange}
              required
            />
            <br></br> <br></br>
            <center>
              <button id="loginbutton" name="submit" type="submit">
                Log in
              </button>
            </center>
            <br></br>
            <center>
              <p>
                Don't have an account?&nbsp;
                <NavLink to="/signup">
                  <strong>
                    <u>Sign up</u>
                  </strong>
                </NavLink>
              </p>
              <p>
                Game Now !!&nbsp;
                <NavLink to="/game">
                  <strong>
                    <u>!!!! </u>
                  </strong>
                </NavLink>
              </p>
            </center>
          </form>
        </div>
        <div>&nbsp;</div>
      </div>
    );
  }
}
export default LoginPage;
