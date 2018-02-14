import React from 'react';

import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Butter', type: 'butter'}
];

const buildControls = (props) => (
  <div className="build-controls">
    <div className="burger-price">Current Price is: <strong>${ props.price }</strong></div>
    { controls.map((elem) => (
      <BuildControl
        label={elem.label}
        key={elem.label}
        added={() => props.added(elem.type)}
        removed={() => props.removed(elem.type)}
        disabled={props.disabled[elem.type]}
      />
    )) }
    <button className="btn btn--order-btn" disabled={!props.allowPurchase} onClick={props.orderClicked}>Order Now!</button>
  </div>
);

export default buildControls;