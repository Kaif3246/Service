import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0d1321] text-white px-10 py-20 mt-10 border-t border-white/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Office Info */}
        <div>
          <h4 className="text-2xl font-bold mb-6">Our offices</h4>
          <div className="mb-6">
            <p className="text-gray-400 text-lg font-semibold">Headquarters - USA</p>
            <p className="text-base leading-relaxed">
              993 Renner Burg, West Rond,<br /> MT 94251-030
            </p>
            <p className="text-base mt-2">+1 (009) 544-7818</p>
          </div>
          <div>
            <p className="text-gray-400 text-lg font-semibold">Operations - Canada</p>
            <p className="text-base leading-relaxed">
              Suite 452 8082 Boner Parge,<br /> Elviraton, CA 48998
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
              className="px-4 py-3 bg-gray-800 text-base rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-red-500 hover:bg-red-500 hover:text-white px-4 py-3 rounded-md text-base font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
