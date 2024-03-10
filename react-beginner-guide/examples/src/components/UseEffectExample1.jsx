import React, { useState, useEffect } from 'react';

function UseEffectExample1() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log('Her zaman çalışır');
  });

  return (
    <div>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <button onClick={() => setFirstName('John')}>Change First Name</button>
      <button onClick={() => setLastName('Doe')}>Change Last Name</button>
    </div>
  );
}

export default UseEffectExample1;