import React, { Component } from 'react';

import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './BurgerIngredient.scss'

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-top'):
        ingredient = <div styleName="bread-top"></div>;
        break;
      case ('cheese'):
        ingredient = <div styleName="cheese"></div>;
        break;
      case ('salad'):
        ingredient = <div styleName="salad"></div>
        break;
      case ('butter'):
        ingredient = <div styleName="butter"></div>
        break;
      case ('bread-bottom'):
        ingredient = <div styleName="bread-bottom"></div>
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

export default CSSModules(BurgerIngredient, styles, {
  allowMultiple: true
});