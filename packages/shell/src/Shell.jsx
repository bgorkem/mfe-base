/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RemoteReactComponent from './RemoteReactComponent';

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

const Shell = () => {
  return (
    <div>
      <h2>MicroFE Shell</h2>

      <Router>
        <Nav />
        <main>
          <Route
            path="/app1"
            render={() => (
              <RemoteReactComponent url={`http://localhost:3002/app1-bundle.js`} module="Main" scope="app1scope" />
            )}
          ></Route>
          <Route
            path="/app2"
            render={() => (
              <RemoteReactComponent url={`http://localhost:3003/app2-bundle.js`} module="Main" scope="app2scope" />
            )}
          ></Route>
          <Route path="/"></Route>
        </main>
      </Router>
    </div>
  );
};

ReactDOM.render(<Shell />, document.querySelector('#root'));
