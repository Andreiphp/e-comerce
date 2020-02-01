import React from 'react';
import SliderProduct from '../slider-small/slider-small-component';
const HomeContainer = (props) => {
    return <>
        <div className="e-home">
            <SliderProduct products={[
                {id: '1', name: 'werty', img: 'ui.jpg', link: ''},
                {id: '2', name: 'asasas', img: 'ui.jpg', link: ''},
                {id: '3', name: 'werty', img: 'ui.jpg', link: ''},
                {id: '4', name: 'ytrewq', img: 'ui.jpg', link: ''},
                {id: '5', name: 'ytrewq', img: 'ui.jpg', link: ''},
                {id: '6', name: 'ytrewq', img: 'ui.jpg', link: ''},
        ]}/>
        </div>
    </>
}


export default HomeContainer;