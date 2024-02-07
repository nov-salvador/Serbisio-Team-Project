import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

const urlImage = "https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Employee-512.png";

//Dummy
const topEmployers = [
    { id: 1, FirstName: "John", LastName: "Smith", City: "New York", Photo_Url: urlImage, CreatedJob: 10, Rating: 4.5, TotalPaid: 5000 },
    { id: 2, FirstName: "Emily", LastName: "Johnson", City: "Los Angeles", Photo_Url: urlImage, CreatedJob: 8, Rating: 4.2, TotalPaid: 4200 },
    { id: 3, FirstName: "Michael", LastName: "Williams", City: "Chicago", Photo_Url: urlImage, CreatedJob: 12, Rating: 4.8, TotalPaid: 7200 },
    { id: 4, FirstName: "Emma", LastName: "Jones", City: "Houston", Photo_Url: urlImage, CreatedJob: 6, Rating: 3.9, TotalPaid: 3900 },
    { id: 5, FirstName: "Sophia", LastName: "Brown", City: "Phoenix", Photo_Url: urlImage, CreatedJob: 15, Rating: 4.7, TotalPaid: 8700 },
    { id: 6, FirstName: "James", LastName: "Davis", City: "Philadelphia", Photo_Url: urlImage, CreatedJob: 18, Rating: 4.9, TotalPaid: 11000 },
    { id: 7, FirstName: "Olivia", LastName: "Miller", City: "San Antonio", Photo_Url: urlImage, CreatedJob: 5, Rating: 3.5, TotalPaid: 3500 },
    { id: 8, FirstName: "William", LastName: "Wilson", City: "San Diego", Photo_Url: urlImage, CreatedJob: 11, Rating: 4.6, TotalPaid: 6400 },
    { id: 9, FirstName: "Ava", LastName: "Martinez", City: "Dallas", Photo_Url: urlImage, CreatedJob: 9, Rating: 4.4, TotalPaid: 5600 },
    { id: 10, FirstName: "Alexander", LastName: "Anderson", City: "San Jose", Photo_Url: urlImage, CreatedJob: 7, Rating: 4.1, TotalPaid: 4700 }
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

export default function TopEmployers() {
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

    const sortedEmployers = [...topEmployers].sort((a, b) => b.CreatedJob - a.CreatedJob);

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
                    <h2 className="font-semibold text-xl">Top Employer</h2>
                </div>
                <div className="flex items-center">
                    <PrevArrow onClick={handlePrevClick} />
                    <NextArrow onClick={handleNextClick} />
                    <button className="text-gray px-4 py-1 rounded-full text-sm ml-1">See More</button>
                </div>
            </div>
            <div className="text-center mt-4">
                <Slider {...settings} ref={sliderRef}>
                    {sortedEmployers.map((employers) => (
                        <div key={employers.id} className='text-center justify-center'>
                            <div className="text-center mx-2">
                                <img src={employers.Photo_Url} alt={employers.Name} className="rounded-full object-cover h-30 w-30" />
                                <div className="flex justify-center mt-1">
                                    {generateStars(employers.Rating)}
                                </div>
                            </div>
                            <div className="my-2 mx-5">
                                <h2 className="font-semibold text-center text-lg">{employers.FirstName} {employers.LastName.slice(0,1)}.</h2>
                                <p className="text-md text-center font-semibold" style={{ fontSize: "12px" }}>Php {employers.TotalPaid} Total Paid</p>
                                <p className="text-md text-center font-semibold" style={{ fontSize: "12px" }}>{employers.CreatedJob} jobs created</p>
                                <button className="bg-sky-500 text-white px-2 py-2 mt-2 rounded-full text-xs w-full">View Job Offers</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
