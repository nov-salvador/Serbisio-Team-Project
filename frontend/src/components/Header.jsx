import React, { useEffect, useState } from 'react';
import logo from '../assets/serbisyo-logo.png';
import { PiDotsNineBold } from "react-icons/pi";
import { LuHeart, LuSearch, LuBell, LuUser } from "react-icons/lu";
import { NavLink, useNavigate } from 'react-router-dom';
import Loginsignup from './LoginSignup/LoginSignup';

const Header = ({ loggedUser, updateUser, updateLogin }) => {
    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        updateLogin(false)
    }
    const getUser = localStorage.getItem('user')
    const parseUser = JSON.parse(getUser)

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className=''>
            {!getUser && showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <Loginsignup updateUser={updateUser} updateLogin={updateLogin} handleCloseModal={handleCloseModal} />
                </div>
            )}
            {/* Top Header */}
            <header className="bg-sky-500 text-white py-2 px-12 font-light text-xs">
                <div className="container mx-auto flex justify-between items-center">
                    <div>Welcome {getUser ? <span className='font-bold'>{parseUser.firstname}</span> : 'Guest'} to Serbis.io</div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><NavLink to="/jobs" className="hover:text-gray-400">POST JOB</NavLink></li>
                            <li>|</li>
                            <li><NavLink to="/job-lists" className="hover:text-gray-400">LATEST JOBS</NavLink></li>
                            <li>|</li>
                            <li><NavLink to="/jobs" className="hover:text-gray-400">TRENDING JOBS</NavLink></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className="list-none">
                            <li>
                                <a
                                    href="#" className="hover:text-gray-400"> {getUser ? <button type='button' onClick={handleLogout}>Logout</button>
                                        : <button onClick={() => setShowModal(true)}>Login/Signup</button>}

                                </a>
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
                            : (<button onClick={() => setShowModal(true)}>
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
