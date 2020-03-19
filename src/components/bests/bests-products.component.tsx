import React from 'react';
import { useContext } from 'react';
import { SelectionContext } from '../../context/selection-view';
import ProductBox from '../product-box/product-box-component';
import ProductList from '../product-box/produx-list.container';
import { Product } from '../../interfaces/interfase';
import './bests-component.scss';
const ProductsComponets = (position: string, product: Product) => {
    if (position === 'block') {
        return <ProductBox product={product} />
    } else {
        return <ProductList product={product} />
    }
};

const loadProducts = (position: string, products: Product[]) => {
    if (products.length) {
        return products.map((product: any) => {
            return ProductsComponets(position, product)
        })
    } else {
        return 'Нет товаров'
    }
}

const BestProducts = (props: any) => {
    const position: any = useContext(SelectionContext);
    const products = props.products;

    return <div className="e-products-box">
        {loadProducts(position.stateContext, products)}
    </div>
}

export default BestProducts;