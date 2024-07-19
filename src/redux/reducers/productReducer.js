import { ActionTypes } from "../constants/action-types"


const initialState={
    products:[]
}

export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
            case ActionTypes.FETCH_PRODUCTS:
                return {...state, products:payload};
        default:
            return state
    }
}

export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        default:
            return state
    }
}

// export const ShoppinReducer = (state = initialState, {type,action}) => {
//     switch (type) {
//       case ActionTypes.ADD_TO_CART:
//         return {
//           ...state,
//           products: state.products.map(product =>
//             product.id === action.id ? {...product, selected: true} : product,
//           ),
//         };
//     }
// }