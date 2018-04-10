import React from 'react'

import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

import styles from './Layout.css'

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={styles.Content}>
      {props.children}
    </main>
  </Aux>
)

export default Layout
