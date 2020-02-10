import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../../axios-orders';

export function* purchaseBurgerSaga(action) {
    try {
        yield put(actions.purchaseBurgerStart());
        const response = yield axios.post('/orders.json?auth=' + action.token, action.orderData);
        yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));  
    } catch (error) {
        yield put(actions.purchaseBurgerFail(error)); 
    }    
}    

export function* fetchOrdersSaga(action) {
    try {
        yield put(actions.fetchOrderStart());
        const queryParams = yield '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
        const fetchedOrders = yield [];
        const res = yield axios.get('/orders.json' + queryParams)
            
        for (let key in res.data) {
            fetchedOrders.push({
                ...res.data[key],
                id: key
            });
        }

        yield put(actions.fetchOrderSuccess(fetchedOrders));
        
    } catch (error) {
        yield put(actions.fetchOrderFail(error));
    }
}
