import React from 'react';
export const position = {
    list: 'list',
    block: 'block',
}
export const selectiontype = {
    position: position.list,
}

export const SelectionContext = React.createContext(selectiontype);