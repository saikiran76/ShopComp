import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from './Button';
import { ProfileBar } from './ProfileBar';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);

  const subtotal = cart.reduce((acc, product) => acc + product.price, 0);
  const discount = subtotal * 0.10;
  const gratuity = 4.00;
  const total = subtotal - discount + gratuity;

  return (
    <div className="cart w-full lg:w-1/3 border-l p-4 h-[140%]">
      <ProfileBar/>
      {cart.map((item, index) => (
        <div key={index} className="mb-2 mt-2">
          <p className='flex justify-between font-semibold'>{item.name}  <span>${item.price.toFixed(2)}</span></p>
        </div>
      ))}
      <hr className="my-10" />
      <p className='flex justify-between items-center font-semibold'>Subtotal <span>${subtotal.toFixed(2)}</span></p>
      <p className='flex justify-between items-center text-gray-300 mt-1'>Discount (10%) <span>${discount.toFixed(2)}</span></p>
      <p className='flex justify-between items-center text-gray-300 mt-1'>Gratuity: <span>${gratuity.toFixed(2)}</span></p>
      <h3 className="text-xl font-bold mt-2 flex justify-between items-center">Total <span>${total.toFixed(2)}</span></h3>
      <div className='mt-[10em]'>
        <Button name="Add Voucher code" col='text-zinc-400' width="w-full" border="border-dashed border-2 border-zinc-300" bg='bg-white' mar="mb-1"/>
        <Button name="Print Receipt" width="w-full"/>
      </div>
    </div>
  );
};

export default Cart;
