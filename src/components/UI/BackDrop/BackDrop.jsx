import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './BackDrop.scss';

const backDrop = (props) => (
  props.show ? <div styleName="back-drop" onClick={props.clicked}></div> : null
);

export default CSSModules(backDrop, styles, {
  allowMultiple: true
});