import React from 'react';
import { connect } from 'react-redux';
import SmallCartComponent from './small-cart.component';
import {deleteProductAction} from './../../reducers/cart-reducers';
const mapStateToprops = state => ({cart: state.cart});
export default connect(mapStateToprops, {deleteProductAction})(SmallCartComponent);
