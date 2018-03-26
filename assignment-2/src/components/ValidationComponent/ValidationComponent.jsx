import React from 'react'

const ValidationComponent = (props) => {
  return(
    props.inputLength < 5 ? <p>Text too short</p> : <p>Text long enough</p>
  )
}

export default ValidationComponent