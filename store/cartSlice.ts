import {createSlice} from "@reduxjs/toolkit";
import { PRODUCTS } from "@/utils/products";
import { IProduct } from "@/types/product";

interface ICartItem{
    product:IProduct;
    quantity:number
}

interface ICarState {
    items:ICartItem[];
    products:IProduct[]
}

const initialState:ICarState={
    items:[],
    products:PRODUCTS
}

const cartSlice=createSlice({
    initialState,
    name:"cart",
    reducers:{
        addToCart:(state,action)=>{
            const {product,quantity=1}=action.payload;
            const existingStateIndex=state.items.findIndex((items)=>items.product.id===product.id)

            if(existingStateIndex>=0){
                state.items[existingStateIndex].quantity+=quantity
            }else{
            state.items.push({product,quantity})
            }
        },   
    },
})

export default cartSlice.reducer