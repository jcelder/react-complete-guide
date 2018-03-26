import React from 'react'
import './CharComponent.css'

const CharComponent = (props) => {
  return(
    <p className="character" onClick={props.click}>{props.char}</p>
  )
}

export default CharComponent