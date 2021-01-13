import React, { Component } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import '../styles/LoginPage.scss';
import Logo from '../images/AlgoDungeonLogo.png';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //updates state based on form input values
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    // let teacherName = this.name.value;
    // let teacherTopic = this.topic.value;
    // let path = `teachers/${teacherTopic}/${teacherName}`;
    // // this is the part !!!
    // this.props.history.push(path);

    event.preventDefault();
    const loginForm = {
      username: email,
      password: password,
    };

    let history = useHistory();

    // props.submitEmail(loginForm.email);
    // props.submitPassword(loginForm.password);

    axios.post('/api/user/login', loginForm).then((res) => {
      console.log(res.data);
      if (res.data === true) {
        history.push('/home');
      } else {
        //alert please enter a valid email and username
      }
    });
  }

  render() {
    return (
      <div id="loginform">
        <div>&nbsp;</div>
        <div id="logininput">
          <form onSubmit={this.handleSubmit} action="submit">
            <center>
              <img src={Logo} />
            </center>
            <br></br>
            <label>Username:&nbsp;</label>
            <input onChange={this.handleChange} required />
            <br></br>
            <br></br>
            <label>Password:&nbsp;&nbsp;</label>
            <input onChange={this.handleChange} required />
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
            </center>
          </form>
        </div>
        <div>&nbsp;</div>
      </div>
    );
  }
}

export default LoginPage;
