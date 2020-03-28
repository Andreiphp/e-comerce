import React from 'react';
import { useSelector } from 'react-redux';
import { FaRegHeart } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { WishListItems, Store } from '../../../interfaces/interfase';
const WishListSmallComponent = (props: any) => {
    const list = useSelector((state: Store) => state.wishlist);
    const countProductsWishlist = getCount();
    const history = useHistory();
    function getCount() {
        if (!list.wishList.length) {
            return 0;
        }
        let count = 0;
        list.wishList.forEach((item: WishListItems) => {
            if (item.title === list.default) {
                count = item.products.length;
            }
        });
        return count;
    }
    function redirectToWishList() {
        if (countProductsWishlist) {
            history.push('/account/wishlist');
        }
    }
    return <div className="e-small-wishlist">
        <div className="wrapper" onClick={redirectToWishList}>
            <FaRegHeart />
            <span className="wishlist-count">{countProductsWishlist}</span>
        </div>
    </div>
}

export default WishListSmallComponent;