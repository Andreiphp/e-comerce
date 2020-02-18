import React from 'react';
import { useContext } from 'react';
import { SelectionContext } from '../../context/selection-view';
import ProductBox from '../product-box/product-box-component';
import ProductList from '../product-box/produx-list.container';
import './bests-component.scss';
const ProductsComponets = (position, product) => {
    if (position === 'block') {
        return <ProductBox product={product} />
    } else {
        return <ProductList product={product} />
    }
};

const loadProducts = (position, products) => {
    if (products.length) {
        return products.map(product => {
            return ProductsComponets(position, product)
        })
    } else {
        return 'Нет товаров'
    }
}

const BestProducts = (props) => {
    const position = useContext(SelectionContext);
    const products = props.products;
    return <div className="e-products-box">
        {loadProducts(position.stateContext, products)}
    </div>
}

export default BestProducts;