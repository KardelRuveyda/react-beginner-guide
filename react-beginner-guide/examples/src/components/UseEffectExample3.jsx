import React, { useState } from 'react';

function UseEffectExample3(){
  // names adında bir dizi tanımlıyoruz
  const [names, setNames] = useState(["kardel", "ruveyda", "cetin"]);

  return (
    <div>
      <h2>İsimler</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectExample3;