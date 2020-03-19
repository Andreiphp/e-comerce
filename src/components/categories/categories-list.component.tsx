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
import { Store, ResponseProducts, StateProductsCat, Product } from '../../interfaces/interfase';
import { takeUntil } from 'rxjs/operators';
import { ChangePage } from '../../helpers/subscribers-functions';
const CategoriesList = (props: any) => {
    const _unsebscribe = new Subject();
    const initProducts: StateProductsCat = { products: [], count: 0, currentPage: 1 }
    const [categoriesProducts, setCatProducts] = useState(initProducts);
    const position: any = useContext(SelectionContext);
    const currentSort = useSelector((state: Store) => state.sort);
    const idCategory: number = props.match.params.id;
    useEffect(() => {
        ChangePage.pipe(takeUntil(_unsebscribe)).subscribe((page) => {
            const query = `offset=${page}&count=${VIEW_PRODUCTS}&category=${idCategory}&sort=price&toSort=${currentSort.sort === 'max' ? true : false}`;
            loadProducts(query, page);
        });
        return () => {
            _unsebscribe.next();
            _unsebscribe.complete();
        }
    }, []);
    useEffect(() => {
        setCatProducts(Object.assign({}, categoriesProducts, { currentPage: 1 }))
    }, [idCategory]);

    useEffect(() => {
        const query = `offset=${categoriesProducts.currentPage}&count=${VIEW_PRODUCTS}&category=${idCategory}&sort=price&toSort=${currentSort.sort === 'max' ? true : false}`;
        loadProducts(query, categoriesProducts.currentPage);
    }, [idCategory, currentSort]);


    function loadProducts(query: any, page: number) {
        Axios.get(`http://localhost:8080/router/getAllProducts?${query}`).then((result) => {
            const response: ResponseProducts =  result.data;
            const loadProducts: Product[] = response.res ? response.res : [];
            const count = response ? response.count.count : 0;
            setCatProducts({ products: loadProducts, count: count, currentPage: page });
        }).catch(e => {
            console.log(e);
        });
    }

    return <div className="e-container">
        <SelectionView products={categoriesProducts.products} />
        <ViewProductsContainer position={position.stateContext} products={categoriesProducts.products} />
        <PaginationComponent current={categoriesProducts.currentPage} countAllProducts={categoriesProducts.count} />
    </div>
}
export default CategoriesList;