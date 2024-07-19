import apiCall from "../../apis/apiCall"
import { ActionTypes } from "../constants/action-types"
import axios from "axios"

export const setProducts=(products)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const fetchProducts=()=>async(dispatch)=>{
    const response=await apiCall.get("/products")
    dispatch({type:ActionTypes.FETCH_PRODUCTS, payload:response.data})
}

export const fetchProduct=(pid)=>async(dispatch)=>{
    const response=await apiCall.get(`/products/${pid}`)
    dispatch({type:ActionTypes.SELECTED_PRODUCT, payload:response.data})
}

export const selectedProduct=(products)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products
    }
}

// export const addToCart = id => {
//     return {
//       type: ActionTypes.ADD_TO_CART,
//       id
//     };
//   };