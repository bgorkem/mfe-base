/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App1 = React.lazy(() => System.import(/*webpackIgnore: true*/ 'app1'));

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
          <Switch>
            <Route path="/app1">
              <React.Suspense fallback="loading">
                <App1 />
              </React.Suspense>
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

ReactDOM.render(<Shell />, document.querySelector('#root'));

export const add = (a, b) => a + b;
