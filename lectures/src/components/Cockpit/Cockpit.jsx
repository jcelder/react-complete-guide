import React from 'react'
import styles from './Cockpit.css'

const Cockpit = props => {
  const paragraphStyles = ['']
  let btnStyles = ''
  if (props.showPersons) {
    btnStyles = styles.Red
  }
  if(props.persons.length <= 2) {
    paragraphStyles.push(styles.red)
  }
  if(props.persons.length <= 1) {
    paragraphStyles.push(styles.bold)
  }
  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I'm a React App!</h1>
      <p className={paragraphStyles.join(' ')}>This is really working!</p>
      {/* () => this.function(arguments) can be inefficient as it can cause multiple rerenders */}
      <button 
        className={btnStyles}
        onClick={props.clicked}>Show Persons</button>
    </div>
  )
}

export default Cockpit