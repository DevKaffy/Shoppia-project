import React from 'react'
import Slider from 'react-slick';


const SwipeContainer = ({activeCard, setActiveCard, children}) => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
    };

  return (
    <Slider className='w-full' {...settings} slidesToShow={1}>
      {children}
    </Slider>
  );
}

export default SwipeContainer