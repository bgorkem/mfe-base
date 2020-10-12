import React, { useRef } from 'react';
import launchFrame from '../lib/frameLauncher';

const apps = [
  { appName: 'app1', appUrl: '/app1' },
  { appName: 'app2', appUrl: '/app2' },
];

export default function AppLauncher() {
  const node = useRef(null);
  return (
    <>
      <div>
        {apps.map((a) => {
          return (
            <button key={a.appName} onClick={() => launchFrame(a.appUrl, node.current)}>
              {a.appName}
            </button>
          );
        })}
      </div>

      <div className="workspaces-root" ref={node}></div>
    </>
  );
}
