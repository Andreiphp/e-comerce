const initial = {
    products: [],
    count: 0,
}

export const SearchReducer = (state = initial, action) => {
    switch (action.type) {
        case 'search':
            return { products: action.products, count: action.count }
        default:
            return state;

    }

};

export const searchCreator = (products, count) => {
    return { type: 'search', products: products, count: count }
}