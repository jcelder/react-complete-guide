import React from 'react'

import Aux from '../../hoc/Aux'
import styles from './Cockpit.css'

const Cockpit = props => {
  const paragraphStyles = ['']
  let btnStyles = styles.Button
  if (props.showPersons) {
    btnStyles = [styles.Button, styles.Red].join(' ')
  }
  if(props.persons.length <= 2) {
    paragraphStyles.push(styles.red)
  }
  if(props.persons.length <= 1) {
    paragraphStyles.push(styles.bold)
  }
  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={paragraphStyles.join(' ')}>This is really working!</p>
      {/* () => this.function(arguments) can be inefficient as it can cause multiple rerenders */}
      <button 
        className={btnStyles}
        onClick={props.clicked}>Toggle Persons</button>
    </Aux>
  )
}

export default Cockpit