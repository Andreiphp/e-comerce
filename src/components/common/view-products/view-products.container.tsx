import React, { ReactComponentElement, useMemo } from 'react';
import './view-products.scss';
import ProductBox from '../../product-box/product-box-component';
import ProductList from '../../product-box/produx-list.container';
import { Product } from '../../../interfaces/interfase';
function getProductsCart(position: string, product: Product): ReactComponentElement<any> {
    if (position === 'block') {
        return <ProductBox key={product.id} product={product} />
    } else {
        return <ProductList key={product.id} product={product} />
    }
};

function loadProducts(position: string, products: Product[]): any {
    if (products.length) {
        return products.map((product: Product) => {
            return getProductsCart(position, product)
        })
    } else {
        return 'Нет товаров'
    }
};
const ViewProductsContainer = (props: any) => {
    const getProducts = useMemo(() =>
        loadProducts(props.position, props.products)
        , [props.position, props.products]);
    return <div className="wrapper-products">{getProducts}</div>;
}

export default ViewProductsContainer;