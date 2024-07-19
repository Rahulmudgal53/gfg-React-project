

import { combineReducers } from 'redux'
import { productReducer, selectedProductReducer, ShoppinReducer} from './reducers/productReducer'



const rootReducer=combineReducers({
    allProducts:productReducer,
    product: selectedProductReducer,
    // cartProducts: ShoppinReducer,
})

export default rootReducer