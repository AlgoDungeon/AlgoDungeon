import React, { Component } from "react";
import "../styles/SignUp.scss";
import Logo from "../images/AlgoDungeonLogo.png";

class SignupPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="signupform">
        <div>&nbsp;</div>
        <div id="signupinput">
          <form onSubmit={this.handleSubmit} action="submit">
            <center>
              <img src={Logo} />
            </center>
            <br></br>
            <label>
              E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input onChange={this.handleChange} />
            <br></br>
            <br></br>
            <label>Username:&nbsp;&nbsp;</label>
            <input onChange={this.handleChange} />
            <br></br> <br></br>
            <label>Password:&nbsp;&nbsp;&nbsp;</label>
            <input onChange={this.handleChange} />
            <br></br> <br></br>
            <center>
              <button id="loginbutton" name="submit" type="submit">
                Sign Up
              </button>
            </center>
          </form>
        </div>
        <div>&nbsp;</div>
      </div>
    );
  }
}

export default SignupPage;
