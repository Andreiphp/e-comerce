import React from 'react';
import './small-cart.css';
const SmallCartComponent = (props) => {
    console.log('small cart');

    function deleteProduct(id) {
        props.deleteProductAction(id);
    }
    return <div className="e-small-cart">
        <span className="e-cart">
            <span className="e-cart-title">Корзина</span>
            <div className="e-cart-count">
                <span>{props.cart.size}</span>
            </div>
        </span>
        <div className="e-cart-panel">
            <button onClick={() => {deleteProduct(1)}}>удалить</button>
        </div>
    </div>
}

export default SmallCartComponent;