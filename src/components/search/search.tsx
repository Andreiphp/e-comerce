import React, { useRef, memo } from 'react';
import './search.scss';
import { IoIosClose } from 'react-icons/io';
import { Product } from '../../interfaces/interfase';
function ActionPreview(products: Product[], close: any, startsearch: any) {
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
const SearchComponent = (props: any) => {
    const refInputSearch: any = useRef('');

    function close(): void {
        refInputSearch.current.value  = '';
        props.closeProps(false);
    }

    return (<div className="">
        <div className="form-control">
            <input className="e-searchInput" placeholder="поиск" type="text" ref={refInputSearch} onChange={props.onChange} />
            <button disabled={!refInputSearch.current.value} type="button" className="e-btn-search" onClick={props.startsearch}>
                найти
        </button>
            {props.flagOpen &&
                (<div className="search-preview">
                    {ActionPreview(props.preview, close, props.startsearch)}
                    <ul>
                        {props.preview.length > 0 && props.preview.map((product: Product) => {
                            return <li key={product.id}>{product.title}</li>
                        })}
                    </ul>
                </div>)
            }
        </div>
    </div>)
};

export default SearchComponent;