import React from 'react';
import { useContext } from 'react';
import { SelectionContext } from '../../context/selection-view';
import { Product } from '../../interfaces/interfase';
import './bests-component.scss';
import { ProductsComponets } from '../../helpers/common-jsx';


const loadProducts = (position: string, products: Product[]) => {
    if (products.length) {
        return products.map((product: Product) => {
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