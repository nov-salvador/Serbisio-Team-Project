import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaLinkedin, FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";

export default function UserProfileLink() {
    const [user, setUser] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
        if (!userId) {
            return;
        }

        axios.get(`http://localhost:3000/getUser/${userId}`)
            .then(response => {
                console.log('User data:', response.data);
                setUser(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [userId]);

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

    return (
        <div className="bg-gray-100">
            {user && (
                <React.Fragment>
                    <div className="bg-gray-100">
                        <div className="container mx-auto py-8">
                            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                                <div className="col-span-4 sm:col-span-3">
                                    <div className="bg-white shadow rounded-lg p-6">
                                        <div className="flex flex-col items-center">
                                            <img src={user.userPicture.url} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" alt="User Avatar" />
                                            <h1 className="text-xl font-bold">{user.firstname} {user.lastname}</h1>
                                            <p className="text-gray-700">{user.email}</p>
                                            <p className="text-gray-700">Phone: {user.phoneNumber}</p>
                                            <p className="text-gray-700">Location: {user.userLocation}</p>
                                            <p className="text-md font-bold">Php {user.ratePerHour}/hr</p>
                                            <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                                <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                                <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
                                            </div>
                                        </div>
                                        <hr className="my-6 border-t border-gray-300" />
                                        <div className="flex flex-col">
                                            <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Ratings</span>
                                            <ul className="grid grid-cols-1 gap-x-4 text-xs">
                                                <li className="mb-2 flex items-center">
                                                    <span className="text-gray-700 font-semibold">Communication:</span>
                                                    <span className="ml-auto">{user.ratings.communication}</span>
                                                    <span>{generateStars(user.ratings.communication)}</span>
                                                </li>
                                                <li className="mb-2 flex items-center">
                                                    <span className="text-gray-700 font-semibold">Punctuality:</span>
                                                    <span className="ml-auto">{user.ratings.punctuality}</span>
                                                    <span>{generateStars(user.ratings.punctuality)}</span>
                                                </li>
                                                <li className="mb-2 flex items-center">
                                                    <span className="text-gray-700 font-semibold">Quality of Work:</span>
                                                    <span className="ml-auto">{user.ratings.qualityOfWork}</span>
                                                    <span>{generateStars(user.ratings.qualityOfWork)}</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <hr className="my-6 border-t border-gray-300" />
                                        <div className="flex flex-col">
                                            <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                                            <ul>
                                                {user.services.map((service, index) => (
                                                    <li key={index} className="mb-2">{service}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <hr className="my-6 border-t border-gray-300" />
                                        <div className="flex flex-col">
                                            <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Jobs Summary</span>
                                            <ul>
                                                <li className="mb-2">{user.createdJobs} Jobs Created</li>
                                                <li className="mb-2">{user.completedJobs} Jobs Completed</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-4 sm:col-span-9">
                                    <div className="bg-white shadow rounded-lg p-6">
                                        <h2 className="text-xl font-bold mb-4">About Me</h2>
                                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                                            vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                            suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus
                                            et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                                            luctus risus rhoncus id.
                                        </p>

                                        <h3 className="font-semibold text-center mt-3 -mb-2">
                                            Find me on
                                        </h3>
                                        <div className="flex justify-center items-center gap-6 my-6">
                                            <a className="text-gray-700 hover:text-orange-600" aria-label="LinkedIn" href=""
                                                target="_blank">
                                                <FaLinkedin />
                                            </a>
                                            <a className="text-gray-700 hover:text-orange-600" aria-label="YouTube" href=""
                                                target="_blank">
                                                <FaYoutube />
                                            </a>
                                            <a className="text-gray-700 hover:text-orange-600" aria-label="Facebook" href=""
                                                target="_blank">
                                                <FaFacebook />
                                            </a>
                                            <a className="text-gray-700 hover:text-orange-600" aria-label="Instagram" href=""
                                                target="_blank">
                                                <FaInstagram />
                                            </a>
                                            <a className="text-gray-700 hover:text-orange-600" aria-label="Twitter" href=""
                                                target="_blank">
                                                <FaTwitter />
                                            </a>
                                        </div>

                                        <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                                        <div className="mb-6">
                                            <div className="flex justify-between flex-wrap gap-2 w-full">
                                                <span className="text-gray-700 font-bold">Web Developer</span>
                                                <p>
                                                    <span className="text-gray-70o">at ABC Company</span>
                                                    <span className="text-gray-700">2017 - 2019</span>
                                                </p>
                                            </div>
                                            <p className="mt-2">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                                tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                                suscipit.
                                            </p>
                                        </div>
                                        <div className="mb-6">
                                            <div className="flex justify-between flex-wrap gap-2 w-full">
                                                <span className="text-gray-700 font-bold">Web Developer</span>
                                                <p>
                                                    <span className="text-gray-70o">at ABC Company</span>
                                                    <span className="text-gray-700">2017 - 2019</span>
                                                </p>
                                            </div>
                                            <p className="mt-2">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                                tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                                suscipit.
                                            </p>
                                        </div>
                                        <div className="mb-6">
                                            <div className="flex justify-between flex-wrap gap-2 w-full">
                                                <span className="text-gray-700 font-bold">Web Developer</span>
                                                <p>
                                                    <span className="text-gray-70o">at ABC Company</span>
                                                    <span className="text-gray-700">2017 - 2019</span>
                                                </p>
                                            </div>
                                            <p className="mt-2">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                                tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                                suscipit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}