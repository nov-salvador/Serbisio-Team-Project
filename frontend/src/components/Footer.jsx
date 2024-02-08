import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-10 text-xs font-thin mt-10">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4">
                        <div className="font-semibold">CUSTOMER SERVICE</div>
                        <ul className="mt-2">
                            <li><a href="https://help.serbis.io/ph/s" className="text-white hover:text-gray-400" target="_blank">Help Centre</a></li>
                            <li><a href="https://serbis.io/m/serbis-cares-ph?smtt=0.0.9" className="text-white hover:text-gray-400" target="_blank">Serbis.io Cares PH</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <div className="font-semibold">ABOUT SERBIS.IO</div>
                        <ul className="mt-2">
                            <li><a href="https://careers.serbis.io/about/" className="text-white hover:text-gray-400" target="_blank">About Us</a></li>
                            <li><a href="https://serbis.io/blog" className="text-white hover:text-gray-400" target="_blank">Serbis.io Blog</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <div className="font-semibold">PAYMENT</div>
                        <ul className="mt-2">
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <div className="font-semibold">FOLLOW US</div>
                        <ul className="mt-2">
                            <li><a href="https://facebook.com/SerbisIO" className="text-white hover:text-gray-400" target="_blank"><span className="xTjlXx">Facebook</span></a></li>
                            <li><a href="https://instagram.com/Serbis_IO" className="text-white hover:text-gray-400" target="_blank"><span className="xTjlXx">Instagram</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-4">
                <div className="text-center">
                    <p>&copy; 2024 Serbis.io. All Rights Reserved .</p>
                   
                </div>
            </div>
        </footer>
    );
}
