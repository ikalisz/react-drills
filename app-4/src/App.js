import React, { Component } from "react";
import "./App.css";
import Login from './Login'
class App extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password: '',
    }
  }
  handleUpdateUserName = (val) => {
    this.setState({userName: val})
  }

  handleUpdatePassword = (val) => {
    this.setState({password: val})
  }

  handleAlertInfo = () => {
    window.alert(
      `Username: ${this.state.userName} Password: ${this.state.password}`
    )
  }

  render() {
    return (
      <div>
        <Login 
        userName={this.state.userName}
        password={this.state.password}
        updateUserName={this.handleUpdateUserName}
        updatePassword={this.handleUpdatePassword}
        buttonAction={this.handleAlertInfo}
        />
      </div>
    );
  }
}

export default App;
