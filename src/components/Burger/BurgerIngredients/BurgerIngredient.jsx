import React, { Component } from 'react';

import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-top'):
        ingredient = <div className="bread-top"></div>;
        break;
      case ('cheese'):
        ingredient = <div className="cheese"></div>;
        break;
      case ('salad'):
        ingredient = <div className="salad"></div>
        break;
      case ('butter'):
        ingredient = <div className="butter"></div>
        break;
      case ('bread-bottom'):
        ingredient = <div className="bread-bottom"></div>
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;