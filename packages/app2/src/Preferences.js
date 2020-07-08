import { connect } from 'svelte-redux-connect';

import Preferences from './Preferences.svelte';

const mapDispatchToProps = (dispatch) => ({
  changeCurrency: (currency) =>
    dispatch({
      type: 'SET_CURRENCY',
      payload: { currency },
    }),
});

// Get list of cats and pass to Svelte component
const mapStateToProps = (state) => ({
  currency: state.currency,
});

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
