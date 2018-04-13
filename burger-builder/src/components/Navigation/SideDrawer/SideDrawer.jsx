import React from 'react'

import Aux from '../../../hoc/Aux/Aux'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/Backdrop/Backdrop'

import styles from './SideDrawer.css'

const sideDrawer = (props) => {
  let attachedStyles = [styles.SideDrawer, styles.Close]
  if (props.open) {
    attachedStyles = [styles.SideDrawer, styles.Open]
  }
  return(
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedStyles.join(' ')} /* onClick={props.closed}*/>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer