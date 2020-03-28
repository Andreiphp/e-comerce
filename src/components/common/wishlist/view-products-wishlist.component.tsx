import React, { useState } from 'react';
import { useEffect } from 'react';
import { Subject } from 'rxjs';
import { WishList, WishListItems, Store, Product } from '../../../interfaces/interfase';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import { ProductsComponets } from '../../../helpers/common-jsx';
import './wishlist.scss';
const ViewProductsWishListComponent = (props: any) => {
    const _unsubscribe = new Subject();
    const id: number = +props.match.params.id;
    const list: WishList = useSelector((store: Store) => store.wishlist);
    const currentList = getCurrentList(id);
    const initial: Product[] = []
    const [wishProducts, setWishProducts] = useState(initial);
    function getCurrentList(id: number): WishListItems | null {
        if (list.wishList.length) {
            const findIs: WishListItems[] = list.wishList.filter((w: WishListItems) => w.id === id);
            if (findIs.length) {
                return findIs[0];
            }
        }
        return null;
    }
    useEffect(() => {
        const products: number[] = currentList ? currentList.products : [];
        if (products.length) {
            const query = `products=${products}`
            Axios.get(`http://localhost:8080/router/collection?${query}`).then((response: any) => {
                setWishProducts(response.data && response.data.result && response.data.result.length ? response.data.result : []);
            });
        }
    }, [id]);
    return <div className="">
        <h3>Список желаний: {currentList?.title}</h3>
        <div className="wish-products">
            {wishProducts.map((product: Product) => ProductsComponets('block', product))}
            {!wishProducts.length && <div>Добавьте товары в список желаний</div>}
        </div>

    </div>
}

export default ViewProductsWishListComponent;