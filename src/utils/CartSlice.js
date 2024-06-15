import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'ORI GIMBER 700ml', price: 24.95 },
    { id: 2, name: 'GIMBER N°2 700 ml', price: 25.85 },
    { id: 3, name: 'SML GIMBER 500ml', price: 20.45 },
    { id: 4, name: 'SML GIMBER 600ml', price: 22.5 },
    { id: 5, name: 'SML GIMBER 600ml', price: 23.5 },
    { id: 6, name: 'SML LIMER 600ml', price: 29.5 },
    { id: 7, name: 'SML APPLE 600ml', price: 27.5 },
    { id: 8, name: 'SML MANGO 600ml', price: 30.5 },
    { id: 9, name: 'SML BERRY 600ml', price: 19.5 },
    { id: 10, name: 'SML PEACH 600ml', price: 16.5 },
    { id: 11, name: 'SML LEMON 600ml', price: 19.45 },
    { id: 12, name: 'SML ORANGE 600ml', price: 21.5 },
  ],
  cartItems:[],
  searchResults:[]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    searchItem: (state, action)=>{
      state.searchResults = state.items.filter(item => 
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      // state.items.filter(item => item.name.includes(action.payload))
    },
    sortItemsByPrice: (state)=>{
      state.searchResults = state.searchResults.length > 0
        ? state.searchResults.sort((a, b) => a.price - b.price)
        : state.items.sort((a, b) => a.price - b.price);
    }
  },
});

export const { addItem, searchItem, sortItemsByPrice } = cartSlice.actions;

export default cartSlice.reducer;
