import React from 'react';

const useDynamicScript = (url) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  console.log('dynamic loading', ready);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    const element = document.createElement('script');
    element.src = url;
    element.type = 'text/javascript';
    element.async = true;

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${url}`);
      setReady(false);
      setFailed(false);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    ready,
    failed,
  };
};

const RemoteReactComponent = ({ url, scope, module, ...props }) => {
  console.log('loading comp');

  const { ready, failed } = useDynamicScript(url);
  console.log('ready', ready);

  if (ready) {
    const o = global.__webpack_require__ ? global.__webpack_require__.o : {};
    if (window.scope) {
      window[scope].override(
        Object.assign(
          {
            react: () => Promise.resolve().then(() => () => require('react')),
            'react-dom': () => Promise.resolve().then(() => () => require('react-dom')),
          },
          o
        )
      );
    }
  }

  if (!ready) {
    return <h2>Loading dynamic script: {url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {url}</h2>;
  }

  const Component = React.lazy(
    async () =>
      await window[scope].get(module).then((factory) => {
        const Module = factory();
        return Module;
      })
  );

  return (
    <React.Suspense fallback="Loading System">
      <Component {...props} />
    </React.Suspense>
  );
};

export default RemoteReactComponent;
