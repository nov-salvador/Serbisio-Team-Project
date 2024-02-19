import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SliderComponent = React.forwardRef((props, ref) => (
    <Slider {...props} ref={ref} />
));

const NextArrow = ({ onClick }) => {
    return <button onClick={onClick} className="text-gray-700 px-2 py-1 rounded-full focus:outline-none text-2xl"><GrFormNextLink /></button>;
};

const PrevArrow = ({ onClick }) => {
    return <button onClick={onClick} className="text-gray-700 px-2 py-1 rounded-full focus:outline-none text-2xl"><GrFormPreviousLink /></button>;
};

const JobCard = ({ job }) => (
    <div className='text-center justify-center'>
        <div className="text-center mx-2">
            <img src={job.photoUrl} alt={job.jobTitle} className="rounded-xl object-cover h-40 w-full" />
        </div>
        <div className="my-2 mx-5">
            <p className="text-sm text-center">{job._id}</p>
            <h2 className="font-semibold text-center text-xl">{job.jobTitle}</h2>
            <p className="text-sm text-center">{job.location}</p>
            <p className="text-md text-center font-semibold">{job.budgetPerHour} per hour</p>
            <p className="text-sm text-center text-gray-600 font-semibold">{`Est ${job.duration} ${job.duration > 1 ? "days" : "day"}`}</p>
            <button className="bg-sky-500 text-white px-2 py-2 mt-2 rounded-full text-xs w-full">View Details</button>
        </div>
    </div>
);

const renderJobSection = (jobs, sliderRef) => (
    <SliderComponent {...settings} ref={sliderRef}>
        {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
        ))}
    </SliderComponent>
);
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
};

export default function Jobs() {
    const shortTermSliderRef = useRef(null);
    const longTermSliderRef = useRef(null);
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
      axios.get('http://localhost:3000/getJobs')
      .then(jobs => setJobs(jobs.data))
      .catch(err => console.log(err))
    }, [])

    const handleNextClick = (ref) => {
        ref.current.slickNext();
    };

    const handlePrevClick = (ref) => {
        ref.current.slickPrev();
    };


    const handleViewServicesClick = (job) => {
        setSelectedJob(job);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };
    

    const longTermJobs = jobs.filter(job => job.duration > 90);
    const shortTermJobs = jobs.filter(job => job.duration <= 90);

    return (
        <div className="container mx-auto mb-10">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="font-semibold text-xl">Short Term Jobs (less than 3 Months)</h2>
                    </div>
                    <div className="flex items-center">
                        <PrevArrow onClick={() => handlePrevClick(shortTermSliderRef)} />
                        <NextArrow onClick={() => handleNextClick(shortTermSliderRef)} />
                        <NavLink to="/job-lists?category=&location=&duration=3+months" className="text-gray px-4 py-1 rounded-full text-sm ml-1">See More</NavLink>
                    </div>
                </div>
                {renderJobSection(shortTermJobs, shortTermSliderRef)}
                <div className="flex justify-between items-center mb-4 my-10">
                    <div>
                        <h2 className="font-semibold text-xl">Long Term Jobs (more than 3 Months)</h2>
                    </div>
                    <div className="flex items-center">
                        <PrevArrow onClick={() => handlePrevClick(longTermSliderRef)} />
                        <NextArrow onClick={() => handleNextClick(longTermSliderRef)} />
                        <NavLink to="/job-lists?category=&location=&duration=3%2B+months" className="text-gray px-4 py-1 rounded-full text-sm ml-1">See More</NavLink>
                    </div>
                </div>
                {renderJobSection(longTermJobs, longTermSliderRef)}
            </div>
    );
}
