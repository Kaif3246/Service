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
    const bannerHeight = 600; // apna banner height

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
        className={`bg-[#f9f9f9] text-black py-4 px-6 flex items-center justify-between relative z-50 transition-transform duration-300 ease-in-out ${
          sticky ? "sticky top-0" : ""
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
        style={{
          // non-sticky: subtle white glow; sticky: stronger glow
          boxShadow: sticky
            ? "0 0 12px 4px rgba(255,255,255,0.6)"
            : "0 0 8px 2px rgba(255,255,255,0.3)",
          willChange: "transform",
        }}
      >
        <Link to="/" className="flex items-center z-10">
          <img src={logo} alt="Logo" className="h-16 mr-2 " />
          <div className="flex justify-center w-full">
  <div className="inline-flex items-baseline">
    <span className="font-bold text-xl leading-tight">Kandola Enterprises,LLC</span>

  </div>
</div>
        </Link>

        <div className="hidden md:flex gap-6 items-center absolute left-1/2 -translate-x-1/2 z-0">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group flex items-center gap-1 cursor-pointer hover:text-red-500 transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 z-10">
          <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
            <span>Login</span>
            <FaUserAlt size={20} className="text-gray-700" />
          </div>
          <Link to="/services">
            <button className="flex items-center gap-2 border-2 border-white  px-4 py-1 hover:bg-red-500">
              ➕ Consult for Business loan
            </button>
          </Link>
        </div>

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
              className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <div className="flex items-center gap-2 cursor-pointer hover:text-red-500">
            <span>Login</span>
            <FaUserAlt size={24} className="text-gray-700" />
          </div>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            <button className="flex items-center gap-2 border-2 border-white  px-4 py-1 hover:bg-red-500 w-full justify-center mt-4">
              ➕ Consult for Business loan
            </button>
          </Link>
        </nav>
      </div>

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
