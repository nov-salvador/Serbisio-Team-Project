import React from 'react';

export default function Blog() {
  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Exploring Job Services and Trending Opportunities</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Stay informed about the latest job trends and discover new opportunities in the market.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

          {/* Job Service Provider */}
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="https://studyjapan.fairness-world.com/wp-content/uploads/2018/09/work-in-Japan-for-Filipino.jpg" alt="Job Service Provider" />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="#" className="hover:underline">Service Provider</a>
                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">Connecting Workers with Opportunities</p>
                  <p className="mt-3 text-base text-gray-500">Learn how job service providers are revolutionizing the way workers find employment and businesses hire talent.</p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">Service Provider</span>
                    <img className="h-10 w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3003/3003035.png" alt="Service Provider" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">Job Services Co.</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="2024-02-20">February 20, 2024</time>
                    <span aria-hidden="true">·</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Jobs */}
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="https://i.ytimg.com/vi/YFAPpY2cnTI/maxresdefault.jpg" alt="Trending Jobs" />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="#" className="hover:underline">Trending Jobs</a>
                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">Top Opportunities in the Market</p>
                  <p className="mt-3 text-base text-gray-500">Explore the hottest job opportunities across various industries and discover what skills are in demand.</p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">Job Market Trends</span>
                    <img className="h-10 w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3003/3003035.png" alt="Job Market Trends" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">Job Insights</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2024-02-20">February 20, 2024</time>
                    <span aria-hidden="true">·</span>
                    <span>4 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Worker Stories */}
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="https://media.philstar.com/photos/2022/06/26/worker_2022-06-26_23-55-06.jpg" alt="Worker Stories" />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="#" className="hover:underline">Worker Stories</a>
                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">Journey of Success: Worker Experiences</p>
                  <p className="mt-3 text-base text-gray-500">Read inspiring stories of workers who have overcome challenges and achieved success in their careers.</p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">Worker Success</span>
                    <img className="h-10 w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3003/3003035.png" alt="Worker Success" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="#" className="hover:underline">Success Stories</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2024-02-20">February 20, 2024</time>
                    <span aria-hidden="true">·</span>
                    <span>7 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
