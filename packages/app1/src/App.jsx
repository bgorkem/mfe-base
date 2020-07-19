import React from 'react';
import { Provider } from 'react-redux';

import { lib } from 'shell';
import Preferences from './Preferences';
const store = lib.state.store;

const onClick = () => {
  console.log('react specific event.');
};

export default ({ appId }) => (
  <Provider store={store}>
    <div style={{ border: 'solid 1px gray', margin: '5px', padding: '5px' }}>
      <h3>React App id: {appId}</h3>
      <Preferences />
      <button onClick={onClick}>React action</button>
    </div>
  </Provider>
);
