import React from 'react';
import './pagination.scss';
import { VIEW_PRODUCTS, BUTTONS_TOTTAL } from './pagination.config';
import { useMemo } from 'react';
const PaginationComponent = (props) => {
    console.log('pagination');
    const countAllProducts = props.countAllProducts;
    const current = props.current;
    let links = useMemo(() => pages(), [countAllProducts, current]);
    function pages() {
        const p = [];
        const pages = Math.ceil(countAllProducts / VIEW_PRODUCTS);
        for (let i = 1; i <= pages; i++) {
           if (i === 1 || i === pages || i === current
             || (current < BUTTONS_TOTTAL - 1 && i < BUTTONS_TOTTAL) 
             || ( i + 1 === current || i - 1 === current)
             || ((pages - current <= 1) && pages - i < BUTTONS_TOTTAL - 1)
             ) {
            p.push(i);
           }
        }
        return p;
    }
    function change(p) {
        if (current !== p)
        props.changePagination.next(p);
    }

    return <div className="e-pagination">
        <ul>
            {(links.length && links.length > 1) &&
                links.map(p => {
                    return <li className={current === p ? 'active' : ''} onClick={() => { change(p) }} key={p}>{p}</li>
                })
            }
        </ul>
    </div>
}
export default PaginationComponent;