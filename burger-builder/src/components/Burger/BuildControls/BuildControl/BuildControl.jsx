import React from 'react'

const buildControl = (prop) => (
  <div>
    <div>{props.label}</div>
    <button>Less</button>
    <button>More</button>
  </div>
)

export default buildControl