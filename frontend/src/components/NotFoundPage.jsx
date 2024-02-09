import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-4">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <p className="text-lg text-gray-600 mb-4">Please try the following:</p>
      <ul className="text-lg text-gray-600 mb-4">
        <li>Check the URL for any mistakes</li>
        <li>Return to the <Link to="/" className="text-blue-500 hover:underline">home page</Link></li>
        <li>Contact the website administrator if you believe this is an error</li>
      </ul>
    </div>
  );
}
export default NotFoundPage;
