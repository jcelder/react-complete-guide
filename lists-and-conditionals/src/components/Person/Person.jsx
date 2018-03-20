import React from 'react'
import './Person.css'

// class Person extends Component  {
//   render() {
//     return(
//       <p>My name is {this.props.name} and I am {this.props.age} years old!</p>
//     )
//   }
// }

const Person = (props) => {
  return (
    <div className="container-person">
      <p onClick={props.click}>My name is {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed}/>
    </div>
  )
}
export default Person
