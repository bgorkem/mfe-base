import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ReactSystemLoader from './ReactSystemLoader';
import { Nav } from './Nav';
import SvelteSystemLoader from './SvelteSystemLoader';

export default () => {
  return (
    <div>
      <h2>MicroFE Shell</h2>
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route path="/app1">
              <ReactSystemLoader app="app1" delay={100} />
            </Route>

            <Route path="/app2">
              <SvelteSystemLoader app="app2" />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};
