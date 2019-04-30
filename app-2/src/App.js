import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state ={
      arrItems : ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  
  render() {
    const arrItemsDisplay = this.state.arrItems.map((food, i) => {
      return <li key={i}>{food}</li>
    })
    return (
      <div>
        <ul>
          {arrItemsDisplay}
        </ul>
      </div>
    );
  }
}

export default App;
