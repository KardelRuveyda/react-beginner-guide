import React from 'react';

function NumbersExample () {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>Çift Sayılar:</h1>
      <ul>
        {numbers.map((number, index) => {
          if (number % 2 === 0) {
            return <li key={index}>{number}</li>;
          } else {
            return null; // Tek sayıları görmezden gel
          }
        })}
      </ul>
    </div>
  );
}

export default NumbersExample;
