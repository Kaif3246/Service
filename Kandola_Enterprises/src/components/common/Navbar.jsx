import React, { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { FaChessKnight, FaUserAlt } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { IoSettingsOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { FaBullhorn } from "react-icons/fa6";
import { LuGlobe } from "react-icons/lu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false); // new state for mobile solutions dropdown
  const [sticky, setSticky] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const bannerHeight = 10;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setSticky(currentScrollY >= bannerHeight);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Connect", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div
        className={`py-4 px-0 flex items-center justify-between fixed w-full top-0 z-50 transition-all duration-500 ease-in-out
          ${sticky ? "shadow-md text-black border-b border-gray-200" : "text-white border-b border-white/10"}
        `}
        style={{
          willChange: "transform",
          fontFamily: '"Poppins", sans-serif',
          background: sticky
            ? "linear-gradient(to right, #fff 0%, #ff0000 100%)"
            : "transparent",
        }}
      >
        {/* Left: Logo + NavItems */}
        <div className="flex items-center pl-[64px] gap-10">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <div className="flex flex-col justify-center leading-tight h-10 text-center">
              <h1 className="font-bold text-2xl" style={{ fontFamily: '"Poppins", sans-serif' }}>
                Kandola
              </h1>
              <p className="font-bold text-xs -mt-2" style={{ fontFamily: '"Poppins", sans-serif' }}>
                Enterprises
              </p>
            </div>
          </Link>

          {/* Nav Items */}
          <nav className="hidden md:flex gap-4 items-center">
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <a
                  href={item.href}
                  className={`text-lg transition-all duration-200 ${
                    sticky ? "text-gray-900 hover:text-[#8B0000]" : "text-white hover:text-[#FF0000]"
                  }`}
                >
                  {item.name}
                </a>

                {item.name === "About Us" && (
                  <>
                    <span className={`${sticky ? "text-gray-900" : "text-white"}`}>|</span>
                    {/* Solutions Dropdown */}
                    <div className="relative group">
                      <button
                        className={`text-lg transition-all duration-200 flex items-center gap-1 ${
                          sticky ? "text-gray-900" : "text-white"
                        } hover:text-[#8B0000]`}
                      >
                        Solutions ▾
                      </button>
                      <div
                        className="absolute top-full left-0 mt-2 w-65 text-sm bg-[#FF0000] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                        style={{ fontFamily: '"Poppins", sans-serif' }}
                      >
                        <ul className="py-2">
                          <li>
                            <Link
                              
                              className="px-4 py-2 flex items-center gap-2 text-white hover:bg-gray-100 hover:text-[#FF0000] transition-colors duration-200"
                            >
                              <FaChessKnight size={25} /> BUSINESS STRATEGY
                            </Link>
                          </li>
                          <li>
                            <Link
                              
                              className="px-4 py-2 flex items-center gap-2 text-white hover:bg-gray-100 hover:text-[#FF0000] transition-colors duration-200"
                            >
                              <IoSettingsOutline size={25} /> BRAND BUILDING
                            </Link>
                          </li>
                          <li>
                            <Link
                              
                              className="px-4 py-2 flex items-center gap-2 text-white hover:bg-gray-100 hover:text-[#FF0000] transition-colors duration-200"
                            >
                              <CiDollar size={35} /> FUNDING AND CAPITAL OPTIMIZATION
                            </Link>
                          </li>
                          <li>
                            <Link
                              
                              className="px-4 py-2 flex items-center gap-3 text-white hover:bg-gray-100 hover:text-[#FF0000] transition-colors duration-200"
                            >
                              <FaBullhorn size={20} /> MARKETING
                            </Link>
                          </li>
                          <li>
                            <Link
                          
                              className="px-4 py-2 flex items-center gap-2 text-white hover:bg-gray-100 hover:text-[#FF0000] transition-colors duration-200"
                            >
                              <LuGlobe size={25} /> DIGITAL ARCHITECTURE
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {index !== navItems.length - 1 && (
                  <span className={`${sticky ? "text-gray-900" : "text-white"}`}>|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Right: Search + Login */}
        <div
          className="hidden md:flex items-center gap-4 pr-[64px]"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className={`px-3 py-1 rounded-md border outline-none text-base transition-all duration-200
              ${sticky ? "bg-gray-100 text-black border-gray-300" : "bg-white/20 text-white border-white/30 placeholder-white"}`}
          />

          {/* Login */}
          <div
            className={`flex items-center gap-2 cursor-pointer hover:text-[#8B0000] ${
              sticky ? "text-gray-900" : "text-white"
            }`}
          >
            <span
              className="text-lg"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Login
            </span>
            <FaUserAlt size={20} />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center pr-8" style={{ fontFamily: '"Cabin", sans-serif' }}>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
            className={`flex items-center font-normal gap-1 ${sticky ? "text-black" : "text-white"}`}
          >
            <span className="text-2xl">Menu</span>
            <MdWindow size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out shadow-lg z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ fontFamily: '"Cabin", sans-serif' }}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-white text-3xl">
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col font-normal gap-6 px-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl hover:text-[#FF0000] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* Solutions expandable dropdown in mobile */}
          <div>
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center justify-between w-full text-xl font-semibold text-white hover:text-[#FF0000] focus:outline-none"
            >
              <span>Solutions</span>
              <span className={`transition-transform duration-300 ${solutionsOpen ? "rotate-90" : ""}`}>
                ▶
              </span>
            </button>
            {solutionsOpen && (
              <ul className="space-y-2 ml-4 mt-2">
                <li>
                  <Link
                    
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 mb-2 hover:text-[#FF0000]"
                  >
                    <FaChessKnight size={22} /> BUSINESS STRATEGY
                  </Link>
                </li>
                <li>
                  <Link
                    
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 hover:text-[#FF0000]"
                  >
                    <IoSettingsOutline size={25} /> BRAND BUILDING
                  </Link>
                </li>
                <li>
                  <Link
                    
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 hover:text-[#FF0000]"
                  >
                    <CiDollar size={45} /> FUNDING AND CAPITAL OPTIMIZATION
                  </Link>
                </li>
                <li>
                  <Link
                    
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 hover:text-[#FF0000]"
                  >
                    <FaBullhorn size={20} /> MARKETING
                  </Link>
                </li>
                <li>
                  <Link
                   
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 hover:text-[#FF0000]"
                  >
                    <LuGlobe size={25} /> DIGITAL ARCHITECTURE
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div
            className="flex items-center gap-2 text-xl font-normal mt-6 cursor-pointer hover:text-[#FF0000]"
            onClick={() => setMenuOpen(false)}
          >
            <span>Login</span>
            <FaUserAlt size={20} />
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
