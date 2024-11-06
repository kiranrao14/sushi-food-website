
"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "./Context/Themecontext";
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { switchDark, switchLight, theme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === 'dark') {
      switchLight(); // Switch to light theme
    } else {
      switchDark(); // Switch to dark theme
    }
  };

  return (
    <nav className="p-4 bg-hsl-19-77-8"> {/* Change here for className */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/" className="nav__logo flex items-center" style={{ color: theme === "dark" ? "brown" : "black" }}>
            <Image src="/images/logo.png" alt="logo" width={50} height={50} />
            <span className="ml-2 text-lg font-bold">Sushi</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 section_subtitle">
          <Link href="/" className="text-orange-600 font-bold text-xl hover:text-gray-300">Home</Link>
          <Link href="#about" className="text-orange-600 font-bold text-xl hover:text-gray-300">About</Link>
          <Link href="#popular" className="text-orange-600 font-bold text-xl hover:text-gray-300">Popular</Link>
          <Link href="#Recent" className="text-orange-600 font-bold text-xl hover:text-gray-300">Recent</Link> {/* Change here for href */}
        </div>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="ml-4 text-white focus:outline-none">
          {theme === 'dark' ? (
            <i className="ri-sun-line text-yellow-500 text-xl"></i>
          ) : (
            <i className="ri-moon-line text-gray-300 text-xl"></i>
          )}
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-white hover:text-gray-300 focus:outline-none" 
            aria-expanded={menuOpen} // Added for accessibility
            aria-controls="mobile-menu" // Added for accessibility
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden mt-2 space-y-2">
          <Link href="/" className="block text-orange-500 hover:text-gray-300">Home</Link>
          <Link href="#about" className="block text-orange-500 hover:text-gray-300">About</Link>
          <Link href="#popular" className="block text-orange-500 hover:text-gray-300">Popular</Link>
          <Link href="#recent" className="block text-orange-500 hover:text-gray-300">Recent</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
