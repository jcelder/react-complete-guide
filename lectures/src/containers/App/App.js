import React, { Component } from 'react';

import PersonsList from '../../components/PersonsList/PersonsList'
import Cockpit from '../../components/Cockpit/Cockpit'

import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] Inside Constructor', props)
    this.state = {
      persons: [
        { id: 'asdf', name: 'Max', age: 28 },
        { id: 'fdsa', name: 'Manu', age: 30 },
        { id: 'as1fd', name: 'Stephanie', age: 31 },
      ],
      showPersons: false,
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
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
    console.log('[App.js] Inside render()')
    let persons = null
    if(this.state.showPersons) {
      persons = <PersonsList
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    
    }
    return (
      <div className={styles.App}>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
