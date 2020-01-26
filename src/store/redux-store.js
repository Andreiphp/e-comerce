import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducers from '../reducers/cart-reducers';

const reducers = combineReducers({
    cart: cartReducers,
});
const store = createStore(reducers, applyMiddleware(thunk));
export default store;