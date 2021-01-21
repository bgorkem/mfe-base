import React from 'react';
import { Link } from 'react-router-dom';
export default () => {
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
