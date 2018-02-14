import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>{igKey.toUpperCase()}: {props.ingredients[igKey]} {props.ingredients[igKey] >1 ? 'Pieces' : 'Piece'}</li>
    );
  });
  return (
    <Aux>
      <h1>Your Order</h1>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        { ingredients }
      </ul>
      <p>Total Price: <strong>${props.price}</strong></p>
      <p>Continue to checkout?</p>
      <Button clicked={props.closeModal}>Cancel</Button>
      <Button clicked={props.continueOrder}>Continue</Button>
    </Aux>
  );
}

export default orderSummary;