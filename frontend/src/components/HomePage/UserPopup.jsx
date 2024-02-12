import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

export default function UserPopup({ user, onClose }) {
    const renderProperties = () => {
        return Object.entries(user).map(([key, value]) => {
            return (
                <p key={key} className="text-gray-700">
                    {key}: {typeof value === 'object' ? JSON.stringify(value) : value}
                </p>
            );
        });
    };

    return (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full max-h-full overflow-y-auto">
        <div className="px-4 py-5 sm:px-6 relative">
            <IoMdCloseCircle onClick={onClose} className="text-red-500 text-2xl cursor-pointer absolute top-4 right-4" />
            <h3 className="text-lg leading-6 font-medium text-gray-900">
                {/* {user.firstname} {user.lastname} */}
            </h3>
            <div className="mt-4">
                {renderProperties()}
                {renderProperties()}
            </div>
        </div>
    </div>
</div>



    );
};
