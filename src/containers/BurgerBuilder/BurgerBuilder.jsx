import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
  cheese: .5,
  butter: 1.5,
  salad: 2
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      butter: 0,
      salad: 0
    },
    price: 4,
    allowPurchase: false,
    purchasing: false
  }

  orderHandler = () => {
    // console.log('orderHandler is called');
    this.setState({ purchasing: true });
  }

  closeModal = () => {
    // console.log('Cancel order clicked');
    this.setState({ purchasing: false });
  }

  continueOrder = () => {
    window.alert('Your order has been placed successfully.');
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients).map(
      igKey => {
       return ingredients[igKey]; 
      }
    ).reduce((sum, el) => {
      return sum + el;
    }, 0);
    // console.log(sum);
    this.setState({allowPurchase: sum > 0});
    // console.log(this.state);
  }

  addIngredientHandler = (type) => {
    /* Calculating the counts */
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;

    /* We will update the state in immutable fashion */
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCount;

    /* Calculating the new price */
    const oldPrice = this.state.price;
    const updatedPrice = INGREDIENT_PRICE[type];
    const newPrice = oldPrice + updatedPrice;

    this.setState({
      ingredients: updatedIngredients,
      price: newPrice
    });
    /* Here we are passing the latest state to the method */
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    /* Calculating the counts */
    const oldCount = this.state.ingredients[type];
    if ( oldCount <= 0) {
      /* If the Old count is below 0 or equal to 0 then we will do nothing */
      return;
    }
    const updateCount = oldCount - 1;
    /* We will update the state in immutable fashion */
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCount;

    /* Calculating the new price */
    const oldPrice = this.state.price;
    const updatedPrice = INGREDIENT_PRICE[type];
    const newPrice = oldPrice - updatedPrice;

    this.setState({
      ingredients: updatedIngredients,
      price: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} clicked={this.closeModal}>
          <OrderSummary ingredients={this.state.ingredients} price={this.state.price} closeModal={this.closeModal} continueOrder={this.continueOrder}/> 
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.price}
          added={this.addIngredientHandler}
          removed={this.removeIngredientHandler}
          disabled={disabledInfo}
          allowPurchase={this.state.allowPurchase}
          orderClicked={this.orderHandler}
          showModal={this.state.purchasing}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;