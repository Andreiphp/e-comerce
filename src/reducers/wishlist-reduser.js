const initialState = { wishList: [], default: null };
const list = { id: null, title: null, products: {}, created: null, state: null };
const WishlistReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'set':
            alert('ne gotov');
            return;
        case 'add':
            const newList = Object.assign({}, list,
                {
                    title: action.title,
                    created: new Date().toDateString(),
                    products: {},
                    state: 'new'
                }
            );
            let defaultList;
            if (state.default) {
                defaultList = state.default;
            } else {
                defaultList = action.title;
            }
            const wishList = state.wishList.push(newList);
            return Object.assign({}, state, wishList, { default: defaultList });
        case 'update':
            const id = action.item.id;
            if (!state.wishList.length) {
                let products = {};
                products[id] = 1;
                const newList = Object.assign({}, list, {
                    title: 'First WishList',
                    products,
                    created: new Date().toDateString(),
                    state: 'new'
                });
                const wishList = state.wishList.push(newList);
                const defaultList = 'First WishList';
                return Object.assign({}, state, wishList, { default: defaultList });
            } else {
                const findList = state.wishList.filter(list => list.title === state.default);
                if (findList.length && findList.length === 1) {
                    const findProducts = findList[0].products[id];
                    if (findProducts) {
                        findList[0].products[id]++;
                    } else {
                        findList[0].products[id] = 1;
                    }
                    Object.assign(findList[0], {
                        products: findList[0].products,
                        state: findList[0].state !== 'new' ? 'update' : findList[0].state
                    });
                    return Object.assign({}, state);
                }
            }
        case 'default':
            const defaults = action.title;
            return Object.assign({}, state, { default: defaults });
        default:
            return state;
    }
}
export default WishlistReduser;

export const updateActionReducer = (product) => (dispatch) => {
    dispatch({ type: 'update', item: product });
};
export const addNewListReducer = (title) => (dispatch) => {
    dispatch({ type: 'add', title: title });
};
export const defaultActionReduser = (title) => (dispatch) => {
    dispatch({ type: 'default', title: title });
}