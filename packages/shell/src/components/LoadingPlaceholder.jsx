import React, { useState, useEffect } from 'react';

export default function LoadingPlaceholder() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let timeoutId = setTimeout(() => setSeconds(seconds + 1), 1000);
    return () => clearTimeout(timeoutId);
  }, [seconds]);

  return (
    <React.Fragment>
      <div> Plase wait, Loading for {seconds} </div>
    </React.Fragment>
  );
}
