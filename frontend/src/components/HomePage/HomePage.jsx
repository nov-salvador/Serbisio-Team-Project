import React, { useState } from 'react';
import Jobs from '../JobListing/Jobs';
import Category from './Category';
import TopBanner from './TopBanner';
import MidBanner from './MidBanner';
import TopWorkers from './TopWorkers';
import TopClients from './TopEmployers';
import NewsLetter from '../NewsLetter';
import Loginsignup from '../LoginSignup/LoginSignup';
import { useAuth } from '../../context/AuthContext';

export default function HomePage() {
    const [showModal, setShowModal] = useState(true);
    const {isLogged} = useAuth();

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='z-0'>
            {/* {!isLogged && showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <Loginsignup handleCloseModal={handleCloseModal} />
                </div>
            )} */}
            <div className="w-11/12 mx-auto">
                <TopBanner />
            </div>
            <div className="max-w-5xl mx-auto">
                <Category />
            </div>
            <div className="max-w-5xl mx-auto">
                <Jobs />
            </div>
            <div className="max-w-5xl mx-auto">
                <MidBanner />
            </div>
            <div className="max-w-5xl mx-auto">
                <TopWorkers />
            </div>
            <div className="max-w-5xl mx-auto">
                <TopClients />
            </div>
            <div className="max-w-5xl mx-auto">
                <NewsLetter />
            </div>
        </div>
    );
}
