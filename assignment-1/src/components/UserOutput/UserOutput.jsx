import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
  return(
    <div className="container-UserOutput">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mollis elit, in vehicula libero.
          Suspendisse ut hendrerit nulla, nec egestas orci. Aliquam et pharetra ligula. Donec mollis vel mauris non tincidunt.
          Curabitur id bibendum leo, id maximus leo. Vivamus malesuada nisi finibus tempus hendrerit.
          Proin suscipit dapibus enim,quis hendrerit enim bibendum at. Etiam nibh nisl, tincidunt id augue non, tristique consectetur dolor.
      </p>
      <p>{props.userName}</p>
    </div>
  )
}

export default UserOutput