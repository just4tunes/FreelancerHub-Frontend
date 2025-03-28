import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import { FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`bg-white w-full h-[70px] py-3 items-center transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 shadow-md z-50" : "relative"
        }`}
      >
        <div className="auto-container flex justify-between items-center">
          <div className="flex-none w-[20%]">
            <img src="/images/logo.jpg" alt="Logo" className="w-[12vh] xl:ml-20" />
          </div>

          <div className="hidden md:flex space-x-7 items-center">
            <Link to="/" className="hover:text-gray-500 text-gray-700 font-serif">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-500 text-gray-700 font-serif">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-gray-500 text-gray-700 font-serif">
              Contact Us
            </Link>
            <Link to="/auth/login" className="hover:text-gray-500 text-gray-700 font-serif">
              Login
            </Link>
            <Link to="/auth/register">
              <Button
                variant="filled"
                className="py-2 bg-[#266464] hover:bg-[#1f5252] text-white rounded-md w-[20vh] mr-8 sm:py-3 border-none shadow-none font-serif"
              >
                Sign Up
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-[70px]"></div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-[250px] h-full bg-green-800 p-4 transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <Link to="/" className="block text-white py-2" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" className="block text-white py-2" onClick={toggleMenu}>
          About Us
        </Link>
        <Link to="/contact" className="block text-white py-2" onClick={toggleMenu}>
          Contact Us
        </Link>
        <Link to="/auth/login" className="block text-white py-2" onClick={toggleMenu}>
          Login
        </Link>
        <Link to="/auth/register" className="block py-2" onClick={toggleMenu}>
          <Button variant="light" color="rgba(255, 255, 255, 0.2)" c={"white"} size="compact-xl" fullWidth>
            Sign Up
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Header;

