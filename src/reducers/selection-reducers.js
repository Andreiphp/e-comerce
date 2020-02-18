const initState = {
    // selection: 'block',
    sort: 'min',
};

const SelectionReducer = (state = initState, action) => {
    switch (action.type) {
        case 'change':
            return Object.assign( {}, state, { sort: action.sortVal });
        default:
            return state;    
    }
}

export default SelectionReducer;

export const sortAction = (value)  => {
   return { type: 'change', sortVal: value };
};