import React from 'react';
import { useSelector } from 'react-redux';
import { FaRegHeart } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
const WishListSmallComponent = (props) => {
    const list = useSelector(state => state.wishlist);
    const countProductsWishlist = getCount();
    const history = useHistory();
    function getCount() {
        if (!list.wishList.length) {
            return 0;
        }
        let count = 0;
        list.wishList.forEach((item) => {
            if (item.title === list.default) {
                for (let name in item.products) {
                    if (item.products.hasOwnProperty(name)) {
                        count += +item.products[name];
                    }
                }
                return count;
            }
        });
        return count;
    }
    function redirectToWishList() {
        if (countProductsWishlist) {
            history.push('/wishlist');
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