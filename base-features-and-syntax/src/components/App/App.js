import React, { Component } from 'react';
import Person from '../Person/Person'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 30 },
        { name: 'Stephanie', age: 31 },
      ],
    }
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Jon', age: 28 },
        { name: 'Cenzo', age: 29 },
      ],
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 30 },
        { name: event.target.value, age: 28 },
        { name: 'Cenzo', age: 29 },
      ],
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        {/* () => this.function(arguments) can be inefficient as it can cause multiple rerenders */}
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Josh')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          // this is the preferred way of passing arguments for performance reasons
          click={this.switchNameHandler.bind(this, 'Max')} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>
          My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
