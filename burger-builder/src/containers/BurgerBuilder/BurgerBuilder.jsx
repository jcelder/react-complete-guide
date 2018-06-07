import React, { Component } from 'react'
import { connect } from 'react-redux'

import axios from '../../axios-orders'

import Aux from '../../hoc/Aux/Aux'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actionTypes from '../../store/actions'

class BurgerBuilder extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(ing => {
        return ingredients[ing]
      })
      .reduce((acc, val) => (acc + val), 0)
      return sum > 0
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout')
  }

  render () {
    const disabledInfo = { ...this.props.ings }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null
     
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />
    
    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={(ingredientName) => this.props.onIngredientAdded(ingredientName)}
            ingredientRemoved={(ingredientName) => this.props.onIngredientRemoved(ingredientName)}
            currentPrice={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
            disabled={disabledInfo}
          />
        </Aux>
      )
      orderSummary = <OrderSummary 
      ingredients={this.props.ings} 
      cancelClicked={this.purchaseCancelHandler}
      continueClicked={this.purchaseContinueHandler}
      totalPrice={this.props.price} />
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

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingredientName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName }),
    onIngredientRemoved: (ingredientName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))