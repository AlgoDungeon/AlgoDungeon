import React, { Component } from "react";
import "../styles/SignUp.scss";
import Logo from "../images/AlgoDungeonLogo.png";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupParams: {
        Username: "",
        Password: "",
        Email: "",
      },
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.signnp = this.signnp.bind(this);
  }

  handleFormChange(event) {
    //updates state based on form input values
    let signupParamsNew = { ...this.state.signupParams };
    let val = event.target.value;
    signupParamsNew[event.target.name] = val;

    this.setState({ signupParams: signupParamsNew });
    console.log(this.state.signupParams);
  }
  signnp(event) {
    let username = this.state.signupParams.Username;
    let userpassword = this.state.signupParams.Password;
    //write conditional if username and password match the database

    //run next set cookie/session
    //add find one here

    event.preventDefault();
  }

  render() {
    return (
      <div id="signupform">
        <div>&nbsp;</div>
        <div id="signupinput">
          <form onSubmit={this.signnp} action="submit">
            <center>
              <img src={Logo} />
            </center>
            <br></br>
            <label>
              E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
              type="text"
              name="Email"
              value={this.state.Email}
              onChange={this.handleFormChange}
              required
            />
            <br></br>
            <br></br>
            <label>Username:&nbsp;&nbsp;</label>
            <input
              type="text"
              name="Username"
              value={this.state.Username}
              onChange={this.handleFormChange}
              required
            />
            <br></br> <br></br>
            <label>Password:&nbsp;&nbsp;&nbsp;</label>
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
