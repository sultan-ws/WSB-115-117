import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchParentCategories = createAsyncThunk(
    "parentCategories/fetchParentCategories",
    async(_, thunkApi)=>{
        try{
           const response = await axios.get('http://localhost:4800/api/website/parent-category/active-category');
           return response.data.data;
        }
        catch(error){
            console.log(error);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    value: [],
    loading: false,
    error: null
};


export const parentCategorySlice = createSlice({
    name: "parentCategory",
    initialState,
    reducers: {
        setParentCategory : (state, action)=>{
            state.value = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchParentCategories.pending, (state, action)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchParentCategories.fulfilled, (state, action)=>{
            state.value = action.payload;
            state.loading = false;
        })
        .addCase(fetchParentCategories.rejected, (state, action)=>{
            state.error = action.payload;
            console.log('error => ', action.payload);
        })
    }
});

export const { setParentCategory } = parentCategorySlice.actions

export default parentCategorySlice.reducer