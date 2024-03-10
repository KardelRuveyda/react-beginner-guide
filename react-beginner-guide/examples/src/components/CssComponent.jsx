import React from 'react';

function CssComponent () {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1 style={{ color: 'blue', fontSize: '24px' }}>Merhaba, Dünya!</h1>
      <p style={{ backgroundColor: 'lightgray', padding: '10px' }}>Bu bir CSS örneğidir.</p>
    </div>
  );
}

export default CssComponent;
