import React from 'react';
import { NavLink } from 'react-router-dom';
const MainSidebar = (props) => {
    return <div className="e-menu">
        <ul className="e-menu-content">
            <li>
                <NavLink to={`/protein`}>Протеины</NavLink>
            </li>
            <li>
                <NavLink to={`/gainer`}>Гейнеры</NavLink>
            </li>
            <li>
                <NavLink to={`/amino`}>Аминокислоты</NavLink>
            </li>
        </ul>
    </div>
}

export default MainSidebar;