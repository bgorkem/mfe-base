import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './App.jsx';

import lib from 'amd-lib';

console.log(lib.default.bar(12));

// Note that SingleSpaContext is a react@16.3 (if available) context that provides the singleSpa props
import singleSpaReact, { SingleSpaContext } from 'single-spa-react';
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: AppComponent,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  },
});
export const bootstrap = (props) => {
  console.log('bootstrapping', props);
  return reactLifecycles.bootstrap(props);
};
export const mount = (props) => {
  console.log('mounting', props);
  return reactLifecycles.mount(props);
};

export const unmount = (props) => {
  console.log('unmounting', props);
  return reactLifecycles.unmount(props);
};
