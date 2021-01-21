# Micro FrontEnds Baseline Project

A Demo project exploring options of dynamic loading of micro-frontends on the shell

## Get started
` yarn install `

` yarn run start `

Open browser to

`http://localhost:3001/workspaces`

this will currently only run in dev mode on webpack-dev-server.

Production bundling could be added later on, by deploying prod builds into private CDN locations (AWS S3 buckets)


## Approach

Each app is implemented in a monorepo, along with shell as the host

Shell has import-map module reference to each app bundle

Each app is hosted on a sub path (/app1, /app2) using react-router-dom

Each app is lazy loaded when specific route to that app is called, apps depend on Shell libraries

Webpack-dev-server compiles each app as SystemJS libraries and starts webservers on different ports to host app bundles

| package      | dev hosting location |
| -------      | --------             |
| shell        | http://localhost:3001|
| react-app1   | http://localhost:3002|
| svelte-app2  | http://localhost:3003|



### Features

* Lerna / [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
* Webpack 5 Module Federation with Remote component loader - [feat/fed-modules-remote-component](https://github.com/bgorkem/mfe-base/tree/feat/fed-modules-remote-component)
* SystemJS-SingleSPA - [feat/systemjs-modules-singlespa](https://github.com/bgorkem/mfe-base/tree/feat/ystemjs-modules-singlespa)

### ESM Modules?

Is the present and the future. Most browsers natively support loading ESM modules nowadays. This below works in a browser console.

```
const React = await import('https://cdn.jsdelivr.net/npm/@esm-bundle/react/esm/react.production.min.js');

```

However, most libraries are not published in ESM modules format, lodash, react ...

Webpack takes care of CommonJS format to make it work with  import /export syntax in browsers.

Webpack 5 may provide bundling in ESM format [soon](https://webpack.js.org/configuration/experiments/#root)


### Why can I not use native ESM Modules?
On every module you'd have to pass the absolute path of Import CDN Url 😠

ESM native importmap feature could solve this at the top of the home page

```
<script type="importmap">

  imports: {
    vue: "https://unpkg.com ... /vue.esm.browser.min.js"
    react: "https:// ..."
    lodash:"..."
  }

</script>
```

Not all browsers support importmaps though. 😕

So comes SystemJS to the rescue

Watch this for justification of SystemJS
https://www.youtube.com/watch?v=AmdKF2UhFzw

### SystemJS - feat/systemjs-modules

The way to configure in webpack
```
  output: {
    filename: 'shell-bundle.js',
    libraryTarget: 'system',
  },
```



## Shared State

You can use

* redux
* react-redux
* [svelte-redux-connect](https://linguinecode.com/post/how-to-add-redux-to-svelte)

libraries to utilise a shared state management in the shell
