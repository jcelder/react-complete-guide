import React from 'react'
import styles from './Person.css'

const Person = (props) => {
  return (
    <div className={styles['container-person']}>
      <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed}/>
    </div>
  )
}
export default Person
