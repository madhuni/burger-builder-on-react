import React from 'react';
import Aux from '../../hoc/Aux';

const Layout = (props) => (
  <Aux>
    <div>Toolbar, Side Drawer, Backdrop</div>
    <main>
      { console.log(props. children) }
      { props.children }
    </main>
  </Aux>
);

export default Layout;