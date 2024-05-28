import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

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
            <p className="text-gray-400">
              Phone:{" "}
              <a
                href="tel: +251963145893"
                className="hover:text-white transition-all underline"
              >
                +251 96 314 5893
              </a>
            </p>
            <p className="text-gray-400 mt-2">
              Email:{" "}
              <a
                href="mailto:MedanEsubalew@gmail.com"
                className="hover:text-white transition-all underline"
              >
                MedanEsubalew@gmail.com
              </a>
            </p>
            <p className="text-gray-400 mt-2">02 Kotebe, Yeka, Addis Ababa</p>
            {/* Social Icons */}
            <div className="flex mt-4 space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition-all"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition-all"
              >
                <FaTelegram size={32} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition-all"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition-all"
              >
                <FaLinkedin size={32} />
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
