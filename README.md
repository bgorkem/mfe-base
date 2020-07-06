# Micro FrontEnds Baseline Project

A Demo project exploring options of dynamic loading of micro-frontends on the shell

## Get started
` yarn install `

` yarn run start `

Open browser to

`http://localhost:3001`

this will currently only run in dev mode on webpack-dev-server.

Production bundling could be added later on, by deploying prod builds into private CDN locations (AWS S3 buckets)


## Approach

Each app is implemented in a monorepo, along with shell as the host

Shell has import-map reference to each app bundle

Each app is hosted on a sub path (/app1, /app2) using react-router-dom

Each app is lazy loaded when specific route to that app is called, apps depend on Shell libraries

Webpack-dev-server compiles each app as SystemJS libraries and starts webservers on different ports to host app bundles

| package      | dev hosting location |
| -------      | --------             |
| shell        | http://localhost:3001|
| react-app1   | http://localhost:3002|
| svelte-app2  | http://localhost:3003|



### Uses

* SystemJS - feat/systemjs-modules
* Lerna / Yarn workspaces
* Webpack 5 Module Federation - feat/fed-modules feat/fed-modules-remote-component
* SingleSPA

### ESM Modules?
Is the present / future. Most browsers natively support nowadays. This works in a browser console.

```
const React = await import('https://cdn.jsdelivr.net/npm/@esm-bundle/react/esm/react.production.min.js');

```


Most libraries are not in ESM modules format, lodash, react ...
Webpack takes care of CommonJS format to make it work with  import /export syntax in browsers.
Webpack 5 may provide bundling in ESM format soon

https://webpack.js.org/configuration/experiments/#root

### Why can i not use native ESM Modules?

On every module you'd have to pass the absolute path of Import CDN Url,
ESM native import map could solve this at the top of the home page

```
<script type="importmap">

  imports: {
    vue: "https://unpkg.com ... /vue.esm.browser.min.js"
    react: "https:// ..."
    lodash:"..."
  }

</script>
```

Not all browsers support import maps though. Watch this for justification of SystemJS
https://www.youtube.com/watch?v=AmdKF2UhFzw

### SystemJS - feat/systemjs-modules

The way to configure in webpack
```
  output: {
    filename: 'shell-bundle.js',
    libraryTarget: 'system',
  },
```