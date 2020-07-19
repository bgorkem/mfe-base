import singleSpaSvelte from 'single-spa-svelte';
import AppComponent from './App.svelte';

const svelteLifecycles = singleSpaSvelte({
  component: AppComponent,
  props: { someData: 'data' },
});

export const bootstrap = (props) => {
  console.log('bootstrapping', props);
  return svelteLifecycles.bootstrap(props);
};
export const mount = (props) => {
  console.log('mounting', props);
  return svelteLifecycles.mount(props);
};
export const unmount = svelteLifecycles.unmount;
