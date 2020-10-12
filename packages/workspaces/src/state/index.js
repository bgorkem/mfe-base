import { createStore } from 'redux';

function reducer(state = { currency: 'GBP' }, action) {
  switch (action.type) {
    case 'SET_CURRENCY':
      return { currency: action.payload.currency };
    default:
      return state;
  }
}

export const changeCurrencyAction = (currency) => ({ type: 'SET_CURRENCY', payload: { currency } });

export let store = null;

export default () => {
  store = createStore(reducer);
  return store;
};
