import React, { useState } from 'react'
import Jobs from '../JobListing/Jobs';
import Category from './Category';
import TopBanner from './TopBanner';
import MidBanner from './MidBanner';
import TopWorkers from './TopWorkers';
import TopClients from './TopEmployers';
import NewsLetter from '../NewsLetter';
import Loginsignup from '../LoginSignup/LoginSignup';


export default function HomePage({login, updateUser, updateLogin}) {
    
    return (
        <div className=''>
            {!login && <Loginsignup updateUser={updateUser} updateLogin={updateLogin}/>}
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
