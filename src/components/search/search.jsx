import React from 'react';
import './search.css';
const SearchComponent = (props) => {
    const change = (e) => {
        props.changeSearchVal(e.target.value);
    };
    return <div className="">
        <div className="form-control">
            <input className="e-searchInput" placeholder="поиск" type="text" value={props.searchVal} onChange={change} />
            <button type="button" className="e-btn-search" onClick={props.startsearch}>
                найти
            </button>
        </div>
    </div>
}
export default SearchComponent;