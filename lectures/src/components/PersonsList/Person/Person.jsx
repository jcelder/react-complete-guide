import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

import withClass from '../../../hoc/withClass'
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
    if (this.props.position === 0) {
      this.inputElement.focus()
    }
  }
  render() {
    console.log('[Person.jsx] Inside render()')
    return (
      <Fragment>
        <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => {this.inputElement = inp}}
          type="text" 
          value={this.props.name}
          onChange={this.props.changed}/>
      </Fragment>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
}

export default withClass(Person, styles.person)
