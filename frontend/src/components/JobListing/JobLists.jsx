import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';

const JobListTable = ({ filteredJobs }) => {
    const formatDate = (postedDate) => {
        const formattedDate = new Date(postedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
        const formattedTime = new Date(postedDate).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
        });
        return `${formattedDate} ${formattedTime}`;
    };

    return (
        <table className="w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        No.
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date Posted
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Posted by
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Job Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Budget
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {filteredJobs.map((job, index) => (
                    <tr key={job.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{index + 1}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{formatDate(job.postedDate)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={job.photoUrl} alt="" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{job.postedBy}</div>
                                    <div className="text-sm text-gray-500">{job.location}</div>
                                    <div className="text-sm text-gray-500">Email</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-wrap">
                            <div className="text-sm text-gray-900">{job.jobTitle}</div>
                            <div className="text-xs text-gray-500">{job.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-wrap">
                            <div className="text-sm text-gray-900">Php {job.budgetPerHour} /hour</div>
                            <div className="text-xs text-gray-500">Duration: {job.duration} days</div>
                        </td>
                        <td className="px-6 py-4 whitespace-wrap">
                            <div className="text-sm text-gray-900">{job.category}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-wrap">
                            <div className="text-sm text-gray-900">{job.status}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Details</a>
                            <a href="#" className="ml-2 text-red-600 hover:text-red-900">Apply</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const JobLists = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');
    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:3000/getJobs')
            .then(response => {
                const uniqueCategories = [...new Set(response.data.map(job => job.category))];
                const uniqueLocations = [...new Set(response.data.map(job => job.location))];
                setJobs(response.data);
                setFilteredJobs(response.data);
                setCategories(uniqueCategories);
                setLocations(uniqueLocations);
    
                const searchParams = new URLSearchParams(location.search);
                const categoryParam = searchParams.get('category');
                if (categoryParam) {
                    setSelectedCategory(categoryParam);
                    filterJobs(categoryParam, selectedLocation, selectedDuration);
                } else {
                    handleSearch();
                }
            })
            .catch(error => {
                console.error('Error fetching jobs:', error);
            });
    }, []);

    useEffect(()=>{
        handleSearch();
    })
    
    useEffect(() => {
        if (location.pathname === '/job-lists') {
            handleSearch();
        }
    }, [location.pathname]);
    

    // useEffect(() => {
    //     filterJobs(selectedCategory, selectedLocation, selectedDuration);
    //     const params = new URLSearchParams();
    //     params.set('category', selectedCategory);
    //     params.set('location', selectedLocation);
    //     params.set('duration', selectedDuration);
    //     navigate(`/job-lists?${params.toString()}`);
    // }, [selectedCategory, selectedLocation, selectedDuration]);


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        filterJobs(event.target.value, selectedLocation, selectedDuration);
    };

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
        filterJobs(selectedCategory, event.target.value, selectedDuration);
    };

    const handleDurationChange = (event) => {
        setSelectedDuration(event.target.value);
        filterJobs(selectedCategory, selectedLocation, event.target.value);
    };

    const filterJobs = async (category, location, duration) => {
        return new Promise((resolve, reject) => {
            const filtered = jobs.filter(job => {
                return (category === '' || job.category === category) &&
                    (location === '' || job.location === location) &&
                    (duration === '' || checkDuration(job.duration, duration));
            });
            setFilteredJobs(filtered);
            resolve(filtered);
        });
    };

    const handleSearch = () => {
        filterJobs(selectedCategory, selectedLocation, selectedDuration);
    };

    const checkDuration = (jobDuration, selectedDuration) => {
        const durationInDays = convertToDays(jobDuration);
        switch (selectedDuration) {
            case '1 week':
                return durationInDays <= 7;
            case '1 month':
                return durationInDays <= 30;
            case '3 months':
                return durationInDays <= 90;
            case '3-6 months':
                return durationInDays >= 90 && durationInDays <= 180; 
            case '6-12 months':
                return durationInDays <= 365 && durationInDays > 180;
            case '1 year and up':
                return durationInDays > 365;
            default:
                return true;
        }
    };

    const convertToDays = (duration) => {
        return duration;
    };

    return (
        <div className="mx-auto flex flex-col justify-center my-10">
            <div className="flex mb-10">
                <div className="mx-4">
                    <label htmlFor="category" className="mr-2">Category:</label>
                    <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="border rounded-md px-2 py-1">
                        <option value="">All</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className="mx-4">
                    <label htmlFor="location" className="mr-2">Location:</label>
                    <select id="location" value={selectedLocation} onChange={handleLocationChange} className="border rounded-md px-2 py-1">
                        <option value="">All</option>
                        {locations.map(location => (
                            <option key={location} value={location}>{location}</option>
                        ))}
                    </select>
                </div>
                <div className="mx-4">
                    <label htmlFor="duration" className="mr-2">Duration:</label>
                    <select id="duration" value={selectedDuration} onChange={handleDurationChange} className="border rounded-md px-2 py-1">
                        <option value="">All</option>
                        <option value="1 week">less than a week</option>
                        <option value="1 month">less than a month</option>
                        <option value="3 months">less than 3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6-12 months">6-12 months</option>
                        <option value="1 year and up">more than a year</option>
                    </select>
                </div>
                <div className="mx-4">
                <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Search
                </button>
            </div>
            </div>
            <JobListTable filteredJobs={filteredJobs} />
        </div>
    );
};

export default JobLists;
