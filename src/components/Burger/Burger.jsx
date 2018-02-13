import React from 'react';

import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

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
    transformedIngredients = <p className='msg'>Please start adding ingredients!</p>
  }

  // console.log(transformedIngredients);

  return (
    <div className="burger">
      <BurgerIngredient type='bread-top' />
      { transformedIngredients }
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
}

export default burger;