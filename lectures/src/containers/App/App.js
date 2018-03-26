import React, { Component } from 'react';
import PersonsList from '../../components/PersonsList/PersonsList'
import styles from './App.css';

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
    let persons = null
    let btnStyles = null
    if(this.state.showPersons) {
      persons = (
        <div>
          <PersonsList
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      )
    btnStyles = styles.Red
    }

    const paragraphClasses = ['']
    if(this.state.persons.length <= 2) {
      paragraphClasses.push(styles.red)
    }
    if(this.state.persons.length <= 1) {
      paragraphClasses.push(styles.bold)
    }
    
    return (
      <div className={styles.App}>
        <h1>Hi, I'm a React App!</h1>
        <p className={paragraphClasses.join(' ')}>This is really working!</p>
        {/* () => this.function(arguments) can be inefficient as it can cause multiple rerenders */}
        <button 
          className={btnStyles}
          onClick={this.togglePersonsHandler}>Show Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
