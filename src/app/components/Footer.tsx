"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base text-base-contrast py-12 pl-10 pr-10">
      <div className="container mx-auto px-4">
        {/* Support Section */}
        <div className="flex flex-col ml-20 mr-20 md:flex-row items-center justify-between pb-12 border-b border-brand">
          {/* Text Section */}
          <div className="text-left mb-6 md:mb-0 ">
            <h3 className="text-3xl font-semibold"><span className="text-brand">St</span>ill You Need Our Support ?</h3>
            <p className="text-sm text-gray-300 mt-2">
              {`Don't wait, make a smart & logical quote here. Its pretty easy.`}
            </p>
          </div>

          {/* Input and Button Section */}
          <div className="flex items-center -space-x-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-8 py-3 bg-brand text-base-contrast placeholder-base-contrast rounded-sm focus:outline-none"
            />
            <button className="px-6 py-3 bg-base-contrast text-brand rounded-sm hover:bg-brand hover:text-base-contrast">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12">
          {/* About Us Section */}
          <div className="space-y-6 pr-2">
            <h3 className="text-2xl font-semibold">About Us.</h3>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              interdum aliquam arcu, sit amet venenatis nulla commodo vel.
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-brand rounded-full flex justify-center items-center">
                <i className="text-base-contrast">📅</i>
              </div>
              <p className="text-sm">Opening Hours:</p>
              <p className="text-sm">
                Mon - Sat (9:00AM - 8:00PM) <span>Sunday - Closed</span>
              </p>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/About" className="text-md flex flex-col space-y-4 hover:text-brand">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-md flex flex-col space-y-4 hover:text-brand">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-md flex flex-col space-y-4 hover:text-brand">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-md flex flex-col space-y-4 hover:text-brand">
                  Team
                </a>
              </li>
              <li>
                <a href="/Menu" className="text-md flex flex-col space-y-4 hover:text-brand">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-md flex flex-col space-y-4 hover:text-brand">
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Help?</h3>
            <ul className="space-y-3">
              <li>
                <a href="/FAQ" className="text-md flex flex-col space-y-4 hover:text-brand">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-md flex flex-col space-y-4 hover:text-brand">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-md flex flex-col space-y-4 hover:text-brand">
                  Reporting
                </a>
              </li>
              <li>
                <a href="#" className="text-md flex flex-col space-y-4 hover:text-brand">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-md flex flex-col space-y-4 hover:text-brand">
                  Support Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-md flex flex-col space-y-4 hover:text-brand">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Recent Posts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/dish1.png"
                  alt="Dish 1"
                  layout="intrinsic"
                  width={60}
                  height={60}
                  className="object-cover rounded-sm"
                />
                <div>
                  <p className="text-sm">Dish 1 - Delicious Pasta</p>
                  <span className="text-xs text-gray-400">
                    December 5, 2024
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/dish2.png"
                  alt="Dish 2"
                  layout="intrinsic"
                  width={60}
                  height={60}
                  className="object-cover rounded-sm"
                />
                <div>
                  <p className="text-sm">Dish 2 - Spicy Tacos</p>
                  <span className="text-xs text-gray-400">
                    December 3, 2024
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/dish3.png"
                  alt="Dish 3"
                  layout="intrinsic"
                  width={60}
                  height={60}
                  className="object-cover rounded-sm"
                />
                <div>
                  <p className="text-sm">Dish 3 - Crispy Chicken</p>
                  <span className="text-xs text-gray-400">
                    December 1, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12 text-sm text-gray-400">
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            rel="stylesheet"
          />
          <p>&copy; Copyright 2024 by Ayeman. All rights reserved.</p>

          {/* Social Media Icons Section */}
          <div className="flex justify-center items-center space-x-6 mt-6 bg-gray-800 bg-opacity-50 py-2 px-4 rounded-md">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-base-contrast text-blue-600 flex justify-center items-center rounded-md shadow-md hover:bg-brand">
                <i className="fab fa-facebook-f"></i>
              </div>
            </a>

            {/* Twitter Icon */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-base-contrast text-blue-400 flex justify-center items-center rounded-md shadow-md hover:bg-brand">
                <i className="fab fa-twitter"></i>
              </div>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-base-contrast text-pink-600 flex justify-center items-center rounded-md shadow-md hover:bg-brand">
                <i className="fab fa-instagram"></i>
              </div>
            </a>

            {/* YouTube Icon */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-base-contrast text-red-600 flex justify-center items-center rounded-md shadow-md hover:bg-brand">
                <i className="fab fa-youtube"></i>
              </div>
            </a>

            {/* Pinterest Icon */}
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-base-contrast text-red-600 flex justify-center items-center rounded-md shadow-md hover:bg-brand">
                <i className="fab fa-pinterest"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
