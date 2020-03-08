import React from 'react';
import SliderProduct from '../slider-small/slider-small-component';
import ProductBox from '../product-box/product-box-component';
import SliderRecomended from '../slider-recomended/slider-recomended.component';
const HomeContainer = (props) => {
    console.log('home page');
    return <>
        <div className="e-home">
            <SliderProduct title="Популярные категории" products={[
                {id: '1', name: 'werty', img: 'ui.jpg', link: ''},
                {id: '2', name: 'asasas', img: 'ui.jpg', link: ''},
                {id: '3', name: 'werty', img: 'ui.jpg', link: ''},
                {id: '4', name: 'ytrewq', img: 'ui.jpg', link: ''},
                {id: '5', name: 'ytrewq', img: 'ui.jpg', link: ''},
                {id: '6', name: 'ytrewq', img: 'ui.jpg', link: ''},
        ]}/>
        <div className="e-products-container e-flex">
            {/* <ProductBox product={{id: '1', name: 'новый товар', img: 'product1.jpg', link: ''}}/>
            <ProductBox product={{id: '1', name: 'новый товар', img: 'product2.jpg', link: ''}}/>
            <ProductBox product={{id: '1', name: 'новый товар', img: 'product3.jpg', link: ''}}/>
            <ProductBox product={{id: '1', name: 'новый товар', img: 'product2.jpg', link: ''}}/>
            <ProductBox product={{id: '1', name: 'новый товар', img: 'product3.jpg', link: ''}}/>
            <ProductBox product={{id: '1', name: 'новый товар', img: 'product1.jpg', link: ''}}/>
            <ProductBox product={{id: '1', name: 'новый товар', img: 'product3.jpg', link: ''}}/> */}
        </div>

        <SliderRecomended/>

        <SliderProduct title="Бренды" type="brands" products={[
                {id: '1', name: 'werty', img: '5.jpg', link: ''},
                {id: '2', name: 'asasas', img: '6.jpg', link: ''},
                {id: '3', name: 'werty', img: '7.jpg', link: ''},
                {id: '4', name: 'ytrewq', img: '8.jpg', link: ''},
                {id: '5', name: 'ytrewq', img: '9.jpg', link: ''},
                {id: '6', name: 'ytrewq', img: '10.jpg', link: ''},
        ]}/>
        </div>
    </>
}


export default HomeContainer;