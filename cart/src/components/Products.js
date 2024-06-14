import React from 'react';
import ProductItem from './Item';

const products = [
  { id: 1, name: 'ORI GIMBER 700ml', price: 24.95 },
  { id: 2, name: 'GIMBER N°2 700 ml', price: 25.85 },
  { id: 3, name: 'SML GIMBER 500ml', price: 20.45 },
  { id: 4, name: 'SML GIMBER 600ml', price: 22.5 },
  { id: 4, name: 'SML GIMBER 600ml', price: 22.5 },
  { id: 4, name: 'SML GIMBER 600ml', price: 22.5 },
  { id: 4, name: 'SML GIMBER 600ml', price: 22.5 },
  { id: 4, name: 'SML GIMBER 600ml', price: 22.5 },
  { id: 4, name: 'SML GIMBER 600ml', price: 22.5 },
  { id: 4, name: 'SML GIMBER 600ml', price: 22.5 },
  { id: 4, name: 'SML GIMBER 600ml', price: 22.5 },
  { id: 4, name: 'SML GIMBER 600ml', price: 22.5 },
];

const ProductList = () => {

  return (
    <div className="product-list flex flex-wrap gap-3 m-2 w-2/3 bg-gray-50 overflow-y-auto h-screen">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
