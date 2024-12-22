"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-base py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-base-contrast">
          <span className="text-base-contrast">Food</span>
          <span className="text-brand">tuck</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-brand hover:text-statecolors-Success"
            >
              Home
            </Link>
          </li>
          <li>
            <Link href="/Menu" className="text-base-contrast hover:text-brand">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/BlogList" className="text-base-contrast hover:text-brand">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/Pages" className="text-base-contrast hover:text-brand">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/About" className="text-base-contrast hover:text-brand">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Shop"
              className="text-base-contrast hover:text-brand"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="text-base-contrast hover:text-brand"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Icon */}
          <Link href="/Search">
            <svg
              className="transition duration-300 cursor-pointer hover:text-brand"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#fafafa"
              id="search"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </Link>

          {/* User Icon */}
          <Link href="/SignIn">
            <svg
              className="transition duration-300 cursor-pointer hover:text-brand"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#fafafa"
              id="user login"
              viewBox="0 0 256 256"
            >
              <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
            </svg>
          </Link>

          {/* Shopping Tote Icon */}
          <Link href="/ShoppingCart">
            <svg
              className="transition duration-300 cursor-pointer hover:text-brand"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#fafafa"
              id="cart"
              viewBox="0 0 256 256"
            >
              <path d="M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm81.76,168a.13.13,0,0,1-.09,0H46.25L32.08,80H80v24a8,8,0,0,0,16,0V80h64v24a8,8,0,0,0,16,0V80h48Z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
