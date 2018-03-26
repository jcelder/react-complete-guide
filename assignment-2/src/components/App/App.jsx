import React, { Component } from 'react';
import './App.css';
import ValidationComponent from '../ValidationComponent/ValidationComponent'
import CharComponent from '../CharComponent/CharComponent'

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

  charClickHandler = (charIndex) => {
    const newInputText = [...this.state.inputText]
    newInputText.splice(charIndex, 1)
    this.setState({
      inputText: newInputText.join(''),
      inputLength: newInputText.join('').length
    })
  }

  render() {
    let characters = null
    if(this.state.inputLength > 0) {
      characters = 
      <div>
        {this.state.inputText.split('').map((char, index) => {
          return <CharComponent
            key={index}
            char={char}
            click={() => this.charClickHandler(index)}/>
        })}
      </div>
    }

    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <input type="text" value={this.state.inputText} onChange={this.inputChangedHandler} />
        <p>Text Length: {this.state.inputLength}</p>
        <ValidationComponent inputLength={this.state.inputLength} />
        {characters}
      </div>
    );
  }
}

export default App;
