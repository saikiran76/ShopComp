import React from 'react';
import ProductItem from './Item';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/CartSlice';
import Header from './Header';

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
    const dispatch = useDispatch();
    
    return (
        <div className="m-2 w-2/3 bg-gray-50 h-screen">
            <Header/>
            <div className='product-list flex flex-wrap gap-3 overflow-y-auto'>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} addToCart={() => dispatch(addItem(product))} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
