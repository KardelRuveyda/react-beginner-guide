import React from 'react';

// Bir functional component oluşturalım
function JsxExample(){
    let test = 1;
    // JSX kullanarak bir görünüm döndürelim
    return (
        <div>
            <h2>JSX Kullanımı!</h2>
            <p>Bu bir JSX kullanımı örneğidir. {test}</p>
        </div>
    );
};

// MyComponent'i dışa aktar
export default JsxExample;
