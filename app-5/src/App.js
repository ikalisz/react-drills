import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Component/Image'

class App extends Component {
  constructor() {
    super()
    this.state = {
      image: 'https://via.placeholder.com/150',
    }
  }
  render() {
    return (
      <div>
        <Image imgSrc={this.state.image}/>
      </div>
    );
  }
}

export default App;
