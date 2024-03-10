import React, { useState, useEffect } from 'react';

function UseEffectExample3() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  useEffect(() => {
    // Bu kısım sadece bileşen ilk kez render edildiğinde ve name değeri değiştiğinde çalışır
    console.log('Bu kısım sadece bileşen ilk kez render edildiğinde ve name değeri değiştiğinde çalışır');
  }, [name]); // name değiştiğinde useEffect yeniden çalışır

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder="Surname"
      />
    </div>
  );
}

export default UseEffectExample3;