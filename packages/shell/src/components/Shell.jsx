import React from 'react';

import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'app1',
  app: () => System.import('app1'),
  activeWhen: '/app1',
  customProps: {
    domElement: document.getElementById('root2'),
    appId: 1,
  },
});

registerApplication({
  name: 'app2',
  app: () => System.import('app2'),
  activeWhen: '/app2',
  customProps: { domElement: document.getElementById('root2'), appId: 2 },
});

registerApplication({
  name: 'workspaces',
  app: () => System.import('workspaces'),
  activeWhen: '/workspaces',
  customProps: { domElement: document.getElementById('root2'), appId: 0 },
});

start();

export default () => {
  return <div></div>;
};
