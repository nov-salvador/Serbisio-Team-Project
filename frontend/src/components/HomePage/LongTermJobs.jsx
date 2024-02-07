import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

//Dummy
const urlImage = "https://www.worldconstructiontoday.com/wp-content/uploads/2020/11/constructon-worker-wellfare.jpg";
const jobCategories = ['Plumber', 'Carpenter', 'Event Staff', 'Aircon Technician', 'Lot Surveyor','Plumber', 'Carpenter', 'Event Staff', 'Aircon Technician', 'Lot Surveyor'];
const cities = ['Las Pinas', 'Paranaque', 'Cavite', 'Quezon City', 'Ortigas','Las Pinas', 'Paranaque', 'Cavite', 'Quezon City', 'Ortigas'];

const NextArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick} className=" text-gray-700 px-2 py-1 rounded-full focus:outline-none text-2xl"><GrFormNextLink/></button>;
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick} className=" text-gray-700 px-2 py-1 rounded-full focus:outline-none text-2xl"><GrFormPreviousLink /></button>;
};

export default function LongTermJobs() {
    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };

    const handlePrevClick = () => {
        sliderRef.current.slickPrev(); 
    };

    return (
        <div className="container mx-auto mb-10">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="font-semibold text-xl">Long Term Jobs (more than 3 Months)</h2>
                </div>
                <div className="flex items-center">
                <PrevArrow onClick={handlePrevClick} />
                <NextArrow onClick={handleNextClick} />
                    <button className="text-gray px-4 py-1 rounded-full text-sm ml-1">See More</button>
                </div>
            </div>
            <div className="text-center mt-4">
                <Slider {...settings} ref={sliderRef}>
                    {jobCategories.map((category, index) => (
                        <div key={index} className='text-center justify-center'>
                            <div className="text-center mx-2">
                                <img src={urlImage} alt={category} className="rounded-xl object-cover h-40 w-full" />
                            </div>
                            <div className="my-2 mx-5">
                                <h2 className="font-semibold text-center text-xl">{category}</h2>
                                <p className="text-sm text-center">{cities[index]}</p>
                                <p className="text-md text-center font-semibold">2,000/day</p>
                                <button className="bg-sky-500 text-white px-2 py-2 mt-2 rounded-full text-xs w-full">View Details</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
