import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";

export default function ViewJobDetails({ job, onClose }) {
    const renderProperties = () => {
        return Object.entries(job).map(([key, value]) => {
            return (
                <p key={key} className="text-gray-700">
                    {key}: {typeof value === 'object' ? JSON.stringify(value) : value}
                </p>
            );
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="popup-profile bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full overflow-y-auto relative">
                <IoMdCloseCircle onClick={onClose} className="text-red-500 text-2xl cursor-pointer absolute top-4 right-4" />
                <div className="border-b px-4 pb-6">
                    {/* <div className="text-center my-4">
                        <img className="h-32 w-32 rounded-full border-4 border-gray mx-auto my-4"
                            src={user.userPicture.url} alt="" />
                        <div className="">
                            <h3 className="font-bold text-2xl text-gray-800 mb-1">{user.firstname} {user.lastname}</h3>
                            <div className="inline-flex text-gray-700 items-center">
                                <FaLocationDot />&nbsp;
                                {user.userLocation}
                            </div>
                        </div>
                    </div>
                    <div className="flex px-2 mx-28 text-center">
                        <NavLink to={`/${user._id}`} className="flex-1 bg-sky-500 text-center text-white px-4 py-2 rounded-full text-sm">View Profile</NavLink>
                    </div> */}
                </div>
                <div className="px-4 py-4">
                    <div className="flex gap-2 text-left text-gray-500 mb-4">
                        <div>
                            <p>something here</p>
                            <div>{renderProperties()}</div>
                        </div>
                            
                    </div>
                </div>
            </div>
        </div>
    );
}