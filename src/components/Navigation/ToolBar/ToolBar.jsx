import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import CSSModules from 'react-css-modules';
import styles from './ToolBar.scss';

const toolBar = (props) => (
  <div styleName="header">
    <div className="menu">Menu</div>
    <Logo />
    <nav className="nav">
      <NavigationItems />
    </nav>
  </div>
);

export default CSSModules(toolBar, styles, {
  allowMultiple: true
});