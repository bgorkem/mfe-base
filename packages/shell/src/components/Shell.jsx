import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from '../state';

import Home from './Home';
import ReactSystemLoader from './ReactSystemLoader';
import { Nav } from './Nav';
import SvelteSystemLoader from './SvelteSystemLoader';
import Preferences from './Preferences';

let counter = 0;

import { registerApplication, start } from 'single-spa';
registerApplication({
  name: 'app1',
  app: () => System.import('app1'),
  activeWhen: '/app1',
  customProps: {
    rootComponent: TestComponent,
    domElement: document.getElementById('root2'),
    appId: ++counter,
  },
});

registerApplication({
  name: 'app2',
  app: () => System.import('app2'),
  activeWhen: '/app2',
  customProps: { domElement: document.getElementById('root2'), appId: ++counter },
});

start();

const store = createStore();

function TestComponent() {
  return <div>Test here</div>;
}

export default () => {
  return (
    <div>
      <Provider store={store}>
        <h2>MicroFE Shell</h2>
        <Router>
          <Nav />
          <Preferences />
          <main>
            <div>Single SPA content will be here soon</div>
          </main>
        </Router>
      </Provider>
    </div>
  );
};

window.addEventListener('single-spa:before-app-change', (evt) => {
  console.log('single-spa is about to mount/unmount applications!', evt.detail);
});
