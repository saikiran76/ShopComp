import React from 'react';
import ProductItem from './Item';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/CartSlice';
import Header from './Header';
import { Bar } from './Bar';

const ProductList = () => {
    const dispatch = useDispatch();
    const { items, searchResults } = useSelector((state) => state.cart);

    const productsToDisplay = searchResults.length > 0 ? searchResults : items;
    
    return (
        <div className="m-2 w-full lg:w-2/3 bg-gray-50">
            <Header/>
            <Bar/>
            <div className='product-list flex flex-wrap gap-3 overflow-y-auto h-screen'>
                {productsToDisplay.map((product) => (
                    <ProductItem key={product.id} product={product} addToCart={() => dispatch(addItem(product))} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
