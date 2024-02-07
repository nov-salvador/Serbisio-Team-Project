import React from 'react';

const urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJxCQC_E5Li1l5SsPu81QQZLsZsxLh-aCiBRU7aNgsThXw-VG6gFT5lvog0I4BnBDKoo&usqp=CAU";
const jobCategories = ['Plumber', 'Carpenter', 'Event Staff', 'Aircon Technician', 'Lot Surveyor', 'Lot Surveyor', 'Lot Surveyor', 'See All Categories'];

export default function Category() {
    return (
        <div className="w-full flex justify-center">
            <div className="">
                <div className="flex flex-wrap w-fit">
                    {jobCategories.map((category, index) => (
                        <div key={index} className='m-2 p-4 text-center justify-center max-w-28'>
                            <img src={urlImage} className="rounded-xl object-cover" />
                            <div className="my-2 m-auto text-wrap">
                                <h2 className="font-semibold text-sm text-wrap">{category}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
