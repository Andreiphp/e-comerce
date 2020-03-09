import React from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useContext, useState } from 'react';
import { SelectionContext } from '../../context/selection-view';
import { VIEW_PRODUCTS } from '../common/pagination/pagination.config';
import ViewProductsContainer from '../common/view-products/view-products.container';
import SelectionView from '../common/selection-view/selection-view';
import PaginationComponent from '../common/pagination/pagination-component';
import { Subject } from 'rxjs';

const CategoriesList = (props) => {
    const changePage = new Subject();
    const [categoriesProducts, setCatProducts] = useState({ products: [], count: 0, currentPage: 1 });
    const position = useContext(SelectionContext);
    const currentSort = useSelector(state => state.sort);
    const idCategory = props.match.params.id;
    changePage.subscribe((page) => {
        const query = `offset=${page}&count=${VIEW_PRODUCTS}&category=${idCategory}&sort=price&toSort=${currentSort.sort === 'max' ? true : false}`;
        loadProducts(query, page);
    });
    useEffect(() => {
        setCatProducts(Object.assign({}, categoriesProducts, { currentPage: 1 }))
    }, [idCategory]);

    useEffect(() => {
        const query = `offset=${categoriesProducts.currentPage}&count=${VIEW_PRODUCTS}&category=${idCategory}&sort=price&toSort=${currentSort.sort === 'max' ? true : false}`;
        loadProducts(query, categoriesProducts.currentPage);
    }, [idCategory, currentSort]);


    function loadProducts(query, page) {
        Axios.get(`http://localhost:8080/router/getAllProducts?${query}`).then((catProducts) => {
            const loadProducts = catProducts.data ? catProducts.data.res : [];
            const count = catProducts.data ? catProducts.data.count.count : 0;
            setCatProducts({ products: loadProducts, count: count, currentPage: page });
        }).catch(e => {
            console.log(e);
        });
    }

    return <div className="e-container">
        <SelectionView products={categoriesProducts.products} />
        <ViewProductsContainer position={position.stateContext} products={categoriesProducts.products} />
        <PaginationComponent current={categoriesProducts.currentPage} changePagination={changePage} countAllProducts={categoriesProducts.count} />
    </div>
}
export default CategoriesList;