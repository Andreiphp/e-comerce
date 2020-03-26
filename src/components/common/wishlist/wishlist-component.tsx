import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './wishlist.scss';
import { addNewListReducer } from '../../../reducers/wishlist-reduser';
import  WishListItemsComponent from './wishlist-items-component';
import { Store } from '../../../interfaces/interfase';

const WishListComponent = (props: any) => {
    const list = useSelector((state: Store) => state.wishlist);
    console.log(list);
    const dispatch = useDispatch();
    const [newList, setList] = useState('');
    function addNewList() {
        dispatch(addNewListReducer(newList));
        setList('');
    }
    function setNewList(e: any) {
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
                <WishListItemsComponent list={list} />
            </div>}
            {!list.wishList.length && <div>
                список желаний пуст
            </div>}
        </div>
    </div>
}

export default WishListComponent;