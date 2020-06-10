/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App1 = React.lazy(() => import('app1/Main'));
const App2 = React.lazy(() => import('app2/Main'));

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
          <Switch>
            <Route path="/app1">
              <div>
                <React.Suspense fallback="Loading ...">
                  <App1 />
                </React.Suspense>
              </div>
            </Route>
            <Route path="/app2">
              <div>
                <React.Suspense fallback="Loading ...">
                  <App2 />
                </React.Suspense>
              </div>
            </Route>
            <Route path="/"></Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

ReactDOM.render(<Shell />, document.querySelector('#root'));
