import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './components/Shell.jsx';

import * as state from './state';
import user from './lib/user';
export const lib = { user, state };

ReactDOM.render(<Shell />, document.querySelector('#root'));

console.log('hello ');
