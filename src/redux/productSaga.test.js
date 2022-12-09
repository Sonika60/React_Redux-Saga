import { takeLatest,assert } from "redux-saga/effects"

import { PRODUCT_LIST } from './constant';
import productSaga, {getProducts} from "./productSaga"

describe('watchProductSaga', () =>{
    test('should watch products',() =>{
        const gen = productSaga();

  assert.deepEqual(
    gen.next().value,
    takeLatest(PRODUCT_LIST),
    'it should wait for a user to choose a color'
  );
        // const sagaGenrator = productSaga().next().value
        // expect(sagaGenrator).toEqual(takeLatest(PRODUCT_LIST,getProducts))

    })
})