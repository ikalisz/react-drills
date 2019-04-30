import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state ={
      arrItems : ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      userInput: ''
    }
  }

  handleUpdateUserInput(val) {
    this.setState({userInput: val})
  }

  handleFilterArray() {
    let arrCopy = this.state.arrItems.slice()
    let resultsArr = arrCopy.filter((val) => {
      return val.includes(this.state.userInput) === true
    })
    this.setState({arrItems: resultsArr})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => {
          this.handleUpdateUserInput(e.target.value),
          this.handleFilterArray()}} />
        <ul>
          {JSON.stringify(this.state.arrItems)}
        </ul>
      </div>
    );
  }
}

export default App;
