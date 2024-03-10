import React from 'react';

function PropsProductComponent(props) {
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {props.products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price} $
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default PropsProductComponent;
