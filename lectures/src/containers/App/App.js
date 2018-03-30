import React, { Fragment, PureComponent } from 'react';

import withClass from '../../hoc/withClass'
import PersonsList from '../../components/PersonsList/PersonsList'
import Cockpit from '../../components/Cockpit/Cockpit'

import styles from './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[App.js] Inside Constructor', props)
    this.state = {
      persons: [
        { id: 'asdf', name: 'Josh', age: 30 },
        { id: 'fdsa', name: 'Jon', age: 28 },
        { id: 'as1fd', name: 'Michael', age: 48 },
      ],
      showPersons: false,
      toggleClicked: 0,
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState)
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()')
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
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
      <Fragment>
        <button onClick={() => {this.setState({ showPersons: true })}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </Fragment>
    );
  }
}

export default withClass(App, styles.App);
