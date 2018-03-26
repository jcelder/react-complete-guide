import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputText: '',
      inputLength: 0,
    }
  }

  inputChangedHandler = (event) => {
    this.setState({
      inputText: event.target.value,
      inputLength: event.target.value.length,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <input type="text" value={this.state.inputText} onChange={this.inputChangedHandler} />
        <p>Text Length: {this.state.inputLength}</p>
      </div>
    );
  }
}

export default App;
