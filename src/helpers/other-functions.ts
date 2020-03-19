export function countProducts(productsObj: any) {
    let count = 0;
    for (let id in productsObj) {
        if (productsObj.hasOwnProperty(id)) {
            count += +productsObj[id];
        }
    }
    return count;
}