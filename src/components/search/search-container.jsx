import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SearchComponent from './search';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { searchCreator } from '../../reducers/search-reducers';
const SearchContainer = (props) => {
    const [searchVal, setSearch] = useState('');
    const history = useHistory();
    const dispath = useDispatch();
    useEffect(() => {
        axios.get(`http://localhost:8080/router/search?search=${searchVal}`)
            .then(res => {
                const persons = res.data;
                dispath(searchCreator(persons[1], persons[0][0].count))
            });
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