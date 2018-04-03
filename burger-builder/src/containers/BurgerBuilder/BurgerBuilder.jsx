import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

export default class BurgerBuilder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4
    }
  }

  addIngredientHandler = (type) => {
    this.setState(prevState => {
      prevState.ingredients[type] += 1
      return {
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
        ingredients: prevState.ingredients
      }
    })
  }

  removeIngredientHandler = (type) => {
    this.setState(prevState => {
      prevState.ingredients[type] -= 1
      return {
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
        ingredients: prevState.ingredients
      }
    })
  }

  render () {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler}/>
      </Aux>
    )
  }
}