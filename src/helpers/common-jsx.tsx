import { Product } from "../interfaces/interfase";
import React from "react";
import ProductBox from "../components/product-box/product-box-component";
import ProductList from "../components/product-box/produx-list.container";

export const ProductsComponets = (position: string, product: Product) => {
    if (position === 'block') {
        return <ProductBox product={product} />
    } else {
        return <ProductList product={product} />
    }
};