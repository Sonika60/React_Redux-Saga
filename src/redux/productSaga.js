import { takeEvery, put, select } from 'redux-saga/effects'
import { push } from 'connected-react-router';

import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST, ONE_WIM_SUBMIT_DATA } from './constant';
import { onewimFruit } from '../redux/selectors'


export const takeStatusOnStatus = function* (status){
    console.log("in takestatus")

    debugger;
    // eslint-disable-next-line default-case
    switch (status){
        case '201':
            yield put(push('/cart'));
            break;
        case '202':
            yield put(push('/'));
            break;
            default:
            yield put(push('/cart'));
    }
}

function* getProducts() {
    let data = yield fetch('http://localhost:3333/products');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({ type: SET_PRODUCT_LIST, data })
}

function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3333/products?q=${data.query}`);
    result = yield result.json();
    console.warn("action is called", result)
    yield put({ type: SET_PRODUCT_LIST, data: result })
}

function* submitData() {
    const selectedfruit = yield select(onewimFruit)
    const { payload } = selectedfruit
    const response = yield fetch('http://localhost:3333/fruits', {
        method: 'POST',
        body:  payload        
    })
    const status = response?.status
     yield takeStatusOnStatus(status)
}

export default function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
    yield takeEvery(ONE_WIM_SUBMIT_DATA, submitData)

}