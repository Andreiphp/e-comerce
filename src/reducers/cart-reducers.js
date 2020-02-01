const initialState = new Map().set(1, { name: 'werty' });
const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            state.set(action.product.id, action.product);
            return new Map(state.entries());
        case 'DELETE':
            state.delete(action.productId);
            return new Map(state.entries());
        case 'UPDATE':
            return;
        default:
            return state;
    }
}

export default cartReducers;

export const deleteProductAction = (id) => (dispatch) => {
    dispatch({ type: 'DELETE', productId: id });
}