import React, { useRef, memo } from 'react';
import './search.scss';
import { IoIosClose } from 'react-icons/io';
function ActionPreview(products, close, startsearch) {
    if (products.length) {
        return <>
            <div className="search-close">
                <span>Найденно {products.length} товаров. <span onClick={startsearch}>Показать все</span></span>
                <span className="search-close-btn" onClick={close}><IoIosClose /></span>
            </div></>
    } else {
        return <></>
    }
}
const SearchComponent = ({ onChange, preview, flagOpen, close: closeProps, startsearch }) => {
    const rev = useRef('');
    console.log(rev);
    
    function close () {
        rev.current.value = '';
        closeProps(false);
    }

    return (<div className="">
        <div className="form-control">
            <input className="e-searchInput" placeholder="поиск" type="text" ref={rev} onChange={onChange} />
            <button disabled={!rev.current.value} type="button" className="e-btn-search" onClick={startsearch}>
                найти
        </button>
            {flagOpen &&
                (<div className="search-preview">
                    {ActionPreview(preview, close, startsearch)}
                    <ul>
                        {preview.length > 0 && preview.map(product => {
                            return <li key={product.id}>{product.title}</li>
                        })}
                    </ul>
                </div>)
            }
        </div>
    </div>)
};

export default SearchComponent;