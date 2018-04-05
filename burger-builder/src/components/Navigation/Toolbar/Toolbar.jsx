import React from 'react'

import NavigationItems from '../NavigationItems/NavigationItems'

import styles from './Toolbar.css'
import Logo from '../../Logo/Logo'

const toolbar = props => (
  <header className={styles.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar