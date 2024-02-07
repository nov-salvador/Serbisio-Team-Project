import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImage1 from '/src/assets/mid-banner/banner.png';
import bannerImage2 from '/src/assets/mid-banner/banner.png';
import bannerImage3 from '/src/assets/mid-banner/banner.png';

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
          <img src={bannerImage1} alt="Banner 1" className="object-cover mx-auto" />
        </div>
        <div>
          <img src={bannerImage2} alt="Banner 2" className="object-cover mx-auto" />
        </div>
        <div>
          <img src={bannerImage3} alt="Banner 3" className="object-cover mx-auto" />
        </div>
      </Slider>
    </div>
  );
}
