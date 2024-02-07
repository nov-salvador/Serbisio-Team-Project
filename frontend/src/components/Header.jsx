import React from 'react';
import logo from '../assets/serbisyo-logo.png';
import { PiDotsNineBold } from "react-icons/pi";
import { LuHeart, LuSearch, LuBell, LuUser } from "react-icons/lu";

const loginUser = 'Guest'

const Header = () => {
    return (
        <div className=''>
            {/* Top Header */}
            <header className="bg-sky-500 text-white py-2 px-12 font-light text-xs">
                <div className="container mx-auto flex justify-between items-center">
                    <div>Welcome {loginUser} to Serbis.io</div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-gray-400">POST JOB</a></li>
                            <li>|</li>
                            <li><a href="#" className="hover:text-gray-400">LATEST JOBS</a></li>
                            <li>|</li>
                            <li><a href="#" className="hover:text-gray-400">TRENDING JOBS</a></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-gray-400">Contact: +63 XXX XXX XXXX</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Main Header */}
            <header className="bg-gray-100 text-black py-4 px-12 font-normal">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo and Navigation */}
                    <div className="flex items-center space-x-4 flex-grow">
                        <PiDotsNineBold className="text-gray-900 hover:text-gray-300 cursor-pointer text-2xl" />
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-gray-400">Home</a></li>
                            <li>|</li>
                            <li><a href="#" className="hover:text-gray-400">Category</a></li>
                            <li>|</li>
                            <li><a href="#" className="hover:text-gray-400">Clients</a></li>
                            <li>|</li>
                            <li><a href="#" className="hover:text-gray-400">Workers</a></li>
                        </ul>
                    </div>

                    {/* Logo Centered */}
                    <div className="flex items-center space-x-4 flex-grow">
                        <img src={logo} alt="Logo" className="h-8" style={{width: "50px", height: "auto"}} />
                    </div>

                    {/* User Icons */}
                    <div className="flex space-x-4 flex-grow justify-end">
                        <LuUser className="text-gray-900 hover:text-gray-300 cursor-pointer" />
                        <LuSearch className="text-gray-900 hover:text-gray-300 cursor-pointer" />
                        <LuHeart className="text-gray-900 hover:text-gray-300 cursor-pointer" />
                        <LuBell className="text-gray-900 hover:text-gray-300 cursor-pointer" />
                    </div>


                </div>
            </header>
        </div>
    );
}

export default Header;
