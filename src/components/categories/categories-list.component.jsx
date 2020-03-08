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
    const [curentPage, setCurPage] = useState({ page: 1 });
    const [categoriesDate, setCatProducts] = useState({ products: [], count: 0 });
    const position = useContext(SelectionContext);
    const currentSort = useSelector(state => state.sort);
    const idCategory = props.match.params.id;
    useEffect(() => {
        changePage.subscribe((page) => {
            setCurPage({ page });
            const query = `offset=${page}&count=${VIEW_PRODUCTS}&category=${idCategory}&sort=price&toSort=${currentSort.sort === 'max' ? true : false}`;
            loadProducts(query);
        });
        return () =>  changePage.unsubscribe();
    }, []);

    useEffect(() => {
        setCurPage({ page: 1 });
        const query = `offset=1&count=${VIEW_PRODUCTS}&category=${idCategory}&sort=price&toSort=${currentSort.sort === 'max' ? true : false}`;
        loadProducts(query);
    }, [idCategory]);

    useEffect(() => {
        const query = `offset=${curentPage.page}&count=${VIEW_PRODUCTS}&category=${idCategory}&sort=price&toSort=${currentSort.sort === 'max' ? true : false}`;
        loadProducts(query);
    }, [currentSort]);

    function loadProducts(query) {
        Axios.get(`http://localhost:8080/router/getAllProducts?${query}`).then((catProducts) => {
            const loadProducts = catProducts.data ? catProducts.data.res : [];
            const count = catProducts.data ? catProducts.data.count.count : 0;
            setCatProducts({ products: loadProducts, count: count });
        }).catch(e => {
            console.log(e);
        });
    }

    return <div className="e-container">
        <SelectionView products={categoriesDate.products} />
        <ViewProductsContainer position={position.stateContext} products={categoriesDate.products} />
        <PaginationComponent current={curentPage.page} changePagination={changePage} countAllProducts={categoriesDate.count} />
    </div>
}
export default CategoriesList;