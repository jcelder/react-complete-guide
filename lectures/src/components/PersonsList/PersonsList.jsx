import React, { Component } from 'react'
import Person from './Person/Person'

class PersonsList extends Component {
  constructor(props) {
    super(props)
    console.log('[PersonsList.jsx] Inside Constructor', props)
  }

  componentWillMount() {
    console.log('[PersonsList.jsx] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[PersonsList.jsx] Inside componentDidMount()')
  }
  render () {
    console.log('[PersonsList.jsx] Inside render()')
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)}
        />
    })
  }
  
}
  export default PersonsList
