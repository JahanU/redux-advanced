import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalPrice: 0,
        totalQuantity: 0,
        isLoading: false,
        error: null,
    },
    reducers: {
        addToCart: (state, action) => {
            const { product } = action.payload;
            const existingProductIndex = state.cart.findIndex(
                (cartProduct) => cartProduct.id === product.id
            );
            if (existingProductIndex >= 0)
                state.cart[existingProductIndex].quantity += 1;

            else
                state.cart.push({ ...product, quantity: 1 });
            state.totalPrice += product.price;
        },

        removeFromCart: (state, action) => {
            const { product } = action.payload;
            const existingProductIndex = state.cart.findIndex(
                (cartProduct) => cartProduct.id === product.id
            );
            if (existingProductIndex >= 0) {
                const removedProduct = state.cart[existingProductIndex];
                if (removedProduct.quantity === 1)
                    state.cart.splice(existingProductIndex, 1);
                else
                    state.cart[existingProductIndex].quantity -= 1;

                state.totalPrice -= product.price;
            }
        },
        setCart: (state, action) => {
            state.cart = action.payload;
            state.totalPrice = 0;
        },
        setTotal: (state, action) => {
            state.totalPrice = action.payload;
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
export default cartSlice;