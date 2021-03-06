import React from 'react';

import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

import CSSModules from 'react-css-modules';
import styles from './Burger.scss';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // console.log(i);
        return <BurgerIngredient key={ igKey + i } type={ igKey }/>
      });
    })
    .reduce(function(arr, el) {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p styleName="u-text-center">Please start adding ingredients!</p>
  }

  return (
    <div styleName="burger">
      <BurgerIngredient type='bread-top' />
      { transformedIngredients }
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
}

export default CSSModules(burger, styles, {
  allowMultiple: true
});