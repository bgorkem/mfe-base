import React from 'react';
import { Provider } from 'react-redux';

import { lib } from 'shell';
import Preferences from './Preferences';
const store = lib.state.store;

console.log(Provider);

const onClick = () => {};
export default () => (
  <Provider store={store}>
    <div style={{ border: 'solid 1px gray', margin: '5px', padding: '5px' }}>
      <h3>React App</h3>
      <Preferences />
      <button onClick={onClick}>React action</button>
    </div>
  </Provider>
);
