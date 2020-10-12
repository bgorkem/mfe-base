import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppLauncher from './AppLauncher';
import Nav from './Nav';

export default () => {
  return (
    <div>
      <h2>MicroFE Workspaces</h2>
      <Router>
        <Nav />
        <AppLauncher />
      </Router>
    </div>
  );
};
