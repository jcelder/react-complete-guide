import React, { Component } from 'react';
import Person from '../Person/Person'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { id: 'asdf', name: 'Max', age: 28 },
        { id: 'fdsa', name: 'Manu', age: 30 },
        { id: 'as1fd', name: 'Stephanie', age: 31 },
      ],
      showPersons: false,
    }
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
          </div>
      )
      style.backgroundColor = 'red'
    }

    const paragraphClasses = ['']
    if(this.state.persons.length <= 2) {
      paragraphClasses.push('red')
    }
    if(this.state.persons.length <= 1) {
      paragraphClasses.push('bold')
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p className={paragraphClasses.join(' ')}>This is really working!</p>
        {/* () => this.function(arguments) can be inefficient as it can cause multiple rerenders */}
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Show Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
