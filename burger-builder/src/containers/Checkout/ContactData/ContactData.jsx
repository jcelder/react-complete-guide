import React, { Component } from 'react'

import Button from '../../../components/UI/Button/Button'
import styles from './ContactData.css'

class ContactData extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      address: {
        street: '',
        city: '',
        state: '',
        zipcode: ''
      }
    }
  }
  render () {
    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email Address" />
          <input type="text" name="street" placeholder="Street Address" />
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="state" placeholder="State" />
          <input type="text" name="zip" placeholder="Zip Code" />
          <Button btnType="Success" click>ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData