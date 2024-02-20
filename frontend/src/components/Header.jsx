import React, { useEffect, useState } from 'react';
import logo from '../assets/serbisyo-logo.png';
import { PiDotsNineBold } from "react-icons/pi";
import { LuHeart, LuSearch, LuBell, LuUser } from "react-icons/lu";
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CreateJob from './JobListing/CreateJob';

const Header = () => {
    const { handleLogout, handleCloseModal } = useAuth();
    const getUser = localStorage.getItem('user')
    const parseUser = JSON.parse(getUser)
    const { isLogged, handleOpenModal } = useAuth();

    return (
        <div className='z-50'>
            {/* Top Header */}
            <header className="bg-sky-500 text-white py-2 px-12 font-light text-xs">
                <div className="container mx-auto flex justify-between items-center">
                    <div>Welcome {getUser ? parseUser.firstname : 'Guest'} to Serbis.io</div>
                    <nav>
                        <ul className="flex space-x-4">
                            {isLogged && (
                                <>
                                    <li><CreateJob buttonText="Post New Job" /></li>
                                    <li>|</li>
                                </>
                            )}
                            <li><NavLink to="/job-lists" className="hover:text-gray-400">Latest Jobs</NavLink></li>
                            <li>|</li>
                            <li><NavLink to="/blog" className="hover:text-gray-400">Blog Posts</NavLink></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className="list-none">
                            <li>
                                <button className="hover:text-gray-400" type='button' onClick={() => { handleLogout(); handleCloseModal() }}>{getUser ? "Logout" : 'LOGIN | SIGNUP'}</button>
                            </li>
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
                            <li><NavLink to="/" activeclassname="text-gray-400" className="hover:text-gray-400">Home</NavLink></li>
                            <li>|</li>
                            <li><NavLink to="/category" activeclassname="text-gray-400" className="hover:text-gray-400">Category</NavLink></li>
                            <li>|</li>
                            <li><NavLink to="/top-employers" activeclassname="text-gray-400" className="hover:text-gray-400">Employer</NavLink></li>
                            <li>|</li>
                            <li><NavLink to="/top-workers" activeclassname="text-gray-400" className="hover:text-gray-400">Workers</NavLink></li>
                        </ul>
                    </div>

                    {/* Logo Centered */}
                    <div className="flex items-center space-x-4 flex-grow">
                        <NavLink to="/">
                            <img src={logo} alt="Logo" className="h-8" style={{ width: "50px", height: "auto" }} />
                        </NavLink>
                    </div>

                    {/* User Icons */}
                    <div className="flex space-x-4 flex-grow justify-end">
                        {getUser ?
                            (<NavLink to={`/${parseUser._id}`}>
                                <LuUser className="text-gray-900 hover:text-gray-300 cursor-pointer" />
                            </NavLink>)
                            : (<button onClick={() => { handleLogout(); handleCloseModal() }}>
                                <LuUser className="text-gray-900 hover:text-gray-300 cursor-pointer" />
                            </button>)}
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
