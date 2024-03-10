import React, { useState } from 'react';

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Fonksiyonel Bileşen</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Artır</button>
    </div>
  );
};

export default FunctionalComponent;