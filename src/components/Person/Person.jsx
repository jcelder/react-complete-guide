import React, { Component } from 'react'

// class Person extends Component  {
//   render() {
//     return(
//       <p>My name is {this.props.name} and I am {this.props.age} years old!</p>
//     )
//   }
// }

const Person = (props) => {
  return(
    <div>
      <p>My name is {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  )
}
export default Person
