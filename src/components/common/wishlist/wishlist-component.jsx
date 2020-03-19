import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './wishlist.scss';
import { addNewListReducer } from './../../../reducers/wishlist-reduser';
import  WishListItems from './wishlist-items-component';

const WishList = (props) => {
    const list = useSelector(state => state.wishlist);
    console.log(list);
    const dispatch = useDispatch();
    const [newList, setList] = useState('');
    function addNewList() {
        dispatch(addNewListReducer(newList));
        setList('');
    }
    function setNewList(e) {
        setList(e.target.value);
    }
    return <div>
        <div className="new-wish">
            <span>Добавить новый список</span>
            <input onChange={setNewList} value={newList} type="text" placeholder="название списка"></input>
            <button disabled={!newList.length || list.wishList.length === 10} type="button" onClick={addNewList}>сохранить</button>
        </div>
        <div className=''>
            {list.wishList.length > 0 && <div>
                <WishListItems list={list} />
            </div>}
            {!list.wishList.length && <div>
                список желаний пуст
            </div>}
        </div>
    </div>
}

export default WishList;