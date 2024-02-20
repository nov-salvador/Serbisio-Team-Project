import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-10 text-xs font-thin mt-10">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4">
                        <div className="font-semibold">CUSTOMER SERVICE</div>
                        <ul className="mt-2">
                            <li><a href="/help-center" className="text-white hover:text-gray-400" target="_blank">Help Centre</a></li>
                            <li><a href="/care" className="text-white hover:text-gray-400" target="_blank">Serbis.io Cares PH</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <div className="font-semibold">ABOUT SERBIS.IO</div>
                        <ul className="mt-2">
                        <li><NavLink to="https://nlxndrrrr.github.io/Personal-Project/" className="text-white hover:text-gray-400" target="_blank">About Us</NavLink></li>
                        <li><NavLink to="/blog" className="text-white hover:text-gray-400" target="_blank">Serbis.io Blog</NavLink></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <div className="font-semibold">PAYMENT</div>
                        <ul className="mt-2">
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <div className="font-semibold">FOLLOW US</div>
                        <ul className="mt-2">
                            <li><a href="https://facebook.com/SerbisIO" className="text-white hover:text-gray-400" target="_blank"><span className="xTjlXx">Facebook</span></a></li>
                            <li><a href="https://instagram.com/Serbis_IO" className="text-white hover:text-gray-400" target="_blank"><span className="xTjlXx">Instagram</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-4">
                <div className="text-center">
                    <p>&copy; 2024 Serbis.io. All Rights Reserved .</p>
                   
                </div>
            </div>
        </footer>
    );
}
