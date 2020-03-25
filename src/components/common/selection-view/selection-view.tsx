import React, { useCallback, useContext, SyntheticEvent } from 'react';
import './selection-view.scss';
import { SelectionContext } from '../../../context/selection-view';
import { useDispatch, useSelector } from 'react-redux';
import { sortAction } from '../../../reducers/selection-reducers';
import { Store } from '../../../interfaces/interfase';
const SelectionView = (props: any) => {
    const position: any = useContext(SelectionContext);
    const currentSort = useSelector((state: Store) => state.sort);
    const dispath = useDispatch();
    let classBlock;
    let classList;
    if (position.stateContext === 'block') {
        classBlock = 'left-active';
        classList = 'rigth';
    } else {
        classBlock = 'left';
        classList = 'rigth-active';
    }

    function changeSort(event: SyntheticEvent) {
        dispath(sortAction(event.currentTarget.nodeValue));
    }
    return (
        <div>
            <div className="e-selection">
                <div className="e-selection-panel">
                    <ul>
                        <li><span onClick={() => { position.toggleContext('block') }}
                            className={`e-view-products ${classBlock}`}></span></li>
                        <li><span onClick={() => { position.toggleContext('list') }}
                            className={`e-view-products rigth ${classList}`}></span></li>
                    </ul>
                    <span>{`Показанно ${props.products.length} товаров`}</span>
                </div>
                <select value={currentSort.sort} onChange={changeSort} className="e-sort">
                    <option value='max'>цена: по возрастанию</option>
                    <option value='min'>цена: по убыванию</option>
                </select>
            </div>
        </div>
    );
}
export default SelectionView;