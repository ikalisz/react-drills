import React, { Component } from "react";
import "./App.css";
import Todo from './Component/Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      itemList: [],
      userInputNewItem: '',

    }
  }

  handleUpdateUserInput = (val) => (
    this.setState({userInputNewItem: val.target.value})
  )
  
  handleAddNewItem = () => {
    let itemListCopy = this.state.itemList.slice()
    itemListCopy.push(this.state.userInputNewItem)
    this.setState({itemList: itemListCopy})
  }


  render() {
    return (
      <div>
        <header><h1>My to-do list:</h1></header>
        <div>
          <input type="text" onChange={(e) => this.handleUpdateUserInput(e)}/>
          <button onClick={() => this.handleAddNewItem()}>Add</button>
          <Todo list={this.state.itemList}/>
        </div>
      </div>
    );
  }
}

export default App;
