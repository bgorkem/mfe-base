import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrencyAction } from '../state';

export default () => {
  const currencyInput = useRef();
  const currency = useSelector((state) => state.currency);
  const dispatch = useDispatch();
  const change = () => dispatch(changeCurrencyAction(currencyInput.current.value));
  return (
    <div>
      <h3>Preferences (Redux Store)</h3>
      <div>Preferred Currency :{currency}</div>
      <input ref={currencyInput} type="text"></input>
      <button onClick={change}>Change</button>
    </div>
  );
};
