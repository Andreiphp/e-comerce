import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import SearchComponent from './search';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { searchCreator } from '../../reducers/search-reducers';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
const SearchContainer = (props: any) => {
    const subscriber = new Subject();
    subscriber.pipe(debounceTime(500)).subscribe(value => {
        axios.get(`http://localhost:8080/router/search?search=${value}`)
            .then(res => {
                const [count, products] = res.data;
                setLocalConfig({ ...localconfig, searchVal: value as string, localProducts: products, count: count, flagOpen: true })
            });

    });
    const dispath = useDispatch();
    const [localconfig, setLocalConfig] = useState({
        localProducts: [],
        count: 0,
        searchVal: '',
        flagOpen: true
    });
    const history = useHistory();

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/router/search?search=${localconfig.searchVal}`)
    //     .then(res => {
    //         const [count, products] = res.data;
    //         setLocalConfig({ ...localconfig, localProducts: products, count: count })
    //     });
    // }, [localconfig.searchVal]);

    const changeSearchVal = useCallback((e) => {
        subscriber.next(e.target.value);
    }, []);
    const close = useCallback(() => {
        setLocalConfig({ ...localconfig, flagOpen: false });
    }, []);
    const startsearch = () => {
        dispath(searchCreator(localconfig.localProducts, localconfig.count));
        history.push('/search');
    };
    return <SearchComponent
        onChange={changeSearchVal}
        preview={localconfig.localProducts}
        flagOpen={localconfig.flagOpen}
        close={close}
        startsearch={startsearch}
    />
}
export default SearchContainer;