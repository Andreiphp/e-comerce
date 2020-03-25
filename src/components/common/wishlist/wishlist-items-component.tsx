import React from 'react';
import { useDispatch } from 'react-redux';
import { defaultActionReduser } from '../../../reducers/wishlist-reduser';
import { countProducts } from '../../../helpers/other-functions';
import { subjectWishList } from '../../../helpers/subscribers-functions';
const WishListItemsComponent = (props: any) => {
    console.log(props.list.wishList);
    console.log(props.list.default);
    const dispatch = useDispatch();
    function changeDefault(title: string) {
        dispatch(defaultActionReduser(title));
    }
    function loadProductsWishList(list) {
        subjectWishList.next(list);
    }
    return <ul>
        {props.list.wishList.map(item => {
            return <li className="wishlist-items" key={item.title}>
                <span>{item.title}</span>
                <span>{countProducts(item.products)}</span>
                <span>{item.created}</span>
                <span onClick={() => {
                    loadProductsWishList(item);
                }}>показать</span>
                <span><input disabled={item.title === props.list.default} 
                checked={item.title === props.list.default} type="checkbox" 
                onChange={() => { changeDefault(item.title) }}></input></span>
                <span>удалить</span>
            </li>
        })}
    </ul>
}
export default WishListItemsComponent;