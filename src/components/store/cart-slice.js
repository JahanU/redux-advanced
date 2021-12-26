import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        total: 0,
        isLoading: false,
        error: null,
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            state.total += action.payload.price;
        },
        removeFromCart: (state, action) => {
            state.cart.splice(action.payload, 1);
            state.total -= action.payload.price;
        },
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        setTotal: (state, action) => {
            state.total = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;