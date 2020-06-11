# MicroFront End Baseline Project

A Demo project exploring options of dynamic loading of micro-frontends on the shell

## Get started
` yarn install `

` yarn run start `

this will currently only run in dev mode on webpack-dev-server.

Production bundling will be added later on.


## Approach

Each app is implemented in a monorepo, along with shell as the host

Shell has import-map reference to each app bundle

Each app is hosted on a sub path (/app1, /app2) using react-router-dom

Each app is lazy loaded when specific route to that app is called

Webpack compiles each app as SystemJS libraries and publishes bundle to the public content folder of shell


### Uses

* SystemJS
* Webpack 5
* Lerna
* SingleSPA (will be trialled later)


