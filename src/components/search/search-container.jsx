import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SearchComponent from './search';
const SearchContainer = (props) => {
    const [searchVal, setSearch] = useState('');
    const history = useHistory();
    useEffect(() => {
        console.log('userEffect');
    }, [searchVal]);

    const changeSearchVal = (val) => {
        setSearch(val);
    }
    const startsearch = () => {
        history.push('/search');
    };
    return <SearchComponent searchVal={searchVal} changeSearchVal={changeSearchVal} startsearch={startsearch} />
}
export default SearchContainer;