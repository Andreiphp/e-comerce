import React from 'react';
import { useDispatch } from 'react-redux';
import { defaultActionReduser } from '../../../reducers/wishlist-reduser';
import { countProducts } from '../../../helpers/other-functions';
import { subjectWishList } from '../../../helpers/subscribers-functions';
import { WishListItems } from '../../../interfaces/interfase';
import { useHistory } from 'react-router-dom';
const WishListItemsComponent = (props: any) => {
    const dispatch = useDispatch();
    const history = useHistory();
    function changeDefault(title: string) {
        dispatch(defaultActionReduser(title));
    }
    function viewWishlist(id: number): any {
        history.push('/account/wishlist/'+ id);
    }
    return <ul>
        {props.list.wishList.map((item: WishListItems) => {
            return <li className="wishlist-items" key={item.title}>
                <span onClick={() => {viewWishlist(item.id)}}>{item.title}</span>
                <span>{countProducts(item.products)}</span>
                <span>{item.created}</span>
                <span><input disabled={item.title === props.list.default}
                    checked={item.title === props.list.default}
                    type="checkbox"
                    onChange={() => { changeDefault(item.title) }}></input></span>
                <span>редактировать</span>
                <span>удалить</span>
            </li>
        })}
    </ul>
}
export default WishListItemsComponent;