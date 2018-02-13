import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
    price: 4
  }

  addIngredientHandler = (type) => {
    /* Calculating the counts */
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;

    /* We will update the state in immutable fashion */
    const updatesIngredients = {
      ...this.state.ingredients
    };
    updatesIngredients[type] = updateCount;

    /* Calculating the new price */
    const oldPrice = this.state.price;
    const updatedPrice = INGREDIENT_PRICE[type];
    const newPrice = oldPrice + updatedPrice;

    this.setState({
      ingredients: updatesIngredients,
      price: newPrice
    });
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
    const updatesIngredients = {
      ...this.state.ingredients
    };
    updatesIngredients[type] = updateCount;

    /* Calculating the new price */
    const oldPrice = this.state.price;
    const updatedPrice = INGREDIENT_PRICE[type];
    const newPrice = oldPrice - updatedPrice;

    this.setState({
      ingredients: updatesIngredients,
      price: newPrice
    });
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
        <Burger ingredients = {this.state.ingredients} />
        <BuildControls
          price = { this.state.price }
          added = { this.addIngredientHandler }
          removed = { this.removeIngredientHandler }
          disabled = { disabledInfo }
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;