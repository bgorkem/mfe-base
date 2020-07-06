import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from '../state';

import Home from './Home';
import ReactSystemLoader from './ReactSystemLoader';
import { Nav } from './Nav';
import SvelteSystemLoader from './SvelteSystemLoader';
import Preferences from './Preferences';

const store = createStore();

export default () => {
  return (
    <div>
      <Provider store={store}>
        <h2>MicroFE Shell</h2>
        <Router>
          <Nav />
          <Preferences />
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
      </Provider>
    </div>
  );
};
