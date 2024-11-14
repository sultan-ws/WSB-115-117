
import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProductsByParentCategory = createAsyncThunk(
    "productsByParentCategory/fetchProductsByParentCategory",
    async(categoryname, thunkApi)=>{
        try{
           const response = await axios.get(`http://localhost:4800/api/website/products/product-by-parent-category/${categoryname}`);
           return response.data;
        }
        catch(error){
            console.log(error);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    value: {},
    loading: false,
    error: null
};


export const productByParentCategorySlice = createSlice({
    name: "productsByParentCategory",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProductsByParentCategory.pending, (state, action)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProductsByParentCategory.fulfilled, (state, action)=>{
            state.value = action.payload;
            state.loading = false;
        })
        .addCase(fetchProductsByParentCategory.rejected, (state, action)=>{
            state.error = action.payload;
            console.log('error => ', action.payload);
        })
    }
});

// export const { setParentCategory } = productByParentCategorySlice.actions

export default productByParentCategorySlice.reducer;