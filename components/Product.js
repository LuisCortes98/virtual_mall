import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { useState } from 'react';

import CustomDot from './Shared/CustomDot';
import Size from './Shared/Size';
import Color from './Shared/Color';
import Material from './Shared/Material';
import FormatCurrency from './Shared/FormatCurrency';

const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    }
};

export default function Product({ _ref, name, colors, price, materials, dot_heart, custom_color, images, description}) {

    const [activeSize, setActiveSize] = useState('M');
    const [activeColor, setActiveColor] = useState(colors[0]);
    const [activeMaterial, setActiveMaterial] = useState(materials[0]);

    const sizes = ['S', 'M', 'L', 'XL'];

    const imgHasLink = images[0].includes('http');

    return (
        <div id={`products-${_ref}`} 
            className="position-relative bg-white p-3 col overflox-hidden shadow border-rounded column-start align-content-center m-3">
            {images.length > 1 ?
                <Carousel
                    draggable
                    swipeable
                    infinite
                    autoPlay
                    autoPlaySpeed={5000}
                    arrows={false}
                    showDots
                    customDot={<CustomDot />}
                    responsive={responsive}
                    ssr={true}>
                        {images.map((image, i) => <img key={i} src={imgHasLink ? image : `../images/${image}`} layout="fill" height={250} className="w-100 product-image border-rounded" alt="product-image"/>)}
                </Carousel> :
                <div className="w-100">
                    <img src={imgHasLink ? images[0] : `../images/${images[0]}`} height={250} className="w-100 product-image border-rounded" alt="product-image"/>
                </div>
            }
            <div className="col-12 row-center align-items-center my-3">
                {materials.map((material, i) => <Material key={i} value={material} activeValue={activeMaterial} setActiveValue={setActiveMaterial}/>)}
            </div>
            <div className="col-12 row-between align-items-center">
                <div className="row-start align-items-center">
                    {sizes.map((size, i) => <Size key={i} value={size} activeValue={activeSize} setActiveValue={setActiveSize}/>)}
                </div>
                <div className="row-start align-items-center">
                    {colors.map((color, i) => <Color key={i} value={color} activeValue={activeColor} setActiveValue={setActiveColor}/>)}
                </div>
            </div>
            <div className="column-center align-items-center mt-3">
                <div className="text-center txt-dark-blue2 txt-bold txt-6">REF {_ref} {name && name}</div>
                <div className="txt-dark-blue txt-bold text-center txt-12">
                    {dot_heart ? <FormatCurrency value={30000}/> : null} {dot_heart ? "-" : null} <FormatCurrency value={price}/>
                </div>
            </div>
            {description ? 
                <div className="txt-8 txt-semibold text-center mt-1 text-wrap">{description}</div> :
                <div className="txt-8 txt-semibold text-center mt-1" style={{height: 20}}>{custom_color? "Elige el color de tu estampado" : null}</div>
            }
        </div>
    );
}