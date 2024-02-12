"use client";

import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header class="fixed top-0 left-0 right-0 z-50 bg-white text-gray-600 body-font">
      <div class="container px-5 max-w-full">
        <div class="flex justify-between items-center py-4">
          <a href="#" class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-indigo-500 p-2 bg-indigo-100 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl font-medium">Tailblocks</span>
          </a>
          <button class="block md:hidden focus:outline-none">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 3a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 8a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 8a1 1 0 110-2h14a1 1 0 110 2H3z"
              ></path>
            </svg>
          </button>

          <nav class="hidden md:flex items-center space-x-4">
            <a href="#" class="hover:text-gray-900">
              First Link
            </a>
            <a href="#" class="hover:text-gray-900">
              Second Link
            </a>
            <a href="#" class="hover:text-gray-900">
              Third Link
            </a>
            <a href="#" class="hover:text-gray-900">
              Fourth Link
            </a>
          </nav>
          <button class="hidden md:block bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base">
            Button
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
