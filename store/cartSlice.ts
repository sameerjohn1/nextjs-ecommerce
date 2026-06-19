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
    reducers:{},
})

export default cartSlice.reducer