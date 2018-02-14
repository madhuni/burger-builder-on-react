import React from "react";

import logoImage from '../../assets/images/burger-logo.png';

const logo = (props) => (
  <div className="logo-container">
    <img src={logoImage} alt="MyBurger" className="logo-image" width="50" height="50" />
  </div>
);

export default logo;