import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { Product } from "@/lib/types/product";


const initialState = {
    list: [] as Product[],
    searchText : "",
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.list = action.payload
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            apiSlice.endpoints.getProducts.matchFulfilled,
            (state, action) => {
                state.list = action.payload;
            }
        )
    }
})

export const { setProducts , setSearchText} = productSlice.actions

export default productSlice.reducer;