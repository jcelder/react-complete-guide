import React from 'react'

import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'

import styles from './Layout.css'

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={styles.Content}>
      {props.children}
    </main>
  </Aux>
)

export default Layout
