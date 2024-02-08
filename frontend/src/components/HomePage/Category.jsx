import React, { useState } from 'react';

//Dummy
const urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJxCQC_E5Li1l5SsPu81QQZLsZsxLh-aCiBRU7aNgsThXw-VG6gFT5lvog0I4BnBDKoo&usqp=CAU";
const jobCategories = ['Accountant / Bookkeeping', 'Acupuncture', 'Auto Mechanic', 'Art Services', 'Caregiver', 'Carpenter', 'CCTV Maintenance', 'Driver', 'Electrical Services', 'Electronics Technician', 'Entertainment', 'I.T. Services', 'Graphic Artist', 'Home Cleaning', 'Laundry', 'Medical Services', 'Pest Control', 'Physical Therapy', 'Plumber', 'Rent A Car', 'Salon', 'Security', 'Spa & Massage', 'Tattoo Services', 'Travel and Tours', 'Tutor', 'Technician', 'Photography / Videography', 'Welder'];

export default function Category() {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const allCategories = showAll ? jobCategories : jobCategories.slice(0, 6);

    return (
        <div className="w-full flex justify-center">
            <div className="">
                <div className="flex flex-wrap w-fit">
                    {allCategories.map((category, index) => (
                        <div key={index} className='m-2 p-4 text-center justify-center max-w-28'>
                            <img src={urlImage} className="rounded-xl object-cover" />
                            <div className="my-2 m-auto text-wrap">
                                <h2 className="font-semibold text-sm text-wrap">{category}</h2>
                            </div>
                        </div>
                    ))}
                    {!showAll && (
                        <div onClick={toggleShowAll} className='m-2 p-4 text-center justify-center max-w-28 cursor-pointer'>
                            <img src='https://cdn-icons-png.flaticon.com/512/5579/5579229.png' className="rounded-xl object-cover" />
                            <button className="text-gray-600 hover:text-gray-900 mt-2 self-end">See All Categories</button>
                        </div>
                    )}
                    {showAll && (
                        <div onClick={toggleShowAll} className='m-2 p-4 text-center justify-center max-w-28 cursor-pointer'>
                            <img src='https://cdn-icons-png.flaticon.com/256/166/166425.png' className="rounded-xl object-cover" />
                            <button className="text-gray-600 hover:text-gray-900 mt-2 self-end">See less</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
