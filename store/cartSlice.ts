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
        removeFromCart:(state,action)=>{
            const {productId,quantity=1}=action.payload;
            const existingItemIndex=state.items.findIndex((items)=>items.product.id===productId)

            if(existingItemIndex===-1) return ;

            const existingItem=state.items[existingItemIndex]

            if(existingItem.quantity>quantity){
                existingItem.quantity-=quantity
            }else{
                state.items.splice(existingItemIndex,1)
            }
        }  ,
        filterProduct:(state,action)=>{
            const searchTerm=action.payload;

            state.products=PRODUCTS.filter((item)=>item.name.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        )
        }
    },
})

export default cartSlice.reducer