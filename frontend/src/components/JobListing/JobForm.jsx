import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TbCurrencyPeso } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";

const JobForm = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    // postedBy: _id,
    category: '',
    location: '',
    duration: '',
    budgetPerHour: '',
    description: '',
    photoUrl: '',
    postedDate: currentDate,
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/getCategory')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log('Error fetching categories:', error);
    });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails(prevState => ({
        ...prevState,
        [name]: value === '' ? '' : isNaN(value) ? value : parseFloat(value)
    }));
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = localStorage.getItem('user')
      const parseUser = JSON.parse(user)
      const response = await fetch(`http://localhost:3000/createJob/${parseUser._id}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Set content type to JSON
        },
        body: JSON.stringify(jobDetails)
      });
      const job = await response.json()
      setJobDetails({
        jobTitle: '',
        category: '',
        location: '',
        duration: '',
        budgetPerHour: '',
        description: '',
        photoUrl: '',
      });
      console.log(jobDetails)
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-2">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="">
          <label className="block mb-4 text-base font-semibold text-[#07074D] sm:text-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Create Job Post</h2>
            Job Details
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="jobTitle"  
              placeholder="Job Title"
              value={jobDetails.jobTitle} 
              className="input-field rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
              onChange={handleChange} 
            />
            <select
              id="category"
              name="category"
              value={jobDetails.category} 
              onChange={handleChange}
              className="input-field rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>{category.name}</option>
              ))}
            </select>

            <div className="relative w-full">
              <div className="absolute inset-y-0 right-12 flex items-center pl-3.5 pointer-events-none text-[#6B7280] ">
                day/s
              </div>
              <input 
                type="number" 
                name="duration" 
                className="block p-2.5 w-full z-20  bg-white py-1 px-6 text-base font-medium text-[#6B7280]  outline-none rounded-md border border-[#e0e0e0] focus:border-[#6A64F1] focus:shadow-md" 
                placeholder="Duration" 
                value={isNaN(jobDetails.duration) ? '' : jobDetails.duration}
                onChange={handleChange}
              />
            </div>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#6B7280] ">
                <TbCurrencyPeso />
              </div>
              <div className="absolute inset-y-0 right-12 flex items-center pl-3.5 pointer-events-none text-[#6B7280] ">
                /hour
              </div>
              <input 
                type="number" 
                id="budgetPerHour" 
                className="block p-2.5 w-full z-20 pl-10  bg-white py-1 px-6 text-base font-medium text-[#6B7280]  outline-none rounded-md border border-[#e0e0e0] focus:border-[#6A64F1] focus:shadow-md" 
                placeholder="Hourly budgetPerHour" 
                name='budgetPerHour'
                value={isNaN(jobDetails.budgetPerHour) ? '' : jobDetails.budgetPerHour}
                onChange={handleChange}
                />
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#6B7280]">
            < IoLocationOutline />
          </div>
          <input 
            type="text" 
            id="location" 
            name="location"
            className="block p-2.5 w-full z-20 pl-10  bg-white py-1 px-6 text-base font-medium text-[#6B7280]  outline-none rounded-md border border-[#e0e0e0] focus:border-[#6A64F1] focus:shadow-md" 
            placeholder="Location" 
            value={jobDetails.location} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <textarea 
            rows="4" 
            placeholder="Description" 
            id="description" 
            name="description" 
            value={jobDetails.description} 
            onChange={handleChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" 
          />
        </div>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#6B7280]">
            <AiOutlinePicture /> &nbsp; link
          </div>
          <input 
            type="text" 
            id="photoUrl" 
            name='photoUrl'
            className="block p-2.5 w-full z-20 pl-24  bg-white py-1 px-6 text-base font-medium text-[#6B7280]  outline-none rounded-md border border-[#e0e0e0] focus:border-[#6A64F1] focus:shadow-md" 
            placeholder="Enter Photo URL" 
            onChange={handleChange}
            value={jobDetails.photoUrl} 
          />
        </div>
        <div className="text-center">
          <button type="submit" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md transition duration-300 hover:bg-blue-600">Publish Job</button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
