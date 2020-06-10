/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App1 from 'app1';

const Nav = () => {
  return (
    <nav className="navbar">
      <p>Navigator</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/app1">App 1</Link>
        </li>
        <li>
          <Link to="/app2">App 2</Link>
        </li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return <div>Home</div>;
};

const App1 = () => <div>App1 will eb coming here</div>;
const App2 = () => <div>App2 here</div>;

const Shell = () => {
  return (
    <div>
      <h2>MicroFE Shell</h2>
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route path="/app1">
              <App1 />
            </Route>
            <Route path="/app2">
              <App2 />
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

export default {
  bootstrap: (): void => {
    ReactDOM.render(<Shell />, document.querySelector('#root'));
  },
};
