import React, { useState, useEffect } from 'react';
import './slider-recomended.sass';
import ProductBox from '../product-box/product-box-component';
const SliderRecomended = (props) => {
    const [count, setcount] = useState(0);
    const [sliders, setSliders] = useState([]);
    const [activeTabs, setActiveTabs] = useState(0);
    const [flagUploads, setUploads] = useState(false);
    const [visibleSliders, setVisiblesliders] = useState(3);
    const [sliderWidth, setWidth] = useState(0);
    const [styleSlider, setStyle] = useState({
        outer: {
            width: 0,
        },
        item: {
            width: 0
        },
        outerTransform: {
            transform: 0
        },
    });
   function delimiterSliders() {
       const count = sliders.length;
        if (count > 6) {
            return Math.ceil(count / 2);
        }   else {
            return 3;
        }
    }

    useEffect(() => {
        setSliders([
            { id: '1', name: 'werty', img: 'ui.jpg', link: '' },
            { id: '2', name: 'asasas', img: 'ui.jpg', link: '' },
            { id: '3', name: 'werty', img: 'ui.jpg', link: '' },
            { id: '4', name: 'ytrewq', img: 'ui.jpg', link: '' },
            { id: '5', name: 'ytrewq', img: 'ui.jpg', link: '' },
            { id: '6', name: 'ytrewq', img: 'ui.jpg', link: '' },
        ])
        const defaultelenet = document.getElementById('e-slider-outer');
        const mainwidth = defaultelenet.getBoundingClientRect().width;
        setStyle({
            outer: { width: (mainwidth / visibleSliders) * delimiterSliders() },
            item: { width: (mainwidth / visibleSliders) - 1 },
            outerTransform: { transform: 0 },
        });
        setWidth(mainwidth);
        setUploads(true)
        window.addEventListener('resize', () => {
            setWidth(defaultelenet.getBoundingClientRect().width);
        });
    }, []);
    useEffect(() => {
        setStyle({
            outer: { width: (sliderWidth / visibleSliders) * delimiterSliders() },
            item: { width: (sliderWidth / visibleSliders) - 1 },
            outerTransform: { transform: 0 },
        });
        setcount(0);
    }, [sliderWidth, sliders]);

    useEffect(() => {
        console.log('loadSliders' + activeTabs);
        if (activeTabs === 0) {
            setSliders([
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
            ])
        }
        if (activeTabs === 1) {
            setSliders([
                { id: '1', name: 'werty', img: 'product2.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product2.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product2.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product2.jpg', link: '' },
            ])
        }
        if (activeTabs === 2) {
            setSliders([
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product2.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
                { id: '1', name: 'werty', img: 'product1.jpg', link: '' },
            ])
        }
        
    }, [activeTabs]);

    function changeTabs(num) {
        setActiveTabs(num);
    }

    function activecontrolLeft() {
        if (visibleSliders === delimiterSliders()) {
            return;
        }
        setStyle({
            outer: { ...styleSlider.outer },
            item: { ...styleSlider.item },
            outerTransform: { transform: sets() },
        });
        function sets() {
            let counts = count;
            let returnTransform;
            if (count === 0) {
                counts++;
                returnTransform = styleSlider.outerTransform.transform - styleSlider.item.width;
            } else if (count + visibleSliders === delimiterSliders()) {
                counts--;
                returnTransform = styleSlider.outerTransform.transform + styleSlider.item.width;
            } else {
                counts++;
                returnTransform = styleSlider.outerTransform.transform - styleSlider.item.width;
            }
            setcount(counts);
            return returnTransform;
        }
    }
    function activecontrolRigth() {
        if (visibleSliders === delimiterSliders()) {
            return;
        }
        setStyle({
            outer: { ...styleSlider.outer },
            item: { ...styleSlider.item },
            outerTransform: { transform: sets() },
        });
        function sets() { // todo 2 ф-ции вынести в одну
            let counts = count;
            let returnTransform;
            if (count + visibleSliders === delimiterSliders()) {
                counts--;
                returnTransform = styleSlider.outerTransform.transform + styleSlider.item.width;
            } else if (count === 0) {
                counts++;
                returnTransform = styleSlider.outerTransform.transform - styleSlider.item.width;
            } else {
                counts--;
                returnTransform = styleSlider.outerTransform.transform + styleSlider.item.width;
            }
            setcount(counts);
            return returnTransform;
        }
    }
    return <div className="e-slider-rec">
        <div className="e-slider-nav e-flex">
            <span className="e-slider-title">Популярное</span>
            <div className="e-slider-tabs">
                <ul>
                    <li><span onClick={()=>{changeTabs(0)}} className={{ 'active': activeTabs === 0 }}>Новинки</span></li>
                    <li><span onClick={()=>{changeTabs(1)}} className={{ 'active': activeTabs === 1 }}>Популярное</span></li>
                    <li><span onClick={()=>{changeTabs(2)}} className={{ 'active': activeTabs === 2 }}>Скидки</span></li>
                </ul>
            </div>
            <div className="e-slider-control e-flex">
                <span onClick={activecontrolLeft} className="e-s-control-left">&lt;</span>
                <span onClick={activecontrolRigth} className="e-s-control-rigth">&gt;</span>
            </div>
        </div>
        <div className="e-slider-courusel">
            {!flagUploads ? 'загрузка' : ''}
            <div id="e-slider-outer" className="e-slider-outer">
                <div className="e-sl-stage"
                    style={{ width: styleSlider.outer.width, transform: "translate(" + styleSlider.outerTransform.transform + 'px,' + " 0px)" }}>
                    {sliders.map(product => {
                       return  <ProductBox  product={product}/>
                    })}
                </div>
            </div>
        </div>
    </div>
}

export default SliderRecomended;