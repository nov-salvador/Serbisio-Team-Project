import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Category() {
    const [showAll, setShowAll] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/getCategory')
            .then(response => setCategories(response.data))
            .catch(error => console.log(error));
    }, []);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const allCategories = showAll ? categories : categories.slice(0, 6);

    return (
        <div className="w-full flex justify-center">
            <div className="">
                <div className="flex flex-wrap w-fit">
                    {allCategories.map((category, index) => (
                        <Link to={`/job-lists?category=${category.name}`} key={index} className='m-2 p-4 text-center justify-center max-w-28'>
                            <img src={category.photoUrl} className="rounded-xl object-cover" alt={category.name} />
                            <div className="my-2 m-auto text-wrap">
                                <h2 className="font-semibold text-sm text-wrap">{category.name}</h2>
                            </div>
                        </Link>
                    ))}
                    {!showAll ? (
                        <div onClick={toggleShowAll} className='m-2 p-4 text-center justify-center max-w-28 cursor-pointer'>
                            <img src='https://cdn-icons-png.flaticon.com/512/5579/5579229.png' className="rounded-xl object-cover" alt="See All Categories" />
                            <button className="text-gray-600 hover:text-gray-900 mt-2 self-end">See All Categories</button>
                        </div>
                    ) : (
                        <div onClick={toggleShowAll} className='m-2 p-4 text-center justify-center max-w-28 cursor-pointer'>
                            <img src='https://cdn-icons-png.flaticon.com/256/166/166425.png' className="rounded-xl object-cover" alt="See Less" />
                            <button className="text-gray-600 hover:text-gray-900 mt-2 self-end">See Less</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
