import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import CSSModules from 'react-css-modules';
import styles from './NavigationItems.scss'

const navigationItems = (props) => (
  <ul className="nav-list">
    <NavigationItem link="/" active={true}>Burger builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default CSSModules(navigationItems, styles, {
  allowMultiple: true
});