import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import logos from './../../assets/image/logo.jpg';
import SearchContainer from './../search/search-container';
const HeaderComponent = (props) => {

    return <div className="">
        <div className="e-header-top">
            <div className="e-container">
                <div className="e-header-middle">
                    <div className="e-header-logo">
                        <NavLink to="/">
                            <img className="logo" src={logos} alt="логотип"></img>
                        </NavLink >
                    </div>
                    <div className="e-search">
                        <SearchContainer />
                    </div>
                    <div className="e-cart-box">

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default HeaderComponent;