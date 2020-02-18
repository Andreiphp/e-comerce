import React from 'react';
import './product-list.scss';
import {FaOpencart, FaRegEye, FaRegHeart} from 'react-icons/fa';
const ProductList = (props) => {
    const image = require(`./../../assets/image/${props.product.img}`);
    return <div className="e-product-list">
        <article className="e-product-full">
            <div className="e-product-wr">
                <div className="e-product-left">
                    <div className="e-product-image">
                        <a href="">
                            <span className="e-image-wr">
                                <img src={image}></img>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="e-product-rigth">
                    <div className="e-product-description">
                        <h2>{props.product.name}</h2>
                        <div className="e-product-price">
                            <span>{110}</span>
                        </div>
                        <div className="e-product-description-short">
                            dasddASD SAdASDasd dsadaDSADS GFGHFDGH dfgdfgdfgd
                            dsfsadfadfa dasfgasgdf
                        </div>
                        <div className="e-product-actions">
                            <ul>
                                <li className="e-product-add">
                                    <span><FaOpencart/></span>
                                </li>
                                <li className="e-product-add">
                                    <span><FaRegEye/></span>
                                </li>
                                <li className="e-product-add">
                                    <span><FaRegHeart/></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
}

export default ProductList;