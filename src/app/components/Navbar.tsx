"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MagnifyingGlass, User, Tote, X, List } from "@phosphor-icons/react"; // Importing icons from Phosphor Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-base py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-base-contrast">
          <span className="text-base-contrast">Food</span>
          <span className="text-brand">tuck</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-base-contrast focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  href={`/${item}`}
                  className="text-base-contrast hover:text-brand"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/search" className="text-base-contrast hover:text-brand">
            <MagnifyingGlass size={28} />
          </Link>
          <Link href="/sign-in" className="text-base-contrast hover:text-brand">
            <User size={28} />
          </Link>
          <Link href="/cart" className="text-base-contrast hover:text-brand">
            <Tote size={28} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-base w-full p-4 space-y-4">
          {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map(
            (item, index) => (
              <Link
                key={index}
                href={`/${item}`}
                className="block text-base-contrast hover:text-brand text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}

          {/* Mobile Icons */}
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/search" className="text-base-contrast hover:text-brand">
              <MagnifyingGlass size={28} />
            </Link>
            <Link href="/sign-in" className="text-base-contrast hover:text-brand">
              <User size={28} />
            </Link>
            <Link href="/cart" className="text-base-contrast hover:text-brand">
              <Tote size={28} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;