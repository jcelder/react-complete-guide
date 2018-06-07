import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from '../../../axios-orders'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Forms/Input/Input'
import styles from './ContactData.css'

class ContactData extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orderForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Name'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false,
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Email Address'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false,
        },
        street: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Street Address'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false,
        },
        city: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'City'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false,
        },
        state: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'State'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false,
        },
        zip: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Zip Code'
          },
          value: '',
          validation: {
            required: true,
            minLength: 5,
            maxLength: 5
          },
          valid: false,
          touched: false,
        },
        deliveryMethod: {
          elementType: 'select',
          elementConfig: {
            options: [
              {value: 'fastest', displayValue: 'Fastest'},
              {value: 'cheapest', displayValue: 'Cheapest'}
            ]
          },
          value: 'fastest',
          valid: true,
        },
      },
      loading: false,
      formIsValid: false,
    }
  }

  orderHandler = async (event) => {
    event.preventDefault()
    this.setState({ loading: true})
    // alert('Continue order!')
    const formData = {}
    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      formData: formData
    }
    try {
      await axios.post('/orders.json', order)
      this.setState({ loading: false})
      this.props.history.push('/')
    } catch (e) {
      this.setState({ loading: false})
    }
  }

  checkValidity = (value, rules) => {
    let isValid = false;
    if (!rules) {
      return true
    }
    if (rules.required) {
      isValid = value.trim() !== ''
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }
    return isValid
  } 

  inputChangeHandler = (event, id) => {
    let formIsValid = true
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedElement = { ...updatedOrderForm[id] }
    updatedElement.value = event.target.value
    updatedElement.valid = this.checkValidity(updatedElement.value, updatedElement.validation)
    updatedElement.touched = true
    updatedOrderForm[id] = updatedElement
    for (let inputId in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputId].valid && formIsValid
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid})
  }

  render () {
    const formElementsArray = []
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    let form = (
      <form onSubmit={this.orderHandler}>
          {formElementsArray.map((elem) => {
            return <Input
              key={elem.id}
              elementType={elem.config.elementType} 
              elementConfig={elem.config.elementConfig} 
              value={elem.config.value}
              invalid={!elem.config.valid}
              shouldValidate={elem.config.validation}
              touched={elem.config.touched}
              changed={(event) => this.inputChangeHandler(event, elem.id)} />
          })}
          <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
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

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

export default connect(mapStateToProps)(ContactData)