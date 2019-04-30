import React, { Component } from "react";
import "./App.css";
import NewTask from './Components/NewTask'
import List from './Components/List'

class App extends Component {
  constructor() {
    super()
    this.state = {
      itemList: [],
    }
  }
  updateUserInput = (val) => {
    console.log(this.state.userInput)
    this.setState({userInput: val.target.value})
  }

  handleAddTask = (task) => {
    console.log(this.state.itemList)
    this.setState({itemList: [...this.state.itemList, task]})
  }

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.itemList}/>
      </div>
    );
  }
}

export default App;
