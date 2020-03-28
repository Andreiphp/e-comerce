import { WishList, WishListItems } from "../interfaces/interfase";

export function countProducts(productsId: number[]): number {

    return productsId.length;
}

export function MaxId(list: WishList): number {
    let id = 1;
    if (list.wishList.length) {
        list.wishList.forEach((w: WishListItems) => {
            if (id <= w.id) {
                id = w.id;
            }
        });
        id += 1;
    }
    return id
}