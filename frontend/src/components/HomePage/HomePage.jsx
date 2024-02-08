import React from 'react'
import Jobs from './Jobs';
import Category from './Category';
import TopBanner from './TopBanner';
import MidBanner from './MidBanner';
import TopWorkers from './TopWorkers';
import TopClients from './TopEmployers';
import NewsLetter from '../NewsLetter';

export default function HomePage() {
    return (
        <div className=''>
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
