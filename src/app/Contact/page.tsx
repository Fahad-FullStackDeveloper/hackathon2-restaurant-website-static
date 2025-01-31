"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <Navbar />
      {/* Header Component */}
      <header className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/HeaderBG.png" // Path to your background image
            alt="Header Background"
            layout="fill" // Makes the image cover the entire container
            objectFit="cover" // Ensures the image covers the area without distortion
            quality={100} // Optional: Adjust image quality
            priority // Optional: Load this image with high priority
          />
        </div>

        {/* Overlay to darken the background image (optional) */}
        <div className="absolute inset-0 bg-opacity-10"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-brand">Contact</span>
            <span className="text-white"> Us</span>
            {/* Changed color to brand color #FF9F0D */}
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">Contact</span>
            {/* Changed color to brand */}
          </p>
        </div>
      </header>
      {/* This is the Contact Page */}
      <main>
        <h1>Contact Page</h1>
      </main>
    </>
  );
};

export default Contact;
