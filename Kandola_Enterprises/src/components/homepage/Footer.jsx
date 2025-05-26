import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 sm:px-10 pt-16 sm:pt-20 border-t border-white/20" >
            <div
                className="max-w-7xl mx-auto grid grid-cols-[18rem_1fr_18rem] items-start pb-12"
                style={{ fontFamily: '"Poppins", sans-serif' }}
            >
                {/* Left - Kandola Enterprises */}
                <div>
                    <h4
                        className="text-2xl font-semibold mb-5"
                        style={{ fontFamily: '"Poppins", sans-serif', whiteSpace: 'nowrap' }}
                    >
                        Kandola Enterprises, LLC
                    </h4>
                    <div className="font-normal text-[#A9ABAA]" style={{ fontFamily: '"Poppins", sans-serif', whiteSpace: 'nowrap' }}>
                        <p className="text-base hover:text-[#FF0000]">2810 N Church St PMB 233332</p>
                        <p className="text-base  hover:text-[#FF0000]">

                            Wilmington, Delaware 19802
                        </p>

                    </div>
                </div>

                {/* Center - Resources */}
                <div className="mx-auto" style={{ fontFamily: '"Poppins", sans-serif', maxWidth: '300px' }}>
                    <h4 className="text-2xl font-semibold mb-5">Solutions</h4>
                    <ul className="space-y-2 text-base font-normal text-[#A9ABAA]">
                        <li><Link to="/business-strategy" className="hover:text-[#FF0000]">Business Strategy</Link></li>
                        <li><Link to="/brand-building" className="hover:text-[#FF0000]">Brand Building</Link></li>
                        <li><Link to="/funding-capital-optimization" className="hover:text-[#FF0000]">Funding and Capital <br />Optimization</Link></li>
                        <li><Link to="/marketing" className="hover:text-[#FF0000]">Marketing</Link></li>
                        <li><Link to="/digital-architecture" className="hover:text-[#FF0000]">Digital Architecture</Link></li>
                    </ul>
                </div>
                {/* Right - Contact Us */}
                <div>
                    <h4 className="text-2xl font-semibold mb-5">Contact Us</h4>
                    <ul className="space-y-2 text-base font-normal text-[#A9ABAA]">
                        <li>
                            <a href="#" className="hover:text-[#FF0000]">
                                <span>Email: info</span><span className=' text-sm'>@</span><span>Kandolaenterprises.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-[#FF0000]">Contact no: +1 (949) 431-6385</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 pt-6 mt-6 pb-6 font-normal" style={{ fontFamily: '"Poppins", sans-serif' }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
                    {/* Left */}
                    <div className="hover:text-[#FF0000] text-[#A9ABAA] text-center md:text-left">© 2025 Kandola Enterprises LLC. All rights reserved.</div>

                    {/* Center - Social Icons */}
                    <div className="flex space-x-4 text-[#A9ABAA] justify-center">
                        <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
                        <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
                    </div>

                    {/* Right */}
                    <div className="flex space-x-4 text-[#A9ABAA] justify-center md:justify-end">
                        <a href="#" className="hover:text-[#FF0000]">Policy & Privacy</a>
                        <a href="#" className="hover:text-[#FF0000]">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
