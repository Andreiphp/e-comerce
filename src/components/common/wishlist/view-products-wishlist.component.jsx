import React from 'react';
import { subjectWishList } from './../../../helpers/subscribers-functions';
import { useEffect } from 'react';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
const ViewProductsWishListComponent = (props) => {
    const _unsubscribe = new Subject();
    useEffect(() => {
        subjectWishList.pipe(takeUntil(_unsubscribe)).subscribe(list => {
            console.log(list);

        });
        return () => {
            _unsubscribe.next();
            _unsubscribe.complete();
        }
    }, []);
    return <div className="">

    </div>
}
export default ViewProductsWishListComponent;