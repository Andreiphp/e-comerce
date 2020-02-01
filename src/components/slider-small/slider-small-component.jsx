import React, { useState, useEffect } from 'react';
import './slider-small.sass';
const SliderProduct = (props) => {
    const [count, setcount] = useState(0);
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
        const defaultelenet = document.getElementById('e-slider-outer');
        const mainwidth = defaultelenet.getBoundingClientRect().width;
        setStyle({
            outer: { width: (mainwidth / visibleSliders) * props.products.length },
            item: { width: (mainwidth / visibleSliders) - 1 },
            outerTransform: { transform: 0 },
        });
        setWidth(mainwidth);
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
            if (count === 0) {
                setcount(count + 1);
                return styleSlider.outerTransform.transform - styleSlider.item.width;
            } else if (count + visibleSliders === props.products.length) {
                setcount(count - 1);
                return styleSlider.outerTransform.transform + styleSlider.item.width;
            } else {
                setcount(count + 1);
                return styleSlider.outerTransform.transform - styleSlider.item.width;
            }
        }
    }
    function activecontrolRigth() {
        setStyle({
            outer: { ...styleSlider.outer },
            item: { ...styleSlider.item },
            outerTransform: { transform: sets() },
        });
        function sets() {
            if (count + visibleSliders === props.products.length) {
                setcount(count - 1);
                return styleSlider.outerTransform.transform + styleSlider.item.width;
            } else if (count === 0) {
                setcount(count + 1);
                return styleSlider.outerTransform.transform - styleSlider.item.width;
            }   else {
                setcount(count - 1);
                return styleSlider.outerTransform.transform + styleSlider.item.width;
            }
        }
    }
    return <div className="e-slider-small">
        <div className="e-slider-nav e-flex">
            <span className="e-slider-title">Популярное</span>
            <div className="e-slider-control e-flex">
                <span onClick={activecontrolLeft} className="e-s-control-left">&lt;</span>
                <span onClick={activecontrolRigth} className="e-s-control-rigth">&gt;</span>
            </div>
        </div>
        <div className="e-slider-courusel">
            {count}
            <div id="e-slider-outer" className="e-slider-outer">
                <div className="e-sl-stage"
                    style={{ width: styleSlider.outer.width, transform: "translate(" + styleSlider.outerTransform.transform + 'px,' + " 0px)" }}>
                    {props.products.map(product => {
                        const image = require(`./../../assets/image/${product.img}`);
                        return <div key={product.id} className="e-sl-item" style={styleSlider.item}>
                            <div className="e-sl-item-inner">
                                <div className="e-item">
                                    <div className="e-sl-body">
                                        <div className='e-sl-img'>
                                            <img src={image}></img>
                                        </div>
                                        <div className="e-sl-title">
                                            <h2 className="e-catName">
                                                <a> Smartphones</a>
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