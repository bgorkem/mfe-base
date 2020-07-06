import React from 'react';
import LoadingPlaceholder from './LoadingPlaceholder';
export default ({ app, delay = 1000 }) => {
  const Component = React.lazy(() => {
    return new Promise((res) => {
      setTimeout(() => {
        res(System.import(app));
      }, delay);
    });
  });

  return (
    <React.Suspense fallback={<LoadingPlaceholder />}>
      <Component />
    </React.Suspense>
  );
};
