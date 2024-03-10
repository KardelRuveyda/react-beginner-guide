import React, { useState } from 'react';

function UseEffectExample1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* Butona tıklandığında setCount fonksiyonunu çağırarak count state'ini güncelliyoruz */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default UseEffectExample1;