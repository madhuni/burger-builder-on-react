import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolBar = (props) => (
  <header className="header">
    <div className="menu">Menu</div>
    <Logo />
    <nav className="nav">
      <NavigationItems />
    </nav>
  </header>
);

export default toolBar;