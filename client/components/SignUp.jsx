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
    this.signup = this.signup.bind(this);
  }

  handleFormChange(event) {
    //updates state based on form input values
    let signupParamsNew = { ...this.state.signupParams };
    let val = event.target.value;
    signupParamsNew[event.target.name] = val;

    this.setState({ signupParams: signupParamsNew });
    console.log(this.state.signupParams);
  }
  signup(event) {
    let usernamefromstate = this.state.signupParams.Username;
    let userpassword = this.state.signupParams.Password;
    let useremail = this.state.signupParams.Email;
    //write conditional if username and password match the database
    fetch("/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernamefromstate,
        password: userpassword,
        email: useremail,
      }),
    })
      //then check for res data
      .then(function (response) {
        if (res.data === true) {
          alert("You are now signed up!");
          // history.push("/");
        }
      })
      //catch all errors
      .catch((err) => {
        console.log(err);
      });
  }

  //run next set cookie/session
  //add find one here

  // event.preventDefault();
  // }

  render() {
    return (
      <div id="signupform">
        <div>&nbsp;</div>
        <div id="signupinput">
          <form onSubmit={this.signup} action="/user/signup" method="POST">
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
              <button id="loginbutton" type="submit">
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
