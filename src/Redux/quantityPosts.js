import { createSlice } from '@reduxjs/toolkit';

const quantityPosts = createSlice({
    name: 'quantity',
    initialState: {
        quantityPosts: 7
    },
    reducers: {
        changeQuantity(state) {
            state.quantityPosts = state.quantityPosts + 7
        },
    },
});

export const { changeQuantity } = quantityPosts.actions;
export default quantityPosts.reducer;