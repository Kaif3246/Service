import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";
import { FaUserAlt } from 'react-icons/fa';
import { MdWindow } from "react-icons/md";
import { Link } from "react-router-dom"; // ✅ Already imported
import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
            setShowNavbar(false);
          } else {
            setShowNavbar(true);
          }
          lastScrollY.current = window.scrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
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
        className={`bg-black text-white py-4 px-6 flex items-center justify-between relative transition-transform duration-300 ease-in-out shadow-[0_4px_30px_rgba(255,255,255,0.25)] will-change-transform ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } sticky top-0 z-50`}
      >
        {/* ✅ Logo with link to home */}
        <Link to="/" className="flex items-center z-10">
          <img src={logo} alt="Logo" className="h-16 mr-2 rounded-4xl" />
          <div className="flex text-4xl items-end">
            <span className="font-serif">Kan</span>
            <span
              style={{
                fontFamily: '"Brush Script MT", "Brush Script Std", cursive',
                marginLeft: "0.25rem",
              }}
            >
              dola
            </span>
          </div>
        </Link>

        {/* Nav items center */}
        <div className="hidden md:flex gap-6 items-center absolute left-1/2 -translate-x-1/2 z-0">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative flex items-center gap-1 cursor-pointer hover:text-red-500 transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Explore + Button Right */}
        <div className="hidden md:flex items-center gap-4 z-10">
          <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
            <span>Login</span>
            <FaUserAlt size={20} className="text-gray-700" />
          </div>
          {/* ✅ Button linked to /services */}
          <Link to="/services">
            <button className="flex items-center gap-2 border-2 border-white rounded-full px-4 py-1 hover:bg-red-500">
              ➕ Consult for Business loan
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
            className="flex items-center text-white text-2xl focus:outline-none gap-1"
          >
            <span className="text-base font-medium">Menu</span>
            <MdWindow />
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out shadow-lg z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
            className="text-white text-3xl focus:outline-none"
          >
            <FiX />
          </button>
        </div>

        {/* Mobile nav items */}
        <nav className="flex flex-col gap-6 px-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* Login */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-500">
            <span>Login</span>
            <FaUserAlt size={24} className="text-gray-700" />
          </div>

          {/* ✅ Mobile Consult button linked to /services */}
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            <button className="flex items-center gap-2 border-2 border-white rounded-full px-4 py-1 hover:bg-red-500 w-full justify-center mt-4">
              ➕ Consult for Business loan
            </button>
          </Link>
        </nav>
      </div>

      {/* Overlay when menu open */}
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
