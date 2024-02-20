"use client";

import React, { useState, useRef } from "react";

function Header({ scrollHandler, homeRef, aboutRef, servicesRef, contactRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white text-gray-600 body-font">
      <div className="container px-5 max-w-full">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-indigo-500 p-2 bg-indigo-100 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-medium">Tailblocks</span>
          </a>

          <button
            onClick={toggleMenu}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <nav className="hidden md:flex items-center space-x-4">
            <div
              onClick={() => scrollHandler(homeRef)}
              className="border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base cursor-pointer"
            >
              Home{" "}
            </div>
            <div
              onClick={() => scrollHandler(aboutRef)}
              className="border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base cursor-pointer"
            >
              About Us
            </div>
            <div
              onClick={() => scrollHandler(servicesRef)}
              className="border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base cursor-pointer"
            >
              Services
            </div>
            <div
              onClick={() => scrollHandler(contactRef)}
              className="border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base cursor-pointer"
            >
              Contact Us
            </div>
          </nav>
          <button className="hidden md:block bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base">
            Button
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="md:flex items-center">
            <div
              onClick={() => {
                toggleMenu();
                scrollHandler(homeRef);
              }}
              className="border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base cursor-pointer"
            >
              Home{" "}
            </div>
            <div
              onClick={() => {
                toggleMenu();
                scrollHandler(aboutRef);
              }}
              className="border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base cursor-pointer"
            >
              About Us
            </div>
            <div
              onClick={() => {
                scrollHandler(servicesRef);
                toggleMenu();
              }}
              className="border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base cursor-pointer"
            >
              Services
            </div>
            <div
              onClick={() => {
                scrollHandler(contactRef);
                toggleMenu();
              }}
              className="border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base cursor-pointer"
            >
              Contact Us
            </div>
          </nav>
          <div className="border-0 py-2 flex justify-center align-middle focus:outline-none rounded text-base cursor-pointer">
            <h4>Welcome to tailwind</h4>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
