import React from 'react';
import { connect } from 'react-redux';
import { sortAction } from './../../reducers/selection-reducers';
import { SelectionContext, position } from './../../context/selection-view';
import SelectionView from '../common/selection-view/selection-view';
import { useState } from 'react';
import BestProducts from './bests-products.component';
import { useEffect } from 'react';
export const BestContainer = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts( [ { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
        { id: '2', name: 'werty', img: 'product1.jpg', link: '' },
        { id: '3', name: 'werty', img: 'product1.jpg', link: '' },
        { id: '4', name: 'werty', img: 'product1.jpg', link: '' },
        { id: '5', name: 'werty', img: 'product1.jpg', link: '' },
        { id: '6', name: 'werty', img: 'product1.jpg', link: '' },
        { id: '7', name: 'werty', img: 'product1.jpg', link: '' },
        { id: '8', name: 'werty', img: 'product1.jpg', link: '' },
        { id: '9', name: 'werty', img: 'product1.jpg', link: '' },
        { id: '10', name: 'werty', img: 'product1.jpg', link: '' },])
    }, []);
   
    
    
    return <div>
        <SelectionView sort={props.sort} />
        <BestProducts sort={props.sort} products={products}/>
    </div>
}

const mapStateToprops = state => state.sort;

export default connect(mapStateToprops, null)(BestContainer);