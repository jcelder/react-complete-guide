import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import styles from './BuildControls.css'

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
]

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <p>Current Price: <strong>${props.currentPrice.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label} 
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <button
      className={styles.OrderButton}
      onClick={props.ordered}
      disabled={!props.purchasable}>Order Now!</button>
  </div>
)

export default buildControls