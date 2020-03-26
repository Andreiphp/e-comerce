import React, { useState, useEffect } from 'react';
import './slider-small.sass';
import { Product } from '../../interfaces/interfase';
const SliderProduct = (props: any) => {
    const [count, setcount] = useState(0);
    const [flagUploads, setUploads] = useState(false);
    const [visibleSliders, setVisiblesliders] = useState(3)
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

    useEffect(() => {
        const defaultelenet: any = document.getElementById('e-slider-outer');
        const mainwidth = defaultelenet.getBoundingClientRect().width;
        setStyle({
            outer: { width: (mainwidth / visibleSliders) * props.products.length },
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
            outer: { width: (sliderWidth / visibleSliders) * props.products.length },
            item: { width: (sliderWidth / visibleSliders) - 1 },
            outerTransform: { transform: 0 },
        });
        setcount(0);
    }, [sliderWidth]);

    function activecontrolLeft() {
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
            } else if (count + visibleSliders === props.products.length) {
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
        setStyle({
            outer: { ...styleSlider.outer },
            item: { ...styleSlider.item },
            outerTransform: { transform: sets() },
        });
        function sets() { // todo 2 ф-ции вынести в одну
            let counts = count;
            let returnTransform;
            if (count + visibleSliders === props.products.length) {
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
    return <div className="e-slider-small">
        <div className="e-slider-nav e-flex">
            <span className="e-slider-title">{props.title}</span>
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
                    {props.products.map((product: Product) => {
                        const image = require(`./../../assets/image/${product.img}`);
                        return <div key={product.id} className="e-sl-item" style={styleSlider.item}>
                            <div className="e-sl-item-inner">
                                <div className="e-item">
                                    <div className={props.type === 'brands' ? 'e-sl-body position_center' : 'e-sl-body'}>
                                        <div className='e-sl-img'>
                                            <img src={image}></img>
                                        </div>
                                        <div className={ props.type === 'brands' ? 'e-sl-title hide_title' : 'e-sl-title'}>
                                            <h2 className="e-catName">
                                                <a>{product.title}</a>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    </div>
}

export default SliderProduct;