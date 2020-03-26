import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-panel-component.sass';
import CategoryComponent from '../common/category/category-component';
const NavPanellFull = (props: any) => {
    return <div className="e-nav-full">
        <div className="e-container">
            <div className="e-nav-wrapper">
                <div className="e-panel-cat">
                    <CategoryComponent/>
                </div>
                <div className="e-menu">
                    <ul>
                        <li>
                            <NavLink to="/home">Главная</NavLink>
                        </li>
                        <li>
                            <NavLink to="/best">Лучшее</NavLink>
                        </li>
                        <li>
                            <NavLink to="/brands">Бренды</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Контакты</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
}

export default NavPanellFull;