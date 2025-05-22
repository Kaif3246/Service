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
        className={`bg-[#f9f9f9] text-black py-4 px-0 flex items-center justify-between relative z-50 transition-transform duration-300 ease-in-out ${
          sticky ? "fixed top-0 shadow-md" : ""
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
        style={{ willChange: "transform", fontFamily: '"Cabin", sans-serif' }}
      >
        {/* Logo with extra left gap */}
        <Link to="/" className="pl-15 flex items-center">
          <img src={logo} alt="Logo" className="h-25 w-auto" />
        </Link>

        {/* Center nav items */}
        <nav className="hidden md:flex gap-10 items-center absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg text-gray-900 hover:text-[#FF0000] transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Login button with extra right gap */}
        <div className="hidden md:flex items-center gap-2 pr-15 cursor-pointer hover:text-[#FF0000] text-gray-900">
          <span className="text-lg">Login</span>
          <FaUserAlt size={20} />
        </div>

        {/* Mobile menu button with extra right gap */}
        <div className="md:hidden flex items-center pr-8">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
            className="flex items-center text-black text-lg gap-1"
          >
            <span>Menu</span>
            <MdWindow size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out shadow-lg z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
            className="text-white text-3xl"
          >
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col font-semibold gap-6 px-6">
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

          <div
            className="flex items-center gap-2 text-lg mt-6 cursor-pointer hover:text-[#FF0000]"
            style={{ fontFamily: '"Cabin", sans-serif' }}
          >
            <span>Login</span>
            <FaUserAlt size={20} />
          </div>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
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
