/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App1 = React.lazy(() => {
  console.log('lazy loading app1 ... wait for 5 sec');
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('lazy loaded app1 ... after 5 sec');
      res(System.import('app1'));
    }, 5000);
  });
});

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

const Fallback = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let timeoutId = setTimeout(() => setSeconds(seconds + 1), 1000);
    return () => clearTimeout(timeoutId);
  }, [seconds]);

  return (
    <React.Fragment>
      <div> Slow Loading for {seconds} </div>
    </React.Fragment>
  );
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
              <React.Suspense fallback={<Fallback />}>
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
