import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const currency = useSelector((state) => state.currency);
  return (
    <div>
      <h3>Preferences (Redux Store)</h3>
      <div>Preferred Currency :{currency}</div>
    </div>
  );
};
