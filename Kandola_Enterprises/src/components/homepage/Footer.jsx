import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0d1321] text-white  tracking-wider px-10 pt-20  border-t border-white/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">

                {/* Office Info */}
                <div>
                    <h4 className="text-2xl font-bold mb-6">Our offices</h4>
                    <div className="mb-6">
                        <p className="text-gray-400 text-lg font-semibold">Headquarters - 2810 N Church St</p>
                        <p className="text-base leading-relaxed">
                        PMB 233332
                        Wilmington,<br /> Delaware 19802-4447 US
                        </p>
                        <p className="text-base mt-2">+1 9494316385</p>
                    </div>
                    <div>
                        <p className="text-gray-400 text-lg font-semibold"></p>
                        <p className="text-base leading-relaxed">
                            
                            PMB 233332
                            Wilmington,<br />  Delaware 19802-4447 US
                        </p>
                    </div>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="text-2xl font-bold mb-6">Resources</h4>
                    <ul className="space-y-3 text-base">
                        <li><a href="#" className="hover:text-blue-400">Contact us</a></li>
                        <li><a href="#" className="hover:text-blue-400">Privacy policy</a></li>
                        <li><a href="#" className="hover:text-blue-400">Recognitions</a></li>
                        <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-400">Team</a></li>
                        <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-2xl font-bold mb-6">Services</h4>
                    <ul className="space-y-3 text-base">
                        <li><a href="#" className="hover:text-blue-400">Business process</a></li>
                        <li><a href="#" className="hover:text-blue-400">Empowered leadership</a></li>
                        <li><a href="#" className="hover:text-blue-400">Executive growth</a></li>
                        <li><a href="#" className="hover:text-blue-400">Leadership executive</a></li>
                        <li><a href="#" className="hover:text-blue-400">Legacy leadership</a></li>
                        <li><a href="#" className="hover:text-blue-400">Strategic planning</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="border-l border-white/20 pl-6">
                    <h4 className="text-2xl font-bold mb-6">Subscribe to our newsletter</h4>
                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 bg-gray-800 text-base  focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-white text-red-500 hover:bg-red-500 hover:text-white px-4 py-3  text-base font-medium"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 pt-6 mt-6 pb-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
                    {/* Left */}
                    <div>© 2025 Kandola Enterprises LLC. All rights reserved.</div>

                    {/* Center - Social Icons */}
                    <div className="flex space-x-4 text-white">
                        <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
                        <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
                    </div>

                    {/* Right */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-400">Policy & Privacy</a>
                        <a href="#" className="hover:text-blue-400">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
