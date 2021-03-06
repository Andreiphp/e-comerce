import React from 'react';
import './small-cart.css';
import { FaOpencart } from 'react-icons/fa';
const SmallCartComponent = (props: any) => {
    console.log('small cart');

    function deleteProduct(id: number): void {
        props.deleteProductAction(id);
    }
    return <div className="e-small-cart">
        <span className="e-cart">
            <span className="e-cart-title">
                <FaOpencart/>
            </span>
            <div className="e-cart-count">
                <span>{props.cart.size}</span>
            </div>
        </span>
        {/* <div className="e-cart-panel">
            <button onClick={() => {deleteProduct(1)}}>удалить</button>
        </div> */}
    </div>
}

export default SmallCartComponent;