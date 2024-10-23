import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerMicroApps, setDefaultMountApp, start, initGlobalState } from 'qiankun';
import App from './App.tsx';
import './font-awesome.ts';
import './index.css';

const root = createRoot(document.getElementById('main-app')!);

const render = (props: { loading?: boolean }) => {
  return root.render(
    <StrictMode>
      <App {...props} />
    </StrictMode>,
  );
};
render({ loading: false });

const loader = (loading: boolean) => render({ loading });

registerMicroApps(
  [
    // {
    //   name: 'angular-app',
    //   entry: '//localhost:4200',
    //   container: '#sub-app',
    //   activeRule: '/angular-micro',
    //   loader,
    // },
    {
      name: 'react-app',
      entry: '//localhost:4201',
      container: '#sub-app',
      activeRule: '/react-micro',
      loader,
    },
    {
      name: 'vue-app',
      entry: '//localhost:4202',
      container: '#sub-app',
      activeRule: '/vue-micro',
      loader,
    },
  ],
  {
    beforeLoad: [
      async (app) => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      async (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      async (app) => {
        console.log(
          '[LifeCycle] after unmount %c%s',
          'color: green;',
          app.name,
        );
      },
    ],
  },
);

// setDefaultMountApp('/react-micro');

/**
 * @see https://qiankun.umijs.org/api#startopts
 */
start({
  sandbox: {
    // strictStyleIsolation: true,
  },
});
