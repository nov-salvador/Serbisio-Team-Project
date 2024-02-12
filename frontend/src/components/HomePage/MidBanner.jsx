import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '/src/assets/mid-banner/1.png';
import image2 from '/src/assets/mid-banner/2.webp';

export default function MidBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative pb-12 text-center">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Banner 1" className="object-cover mx-auto" />
        </div>
        <div>
          <img src={image2} alt="Banner 2" className="object-cover mx-auto" />
        </div>
      </Slider>
    </div>
  );
}
