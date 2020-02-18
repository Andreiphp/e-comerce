import React from 'react';
import { useSelector } from 'react-redux';
import { SelectionContext } from '../../context/selection-view';
import ProductBox from '../product-box/product-box-component';
import ProductList from '../product-box/produx-list.container';
import { useContext } from 'react';
import './search-page.scss';
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
}
const SearchPageComponent = (props) => {
    const position = useContext(SelectionContext);
    const searchProducts = useSelector(state => state.search);
    console.log(props);
    console.log(searchProducts);
    return <section className="e-search-page e-container">
         {loadProducts(position.stateContext, searchProducts.products)}
    </section>
}
export default SearchPageComponent;