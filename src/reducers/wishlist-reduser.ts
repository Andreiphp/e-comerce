import { WishListItems, WishList, Product } from "../interfaces/interfase";
import { MaxId } from "../helpers/other-functions";

const initialState: WishList = { wishList: [], default: null };
const list: WishListItems = { id: 0, title: '', products: [], created: new Date().toDateString(), state: '' };
const WishlistReduser = (state = initialState, action: any) => {
    switch (action.type) {
        case 'set':
            alert('ne gotov');
            return;
        case 'add':
            const newList: WishListItems = {
                id: MaxId(state),
                title: action.title,
                created: new Date().toDateString(),
                products: [],
                state: 'new'
            };

            let defaultList;
            if (state.default) {
                defaultList = state.default;
            } else {
                defaultList = action.title;
            }
            const wishList = state.wishList.push(newList);
            return Object.assign({}, state, wishList, { default: defaultList });
        case 'update':
            const id: number = action.item.id;
            if (!state.wishList.length) {
                const newList: WishListItems = Object.assign({}, {
                    id: MaxId(state),
                    title: 'Новый список',
                    products: [id],
                    created: new Date().toDateString(),
                    state: 'new'
                });
                state.wishList.push(newList);
                const wishList =  state.wishList;
                const defaultList = 'Новый список';
                return Object.assign({}, state, wishList, { default: defaultList });
            } else {
                const findList: any = state.wishList.filter((list: WishListItems) => list.title === state.default);
                if (findList.length && findList.length === 1) {
                    const findProducts = findList[0].products.some((n: number) => n === id);
                    if (!findProducts) {
                        findList[0].products.push(id);
                        Object.assign(findList[0], {
                            state: findList[0].state !== 'new' ? 'update' : findList[0].state
                        });
                        return Object.assign({}, state);
                    } else {
                        return state;
                    }

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

export const updateActionReducer = (product: Product) => (dispatch: any) => {
    dispatch({ type: 'update', item: product });
};
export const addNewListReducer = (title: string) => (dispatch: any) => {
    dispatch({ type: 'add', title: title });
};
export const defaultActionReduser = (title: string) => (dispatch: any) => {
    dispatch({ type: 'default', title: title });
}