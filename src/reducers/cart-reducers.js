const initialState = new Map();
const cartReducers = (state = initialState, action) => {
    switch (action) {
        case 'ADD':
            state.set(action.product.id, action.product);
            return new Map(state.entries());
        case 'DELETE':
            state.delete(action.product.id);
            return new Map(state.entries());
        case 'UPDATE':
            return;
        default:
            return state;
    }
}

export default cartReducers;