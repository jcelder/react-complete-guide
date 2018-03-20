import React from 'react'
import './UserInput.css'

const UserInput = (props) => {
  return (
    <div className="container-UserInput">
      <input type="text" value={props.userName} onChange={props.changed} />
    </div>
  )
}

export default UserInput
