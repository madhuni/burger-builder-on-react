import React from 'react';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';

import CSSModules from 'react-css-modules';
import styles from './Modal.scss';

const modal = (props) => {
  const modalClass = ['modal']; 
  if (props.show) {
    modalClass.push('open-modal');
  } else {
    modalClass.push('close-modal');
  }
  // console.log(styles);
  return (
    <Aux>
      <BackDrop show={props.show} clicked={props.clicked}/>
      <div styleName={ modalClass.join(' ') }>
        { props.children }
      </div>
    </Aux>
)};

export default CSSModules(modal, styles, {
  allowMultiple: true
});