import React from 'react';

import { lib } from 'shell';

const onClick = () => {};
export default () => (
  <div style={{ border: 'solid 1px gray', margin: '5px', padding: '5px' }}>
    <h3>React App</h3>
    <p>User information coming from Shell</p>
    <p>User: {lib.user.username}</p>
    <button onClick={onClick}>React action</button>
  </div>
);
