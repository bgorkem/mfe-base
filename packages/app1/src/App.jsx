import React from 'react';

const onClick = () => {
  console.log('react specific event.');
};

export default ({ appId }) => (
  <div style={{ border: 'solid 1px gray', margin: '5px', padding: '5px' }}>
    <h3>React App id: {appId}</h3>
    <button onClick={onClick}>React action</button>
  </div>
);
