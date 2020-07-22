import React, { useEffect, useState } from 'react';

export class SvelteComponent extends React.Component {
  constructor() {
    super();

    this.container = React.createRef();
    this.instance = null;
    this.div = React.createElement('div', { ref: this.container });
  }

  componentDidMount() {
    const { component, ...data } = this.props;

    if (!component) {
      console.warn('Component not set');
      return;
    }
    const Constructor = component.default;

    this.instance = new Constructor({
      target: this.container.current,
      data,
    });
  }

  componentDidUpdate() {
    this.instance.$set(this.props);
  }

  componentWillUnmount() {
    console.log('unmounting svelte component.', this.instance);
    this.instance.$destroy();
  }

  render() {
    return <div ref={this.container}></div>;
  }
}

export default ({ app }) => {
  const [loaded, setLoaded] = useState(false);
  const [svelteInstance, setSvelteInstance] = useState({});
  useEffect(() => {
    (async () => {
      const res = await System.import(app);
      setSvelteInstance(res);
      setLoaded(true);
    })();
  }, []);

  return loaded ? <SvelteComponent component={svelteInstance}></SvelteComponent> : <div>Loading svelte...</div>;
};
