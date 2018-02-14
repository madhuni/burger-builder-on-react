import React from 'react';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';

const modal = (props) => {
  const modalClass = ['modal modal--order-details']; 
  if (props.show) {
    modalClass.push('open-modal');
  } else {
    modalClass.push('close-modal');
  }
  return (
    <Aux>
      <BackDrop show={props.show} clicked={props.clicked}/>
      <div className={ modalClass.join(' ') }>
        { props.children }
      </div>
    </Aux>
)};

export default modal;