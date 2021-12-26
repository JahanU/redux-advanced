import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        cartIsVisible: false,
    },
    reducers: {
        toggleCart: (state) => {
            state.cartIsVisible = !state.cartIsVisible;
        }

    },
});

export const uictions = uiSlice.actions;
export default uiSlice.reducer;