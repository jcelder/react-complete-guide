import React, { PureComponent } from 'react'
import Person from './Person/Person'

class PersonsList extends PureComponent {
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

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE PersonsList.jsx] Inside componentWillReceiveProps()', nextProps)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE PersonsList.jsx] Inside shouldComponentUpdate()', nextProps, nextState)
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE PersonsList.jsx] Inside componentWillUpdate()', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[UPDATE PersonsList.jsx] Inside componentDidUpdate()')
  }
  render () {
    console.log('[PersonsList.jsx] Inside render()')
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        position={index}
        changed={(event) => this.props.changed(event, person.id)}
        />
    })
  }
  
}
  export default PersonsList
