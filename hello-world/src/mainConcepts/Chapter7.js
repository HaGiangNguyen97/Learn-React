import React from "react";

function UserGreeting(props) {
  return <h1>Welcome back !</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  //let khai bao khong duoc trung

  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function ButtonLogin(props) {
  return <button onClick={props.onClick}>Login </button>;
}
function ButtonLogout(props) {
  return <button onClick={props.onClick}>Logout </button>;
}

class Chapter7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  handleLogin() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }
  handleLogout() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <ButtonLogout onClick={this.handleLogout.bind(this)} />;
    } else {
      button = <ButtonLogin onClick={this.handleLogin.bind(this)} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default Chapter7;
