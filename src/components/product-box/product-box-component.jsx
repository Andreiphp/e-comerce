import React from 'react';
import './product-box.scss';
const ProductBox = (props) => {
    const image = require(`./../../assets/image/${props.product.img}`);
    return <div className="product-box-item">
        <div className="box-inner">
            <div className="box-item">
                <div className="box-container">
                    <div className="box-image">
                        <a href="">
                            <span className="box-cover-image">
                              <img src={image}></img>
                            </span>
                            <span className="box-hover-image">
                                <img src={image}></img>
                                {/* <img src={image}></img> */}
                            </span>
                        </a>
                        <div className="box-actions">

                        </div>
                    </div>
                    <div className="box-description">
                        <h2 className="box-title">
                            <a >
                            Accumsan FusceAccumsan FusceAccumsan FusceAccumsan FusceAccumsan FusceAccumsan Fusce
                            </a>
                        </h2>
                        <div className="box-price">
                            <span className="price">
                                    135$
                            </span>
                        </div>
                        <div className="box-action-add">
                            <div className="box-action-hover">
                                <span className="box-add-to-cart">
                                    <i></i>
                                    <span>заказать</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProductBox;