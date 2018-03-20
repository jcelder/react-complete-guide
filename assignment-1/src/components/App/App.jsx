import React, { Component } from 'react';
import UserInput from '../UserInput/UserInput'
import UserOutput from '../UserOutput/UserOutput'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = ({ userName: 'Josh' })
  }

  changeName = (event) => {
    console.log(event.target.value)
    this.setState({ userName: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <UserInput style={this.inputStyle} userName={this.state.userName} changed={this.changeName}/>
        <UserOutput userName={this.state.userName}  />
        <UserOutput />
      </div>
    );
  }
}

export default App;
