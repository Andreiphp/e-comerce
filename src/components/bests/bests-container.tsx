import React from 'react';
import { connect } from 'react-redux';
import SelectionView from '../common/selection-view/selection-view';
import { useState } from 'react';
import BestProducts from './bests-products.component';
import { useEffect } from 'react';
import Axios from 'axios';
import { Product, ResponseProducts, Store } from '../../interfaces/interfase';
export const BestContainer = (props: any) => {
    console.log('beast page');
    const init: Product[] = [];
    const [products, setProducts] = useState(init);
    useEffect(() => {
        const query = `offset=${1}&count=${10}&category=${1}&sort=price&toSort=${true}`;
        Axios.get<any>(`http://localhost:8080/router/getAllProducts?${query}`).then((response: any) => {
            const data: ResponseProducts = response.data;
            setProducts(data.res);
        })
    }, []);
   
    
    
    return <div>
        <SelectionView products={products}/>
        <BestProducts sort={props.sort} products={products}/>
    </div>
}

const mapStateToprops = (state: Store) => state.sort;

export default connect(mapStateToprops, null)(BestContainer);