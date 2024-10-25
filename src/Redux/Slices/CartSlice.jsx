import {createSlice} from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name : "cart",
    initialState:{
        cart:[],
    },
    reducers:{
     addToCart : (state,action) => {
     const existingItem = state.cart.find((item)=>item.id === action.payload.id);
     if(existingItem){
     state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item,qty:item.qty+1}:item)
     }else state.cart.push(action.payload)
     
     },
     removeFromCart : (state,action) =>{
        state.cart = state.cart.filter((cartItem)=>(cartItem.id !== action.payload.id))
     },
    incItem :(state,action) =>{
        state.cart = state.cart.map((item)=>item.id===action.payload.id ? {...item,qty:item.qty+1} : item)
    },
    decItem :(state,action) => {
        state.cart = state.cart.map((item)=>item.id===action.payload.id ?  {...item,qty:item.qty-1} : item)
     },
    },
})

export const{addToCart,removeFromCart,incItem,decItem} = CartSlice.actions;
export default CartSlice.reducer;