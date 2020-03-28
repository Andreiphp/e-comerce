import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import WishListComponent from '../../wishlist/wishlist-component';
import ViewProductsWishListComponent from '../../wishlist/view-products-wishlist.component';
import './account.scss';
const AccountComponent = (props: any) => {

    return <div className="account">
        <ul className="account-nav-list">
            <li><Link to="/account/orders">Заказы</Link></li>
            <li><Link to="/account/addres">Адрес</Link></li>
            <li><Link to="/account/wishlist">Список желаний</Link></li>
            <li><Link to="/account/settings">Настройки</Link></li>
        </ul>
        <Switch>
            <Route exact path="/account/wishlist" component={WishListComponent}></Route>
            <Route path="/account/wishlist/:id" component={ViewProductsWishListComponent}></Route>
        </Switch></div>
}


export default AccountComponent;
