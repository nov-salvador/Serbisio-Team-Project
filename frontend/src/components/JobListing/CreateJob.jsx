import React, { useState } from 'react';
import JobForm from './JobForm';
import { IoMdCloseCircle } from "react-icons/io";

const CreateJob = () => {
  const [isJobFormOpen, setIsJobFormOpen] = useState(false);

  const handleCreateJob = () => {
    setIsJobFormOpen(true);
  };

  const handleCloseModal = () => {
    setIsJobFormOpen(false);
  };

  return (
    <div className="mx-4">
    <button onClick={handleCreateJob} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
      Create Job Post
    </button>
    {isJobFormOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg relative">
          <button onClick={handleCloseModal} className="absolute top-2 right-2 text-red-600 text-2xl hover:text-gray-800 focus:outline-none">
            <IoMdCloseCircle />
          </button>
          <JobForm />
        </div>
      </div>
    )}
  </div>
  
  );
};

export default CreateJob;
