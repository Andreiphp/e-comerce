import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import { GiHamburgerMenu } from "react-icons/gi";
import './category-component.scss';
import { NavLink } from 'react-router-dom';
function ItemsCategories(categories) {
    return categories.map(cat => {
        return <li key={cat.id}><NavLink to={`/category/${cat.id}`}>{cat.title}</NavLink></li>
    });
}
const Category = (props) => {
    const [category, setCategory] = useState([]);
    const [isOpen, setOpenenMenu] = useState(false);
    useEffect(() => {
        Axios.get('http://localhost:8080/router/get_categories').then(category => {
            setCategory(category.data);
            console.log(category);
        }).catch(e => {
            console.log(e);
        });
    }, []);
    function openMenu() {
        setOpenenMenu(!isOpen);
    }
    return <div className="e-category">
        <div className="category-block">
            <span>Категории</span>
            <GiHamburgerMenu onClick={openMenu} />
        </div>
        {isOpen &&   <div className="categories-items">
            <ul>
                {ItemsCategories(category)}
            </ul>
        </div>
        
    }
       
    </div>
}

export default Category;