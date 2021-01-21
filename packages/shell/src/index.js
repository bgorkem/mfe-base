import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './components/Shell.jsx';

import './amd.js';

ReactDOM.render(<Shell />, document.querySelector('#root'));

console.log('Shell is now rendering... ');
