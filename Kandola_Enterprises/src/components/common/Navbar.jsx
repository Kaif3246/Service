import React, { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const bannerHeight = 600;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= bannerHeight) {
        setSticky(true);
        setShowNavbar(currentScrollY <= lastScrollY.current);
      } else {
        setSticky(false);
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <div
        className={`bg-[#f9f9f9] text-black h-26 py-4 px-6 flex items-center justify-between relative z-50 transition-transform duration-300 ease-in-out ${sticky ? "sticky top-0" : ""
          } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
        style={{
          boxShadow: sticky
            ? "0 0 12px 4px rgba(255,255,255,0.6)"
            : "0 0 8px 2px rgba(255,255,255,0.3)",
          willChange: "transform",
        }}
      >
        {/* Left side: Logo + Name + Tagline */}
        <Link to="/" className="flex flex-col justify-center">
          <div className="flex items-center " style={{ fontFamily: '"Cabin", sans-serif' }}>  {/* items-end se thoda neeche align ho jayega */}
            <img src={logo} alt="Logo" className="h-17 w-20 mr-1 mt-3 " />
            <span className="font-bold text-xl leading-tight whitespace-nowrap mt-7">
              Kandola Enterprises, LLC
            </span>
          </div>
          <p className="text-sm font-semibold   text-black  max-w-xs" style={{ fontFamily: '"Cabin", sans-serif' }}>
            "We build the backend of million-dollar moves"
          </p>
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-10 items-center" style={{ fontFamily: '"Cabin", sans-serif' }}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group flex items-center gap-1 cursor-pointer hover:text-[#FF0000] transition-all duration-200 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Side Login */}
        <div className="hidden md:flex items-center gap-4" style={{ fontFamily: '"Cabin", sans-serif' }}>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#FF0000] font-medium">
            <span>Login</span>
            <FaUserAlt size={20} className="text-gray-700" />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center" style={{ fontFamily: '"Cabin", sans-serif' }}>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
            className="flex items-center text-black text-lg focus:outline-none gap-1"
          >
            <span className="font-medium">Menu</span>
            <MdWindow size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out shadow-lg z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
            className="text-white text-3xl focus:outline-none"
          >
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 cursor-pointer text-[#A9ABAA] hover:text-[#FF0000] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <div className="flex items-center gap-2 cursor-pointer hover:text-[#FF0000]" style={{ fontFamily: '"Cabin", sans-serif' }} >
            <span>Login</span>
            <FaUserAlt size={24} className="text-[#A9ABAA]" />
          </div>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40" style={{ fontFamily: '"Cabin", sans-serif' }}
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
