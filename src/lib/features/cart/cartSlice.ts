import { TCartItem } from "@/lib/types/cart";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [] as TCartItem[]
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.productId === action.payload.id);

            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
            } else {
                state.items.push({product : action.payload, productId : action.payload.id, quantity : 1});
            }
        },
        removeFromCart : (state, action) => {
                 state.items = state.items.filter(item => item.productId !== action.payload);
        }
    }
})

export const { addToCart , removeFromCart} = cartSlice.actions
export default cartSlice.reducer