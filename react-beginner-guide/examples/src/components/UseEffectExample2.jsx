import React, { useState, useEffect } from 'react';

function UseEffectExample2() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Bu kısım sadece bileşen ilk kez render edildiğinde çalışır
    console.log('İlk kez render edildiğinde çalışır.');
  }, []); // Boş dizi, useEffect'in sadece bir kere çalışmasını sağlar

  return (
    <div>
        Use Effect Example
    </div>
  );
}

export default UseEffectExample2;