import React, { useCallback, useContext } from 'react';
import './selection-view.scss';
import { SelectionContext } from './../../../context/selection-view';
import { useDispatch } from 'react-redux';
import { sortAction } from '../../../reducers/selection-reducers';
const SelectionView = (props) => {
    const position = useContext(SelectionContext);
    let currentSort = props.sort;
    const dispath = useDispatch();
    const callback = useCallback(() => {
        dispath(sortAction(currentSort));
    }, [currentSort, position.stateContext]);

    let classBlock;
    let classList;
    if (position.stateContext === 'block') {
        classBlock = 'left-active';
        classList = 'rigth';
    } else {
        classBlock = 'left';
        classList = 'rigth-active';
    }

    function changeSort(event) {
        currentSort = event.currentTarget.value;
        callback();
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
                    <span>Показанно 10 товаров</span>
                </div>
                <select value={props.sort} onChange={changeSort} className="e-sort">
                    <option value='max'>цена: по возрастанию</option>
                    <option value='min'>цена: по убыванию</option>
                </select>
            </div>
        </div>
    );
}
export default SelectionView;