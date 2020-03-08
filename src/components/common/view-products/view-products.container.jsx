import React from 'react';
import './view-products.scss';
import ProductBox from '../../product-box/product-box-component';
import ProductList from '../../product-box/produx-list.container';
const ProductsComponets = (position, product) => {
    if (position === 'block') {
        return <ProductBox key={product.id} product={product} />
    } else {
        return <ProductList  key={product.id} product={product} />
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
};
const ViewProductsContainer = (props) => {
    return <div className="wrapper-products">{loadProducts(props.position, props.products)}</div>;
}

export default ViewProductsContainer;