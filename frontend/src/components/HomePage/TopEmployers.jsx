import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import axios from 'axios';
import UserPopup from './UserPopup';


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

export default function TopUser() {

    const [user, setUser] = useState([]);
    const [selectedEmployer, setSelectedEmployer] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/getUsers')
            .then(response => setUser(response.data))
            .catch(err => console.log(err))
    }, []);
    
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

    const sortedUser = user.filter(user => user.ratings && typeof user.ratings.qualityOfWork === 'number')
    .sort((a, b) => b.ratings.qualityOfWork - a.ratings.qualityOfWork);

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };

    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };

    const handleViewServicesClick = (user) => {
        setSelectedEmployer(user);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="container mx-auto mb-10">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="font-semibold text-xl">Top Employers</h2>
                </div>
                <div className="flex items-center">
                    <PrevArrow onClick={handlePrevClick} />
                    <NextArrow onClick={handleNextClick} />
                    <button className="text-gray px-4 py-1 rounded-full text-sm ml-1">See More</button>
                </div>
            </div>
            <div className="text-center mt-4">
                <Slider {...settings} ref={sliderRef}>
                    {sortedUser
                    .filter(user => user.isEmployer === true)
                    .map((user) => (
                        <div key={user.id} className='text-center justify-center'>
                            <div className="text-center mx-2">
                                <img src={user.userPicture.url} className="rounded-full object-cover h-30 w-30" />
                                <div className="flex justify-center mt-1">
                                    {generateStars(user.ratings.qualityOfWork)}<span className='text-xs my-auto'>&nbsp;{user.ratings.qualityOfWork}</span>
                                </div>
                            </div>
                            <div className="my-2 mx-5">
                               <h2 className="font-semibold text-center text-lg">{user.firstname} {user.lastname}</h2>
                                <p className="text-md text-center font-semibold" style={{ fontSize: "12px" }}>Php ? Total Paid</p>
                                <p className="text-md text-center font-semibold" style={{ fontSize: "12px" }}> {user.createdJobs} jobs created</p>
                                <button onClick={() => handleViewServicesClick(user)} className="bg-sky-500 text-white px-2 py-2 mt-2 rounded-full text-xs w-full">View Job Offers</button>
                            </div>
                        </div>
                    ))}
                </Slider>
                {modalVisible && selectedEmployer && (
                <UserPopup user={selectedEmployer} onClose={handleCloseModal} />
            )}
            </div>
        </div>
    );
}
