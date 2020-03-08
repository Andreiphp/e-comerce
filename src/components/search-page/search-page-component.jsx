import React from 'react';
import './search-page.scss';
import ViewProductsContainer from '../common/view-products/view-products.container';
import { useSelector } from 'react-redux';
import { SelectionContext } from '../../context/selection-view';
import { useContext } from 'react';

const SearchPageComponent = (props) => {
    console.log('search page');
    
    const position = useContext(SelectionContext);
    const searchProducts = useSelector(state => state.search);
    return <div className="e-container">
        <ViewProductsContainer position={position.stateContext} products={searchProducts.products}/>
    </div>
}
export default SearchPageComponent;