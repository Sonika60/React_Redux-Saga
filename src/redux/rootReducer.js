import {combineReducers} from 'redux'
import { cartData } from './reducer'
import {productData} from './productReducer'
import {onewim} from './onewimReducer'
export default combineReducers({
    cartData,
    productData,
    onewim
})