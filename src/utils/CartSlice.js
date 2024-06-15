import { createSlice } from '@reduxjs/toolkit';
import { items } from './Constants';

const initialState = {
  items: items,
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
