import React, { Component } from 'react'
import styles from './Person.css'

class Person extends Component {
  constructor(props) {
    super(props)
    console.log('[Person.jsx] Inside Constructor', props)
  }

  componentWillMount() {
    console.log('[Person.jsx] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[Person.jsx] Inside componentDidMount()')
  }
  render() {
    console.log('[Person.jsx] Inside render()')
    return (
      <div className={styles['container-person']}>
        <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" value={this.props.name} onChange={this.props.changed}/>
      </div>
    )
  }
}
export default Person
