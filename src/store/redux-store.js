import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducers from '../reducers/cart-reducers';
import SelectionReducer from '../reducers/selection-reducers';
import { SearchReducer } from '../reducers/search-reducers';

const reducers = combineReducers({
    cart: cartReducers,
    sort: SelectionReducer,
    search: SearchReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));
export default store;