import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and About */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold">Medan Esubalew</h2>
            <p className="mt-2 text-gray-400 w-[70%]">
              Capturing moments from today...Creating memories for a lifetime.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">02 Kotebe, Yeka, Addis Ababa</p>
            <p className="text-gray-400 mt-2">Email: MedanEsubalew@gmail.com</p>
            <p className="text-gray-400 mt-2">Phone: +251 96 314 5893</p>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Facebook SVG */}
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Twitter SVG */}
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Instagram SVG */}
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* LinkedIn SVG */}
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Medan Esubalew. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
