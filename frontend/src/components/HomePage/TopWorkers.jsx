import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

const urlImage = "https://i0.wp.com/mobility-work.com/wp-content/uploads/2021/08/profil-admin.png?fit=650%2C650&ssl=1";

//Dummy
const topWorkers = [
    { id: 1, Name: "John Doe", JobCategory: "Plumber", City: "Las Pinas", Photo_Url: urlImage, RatePerHour: 100, Rating: 5,CompletedJob: 10, Skills: ["Pipe fitting", "Leak detection"] },
    { id: 2, Name: "Jane Doe", JobCategory: "Carpenter", City: "Paranaque", Photo_Url: urlImage, RatePerHour: 200, Rating: 4,CompletedJob: 8, Skills: ["Cabinet making", "Furniture repair"] },
    { id: 3, Name: "Alice Smith", JobCategory: "Event Staff", City: "Cavite", Photo_Url: urlImage, RatePerHour: 50, Rating: 4,CompletedJob: 12, Skills: ["Event planning", "Customer service"] },
    { id: 4, Name: "Bob Johnson", JobCategory: "Aircon Technician", City: "Quezon City", Photo_Url: urlImage, RatePerHour: 80, Rating: 5.5,CompletedJob: 6, Skills: ["HVAC repair", "System installation"] },
    { id: 5, Name: "Emily Brown", JobCategory: "Lot Surveyor", City: "Ortigas", Photo_Url: urlImage, RatePerHour: 300, Rating: 3,CompletedJob: 15, Skills: ["Land measurement", "Boundary marking"] },
    { id: 6, Name: "Michael Wilson", JobCategory: "Plumber", City: "Las Pinas", Photo_Url: urlImage, RatePerHour: 1000, Rating: 4.5,CompletedJob: 18, Skills: ["Pipe repair", "Drain cleaning"] },
    { id: 7, Name: "Sarah Jones", JobCategory: "Carpenter", City: "Paranaque", Photo_Url: urlImage, RatePerHour: 500, Rating: 3.8,CompletedJob: 5, Skills: ["Woodworking", "Flooring installation"] },
    { id: 8, Name: "David Davis", JobCategory: "Event Staff", City: "Cavite", Photo_Url: urlImage, RatePerHour: 70, Rating: 4,CompletedJob: 11, Skills: ["Event coordination", "Venue setup"] },
    { id: 9, Name: "Olivia Martinez", JobCategory: "Aircon Technician", City: "Quezon City", Photo_Url: urlImage, RatePerHour: 300, Rating: 5,CompletedJob: 9, Skills: ["AC repair", "Refrigerant recharge"] },
    { id: 10, Name: "James Miller", JobCategory: "Lot Surveyor", City: "Ortigas", Photo_Url: urlImage, RatePerHour: 250, Rating: 4,CompletedJob: 7, Skills: ["Survey equipment operation", "Data analysis"] }
];

const NextArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick} className=" text-gray-700 px-2 py-1 rounded-full focus:outline-none text-2xl"><GrFormNextLink /></button>;
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick} className=" text-gray-700 px-2 py-1 rounded-full focus:outline-none text-2xl"><GrFormPreviousLink /></button>;
};

const generateStars = (rating) => {
    const stars = [];
    const filledStars = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
        if (i < filledStars) {
            stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
        } else {
            stars.push(<span key={i} className="text-gray-400">&#9733;</span>);
        }
    }
    return stars;
};

export default function TopWorkers() {
    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    const sortedWorkers = [...topWorkers].sort((a, b) => b.CompletedJob - a.CompletedJob);

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
                    <h2 className="font-semibold text-xl">Top Workers</h2>
                </div>
                <div className="flex items-center">
                    <PrevArrow onClick={handlePrevClick} />
                    <NextArrow onClick={handleNextClick} />
                    <button className="text-gray px-4 py-1 rounded-full text-sm ml-1">See More</button>
                </div>
            </div>
            <div className="text-center mt-4">
                <Slider {...settings} ref={sliderRef}>
                    {sortedWorkers.map((worker) => (
                        <div key={worker.id} className='text-center justify-center'>
                            <div className="text-center mx-2">
                            <img src={worker.Photo_Url} alt={worker.Name} className="rounded-full object-cover h-30 w-auto" />
                                <div className="flex justify-center mt-1">
                                    {generateStars(worker.Rating)}
                                </div>
                            </div>
                            <div className="my-2 mx-5">
                                <h2 className="font-semibold text-center text-lg">{worker.Name}</h2>
                                <p className="text-sm text-center">{worker.JobCategory}</p>
                                <div className="text-sm text-center mx-0">
                                    {worker.Skills.map((skill, id) => (
                                        <div key={id} className="inline-block mx-1 my-0">
                                            <span className="px-1 py-1 rounded-full text-white bg-gray-500" style={{fontSize: "8px"}}>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-md text-center font-semibold" style={{fontSize: "12px"}}>({worker.CompletedJob} jobs completed)</p>
                                <p className="text-md text-center font-semibold">Php {worker.RatePerHour}/hr</p>
                                <button className="bg-sky-500 text-white px-2 py-2 mt-2 rounded-full text-xs w-full">View Services</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
