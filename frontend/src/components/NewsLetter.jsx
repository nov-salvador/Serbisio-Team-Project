import React from 'react';

export default function NewsLetter({ email }) {
    return (
        <div className="text-center">
            <h2 className="font-semibold text-l mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-700 mb-8 text-xs">
                "Every step you take towards your goals, no matter how small, is a step closer to your dreams. Keep moving forward with determination and resilience, and remember that even the smallest victories are worth celebrating. You have the power to shape your own future, so embrace each day with courage and optimism. Believe in yourself, and you'll be amazed at what you can achieve."
            </p>
            <form className="flex justify-center items-center">
                <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" style={{ width: '40%' }} className="border border-gray-300 rounded-l-md px-4 py-2" />
                <button type="submit" className="bg-sky-700 text-white px-4 py-2 rounded-r-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500">Subscribe</button>
            </form>
        </div>
    );
}
