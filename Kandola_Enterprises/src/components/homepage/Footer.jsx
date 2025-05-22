import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white  px-10 pt-20  border-t border-white/20" style={{ fontFamily: '"Cabin", sans-serif' }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">

                {/* Office Info */}
                <div>
                    <h4 className="text-2xl font-semibold  mb-6 "  style={{ fontFamily: '"Cabin", sans-serif' }}>Kandola Enterprises,LLC</h4>
                    <div className="mb-6 font-normal text-[#A9ABAA]" style={{ fontFamily: '"Cabin", sans-serif' }} >
                        <p className="text-[#A9ABAA] text-lg hover:text-[#FF0000]">Headquarter: 2810 N Church St</p>
                        <p className="text-base leading-relaxed hover:text-[#FF0000]">
                        PMB 233332
                        Wilmington,<br /> Delaware 19802-4447 US
                        </p>
                        <p className="text-base mt-2 hover:text-[#FF0000]">+1 9494316385</p>
                    </div>
                    <div className='font-normal text-[#A9ABAA]' style={{ fontFamily: '"Cabin", sans-serif' }}>
                        <p className="text-[#A9ABAA] text-lg font-semibold"></p>
                        <p className="text-base leading-relaxed">
                           
                        </p>
                    </div>
                </div>

                {/* Resources */}
                <div className='px-19'>
                    <h4 className="text-2xl font-semibold mb-6" style={{ fontFamily: '"Cabin", sans-serif' }}>Resources</h4>
                    <ul className="space-y-3 text-base font-normal text-[#A9ABAA]" style={{ fontFamily: '"Cabin", sans-serif' }}>
                        <li><a href="#" className="hover:text-[#FF0000]">Privacy policy</a></li>
                        <li><a href="#" className="hover:text-[#FF0000]">Recognitions</a></li>
                        <li><a href="#" className="hover:text-[#FF0000]">Careers</a></li>
                        <li><a href="#" className="hover:text-[#FF0000]">Team</a></li>
                   
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-2xl font-semibold mb-6" style={{ fontFamily: '"Cabin", sans-serif' }}>Contact Us</h4>
                    <ul className="space-y-3 text-base font-normal text-[#A9ABAA]" style={{ fontFamily: '"Cabin", sans-serif' }}>
                        <li><a href="#" className="hover:text-[#FF0000]"></a></li>
                        <li><a href="#" className="hover:text-[#FF0000]">Email: info@kandolaenterprises.com</a></li>
                        <li><a href="#" className="hover:text-[#FF0000]">Contact no: +1 9494316385</a></li>
                    
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="border-l border-white/20 pl-6">
                    <h4 className="text-2xl font-semibold mb-6" style={{ fontFamily: '"Cabin", sans-serif' }}>Subscribe to our newsletter</h4>
                    <form className="flex flex-col gap-3 text-normal" style={{ fontFamily: '"Cabin", sans-serif' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 bg-gray-800 text-base  focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-white text-[#FF0000] hover:bg-[#FF0000] hover:text-white px-4 py-3  text-base font-medium"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 pt-6 mt-6 pb-6 font-normal" style={{ fontFamily: '"Cabin", sans-serif' }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
                    {/* Left */}
                    <div className='hover:text-[#FF0000] text-[#A9AbAA]' >© 2025 Kandola Enterprises LLC. All rights reserved.</div>

                    {/* Center - Social Icons */}
                    <div className="flex space-x-4 text-[#A9AbAA]">
                        <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
                        <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
                    </div>

                    {/* Right */}
                    <div className="flex space-x-4 text-[#A9AbAA]">
                        <a href="#" className="hover:text-[#FF0000]">Policy & Privacy</a>
                        <a href="#" className="hover:text-[#FF0000]">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
