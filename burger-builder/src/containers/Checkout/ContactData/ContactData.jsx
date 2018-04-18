import React, { Component } from 'react'
import axios from '../../../axios-orders'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
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
      },
      loading: false,
    }
  }

  orderHandler = async (event) => {
    event.preventDefault()
    this.setState({ loading: true})
    // alert('Continue order!')
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Josh Elder',
        address: {
          street: 'Teststreet 1',
          zipcode: '12345',
          country: 'USA',
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    try {
      await axios.post('/orders.json', order)
      this.setState({ loading: false})
      this.props.history.push('/')
    } catch (e) {
      this.setState({ loading: false})
    }
  }

  render () {
    let form = (
      <form>
          <input className={styles.Input} type="text" name="name" placeholder="Name" />
          <input className={styles.Input} type="email" name="email" placeholder="Email Address" />
          <input className={styles.Input} type="text" name="street" placeholder="Street Address" />
          <input className={styles.Input} type="text" name="city" placeholder="City" />
          <input className={styles.Input} type="text" name="state" placeholder="State" />
          <input className={styles.Input} type="text" name="zip" placeholder="Zip Code" />
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    } 
    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData