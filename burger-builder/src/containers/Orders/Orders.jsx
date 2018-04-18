import React, { Component } from 'react'

import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orders: [],
      loading: true
    }
  }
  componentDidMount() {
    this.fetchOrders()
  }

  fetchOrders = async () => {
    try{
      const response = await axios.get('/orders.json')
      const fetchedOrders = []
      for (let key in response.data) {
        fetchedOrders.push({
          ...response.data[key],
          id: key
        })
      }
      this.setState({ orders: fetchedOrders, loading: false})
    } catch (e) {
      this.setState({ loading: false })
      console.log(e)
    }
  }

  render() {
    return(
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price} />
        ))}
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios)