import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async(data, thunkApi)=>{
        try{
            const response = axios.post('http://localhost:4800/api/website/cart/create-cart', data);
            return response.data
        }
        catch(error){
            console.log(error);
        }
    }
)

const initialState = {
    value: {},
    loading: false,
    error: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addToCart.fulfilled, (state, action)=>{
            console.log(action.payload);
            // state.value = action.payload;
        })
    }
});

// export const { setParentCategory } = parentCategorySlice.actions

export default cartSlice.reducer