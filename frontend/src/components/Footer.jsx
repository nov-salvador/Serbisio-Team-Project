import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { SiBitcoincash } from "react-icons/si";
import { SiThurgauerkantonalbank } from "react-icons/si";


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
                        <li><NavLink to="/about" className="text-white hover:text-gray-400" target="_blank">About Us</NavLink></li>
                        <li><NavLink to="/blog" className="text-white hover:text-gray-400" target="_blank">Serbis.io Blog</NavLink></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <div className="font-semibold">PAYMENT</div>
                        <ul className="mt-2 flex">
                            <li className='mx-1'><FaCcMastercard /></li>
                            <li className='mx-1'><FaCcVisa /></li>
                            <li className='mx-1'><BsBank /></li>
                            <li className='mx-1'><SiBitcoincash /></li>
                            <li className='mx-1'><SiThurgauerkantonalbank />
</li>
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
