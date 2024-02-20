import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import axios from 'axios';
import UserPopup from '../UserProfile/UserPopup';
import { useAuth } from '../../context/AuthContext';


const NextArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick} className="text-gray-700 px-2 py-1 rounded-full focus:outline-none text-2xl"><GrFormNextLink /></button>;
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick} className="text-gray-700 px-2 py-1 rounded-full focus:outline-none text-2xl"><GrFormPreviousLink /></button>;
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

export default function TopUsers() {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const {isLogged, handleOpenModal} = useAuth(); 

    useEffect(() => {
        axios.get('http://localhost:3000/getUsers')
            .then(response => setUsers(response.data))
            .catch(err => console.log(err))
    }, []);

    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    const sortedUsers = users.filter(user => user.ratings && typeof user.ratings.qualityOfWork === 'number')
        .sort((a, b) => b.ratings.qualityOfWork - a.ratings.qualityOfWork);

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };

    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };

    const handleViewServicesClick = (user) => {
        setSelectedUser(user);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    function verifyLog(){
        if(!isLogged){
            handleOpenModal()
        }
    }

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
                    {sortedUsers
                    .map((user) => (
                        <div key={user._id} className='text-center justify-center'>
                            <div className="text-center mx-2">
                                <img src={user.userPicture.url} className="rounded-full object-cover h-30 w-auto" />
                                <div className="flex justify-center mt-1">
                                    {generateStars(user.ratings.qualityOfWork)}<span className='text-xs my-auto'>&nbsp;{user.ratings.qualityOfWork}</span>
                                </div>
                            </div>
                            <div className="my-2 mx-5">
                                <p className="text-md text-center font-semibold" style={{ fontSize: "10px" }}>{user._id}</p>
                                <h2 className="font-semibold text-center text-lg">{user.firstname} {user.lastname}</h2>
                                <p className="text-md text-center font-semibold" style={{ fontSize: "12px" }}>{user.userLocation}</p>
                                <div className="text-sm text-center mx-0">
                                    {user.services.map((services, id) => (
                                        <div key={id} className="inline-block mx-1 my-0">
                                            <span className="px-2 py-1 rounded-full text-white bg-green-600" style={{ fontSize: "8px" }}>{services}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-md text-center font-semibold" style={{ fontSize: "12px" }}>({user.completedJobs} jobs completed)</p>
                                <p className="text-md text-center font-semibold">Php {user.ratePerHour}/hr</p>
                                <button 
                                    onClick={() => {
                                        if(!isLogged){
                                            verifyLog()
                                        }else{
                                            handleViewServicesClick(user)
                                        }
                                    }} 
                                    className="bg-sky-500 text-white px-2 py-2 mt-2 rounded-full text-xs w-full"
                                >
                                    View Services
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {modalVisible && selectedUser && (
                <UserPopup user={selectedUser} onClose={handleCloseModal} />
            )}
        </div>
    );
}
