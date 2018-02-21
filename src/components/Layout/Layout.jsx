import React from 'react';
import Aux from '../../hoc/Aux';
import ToolBar from '../Navigation/ToolBar/ToolBar';

const Layout = (props) => (
  <Aux>
    <ToolBar />
    <main>
      { props.children }
    </main>
  </Aux>
);

export default Layout;