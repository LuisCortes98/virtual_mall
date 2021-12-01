import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import CustomDot from './CustomDot';

const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    }
};

export default function Product({ _ref, colors, price, cotton, peach_skin}) {

    const images = [`REF ${_ref}.png`, `REF ${_ref}.png`]

    return (
        <div id={`products-${_ref}`} 
            className="bg-white p-3 shadow border-rounded column-start align-content-center m-3"
            style={{width:280}}>
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
                    {images.map((image, i) => <img key={i} src={`../images/${image}`} height={250} className="w-100 product-image border-rounded" alt="product-image"/>)}
            </Carousel>
            <div className="txt-dark-blue txt-semibold">{_ref}</div>
            <div className="txt-dark-blue">{price}</div>
        </div>
    );
}