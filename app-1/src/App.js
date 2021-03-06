import React, { Component } from "react";
import "./App.css";
//center
class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ''
    }
  }

  handleUpdateText(val) {
    this.setState({userInput: val})
  }
  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.handleUpdateText(e.target.value)} />
        <h2>{this.state.userInput}</h2>
      </div>
    );
  }
}

export default App;
