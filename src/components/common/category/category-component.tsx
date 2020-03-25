import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import { GiHamburgerMenu } from "react-icons/gi";
import './category-component.scss';
import { NavLink } from 'react-router-dom';
import { Category } from '../../../interfaces/interfase';
function ItemsCategories(categories: Category[]) {
    return categories.map((cat: Category) => {
        return <li key={cat.id}><NavLink to={`/category/${cat.id}`}>{cat.title}</NavLink></li>
    });
}
const CategoryComponent = (props: any) => {
    const initCategory: Category[] = []
    const [category, setCategory] = useState(initCategory);
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

export default CategoryComponent;