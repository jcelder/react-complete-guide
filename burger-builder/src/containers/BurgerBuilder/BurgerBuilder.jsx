import React, { Component } from 'react'

import axios from '../../axios-orders'

import Aux from '../../hoc/Aux/Aux'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: null,
    }
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get('/ingredients.json')
      this.setState({ ingredients: response.data })
    } catch (error) {
      this.setState({ error: true })
    }
  }

  addIngredientHandler = async (type) => {
    await this.setState(prevState => {
      prevState.ingredients[type] += 1
      return {
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
        ingredients: prevState.ingredients
      }
    })
    this.updatePurchaseState()
  }

  removeIngredientHandler = async (type) => {
    await this.setState(prevState => {
      if (prevState.ingredients[type] > 0) {
        prevState.ingredients[type] -= 1
      }
      return {
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
        ingredients: prevState.ingredients
      }
    })
    this.updatePurchaseState()
  }

  updatePurchaseState () {
    const ingredients = { ...this.state.ingredients }
    const sum = Object.keys(ingredients)
      .map(ing => {
        return ingredients[ing]
      })
      .reduce((acc, val) => (acc + val), 0)
      this.setState({ purchasable: sum > 0})
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = async () => {
    this.setState({ loading: true})
    // alert('Continue order!')
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
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
      const response = await axios.post('/orders.json', order)
      this.setState({ loading: false, purchasing: false})
      console.log(response)
    } catch (e) {
      this.setState({ loading: false, purchasing: false})
    }
  }

  render () {
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null
     
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />
    
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            currentPrice={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            disabled={disabledInfo}
          />
        </Aux>
      )
      orderSummary = <OrderSummary 
      ingredients={this.state.ingredients} 
      cancelClicked={this.purchaseCancelHandler}
      continueClicked={this.purchaseContinueHandler}
      totalPrice={this.state.totalPrice} />
    }
    if (this.state.loading) {
      orderSummary = <Spinner />
    }
    
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} loading={this.state.loading}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)