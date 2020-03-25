export interface Store {
    cart: any,
    sort: any,
    search: any,
    wishlist: any,
}
export interface Product {
    id: number;
    title: string;
    description: string;
    minidescription: string;
    img: string;
    cat_id: number;
    brand_id: string;
    weight: number;
    price: number;
    sale: number;
    new: number;
    hit: number;
    link?: string;
}

export interface ResponseProducts {
    res: Product[],
    count: any,
}

export interface StateProductsCat {
    products: Product[],
    count: number;
    currentPage: number;
}

export interface Category {
    id: number;
    title: string;
}
export interface WishList {
    wishList: any;
    default: any
}

export interface WishListItems {
    id: number;
    title: string,
    products: any;
    created: Date,
    state: string

}