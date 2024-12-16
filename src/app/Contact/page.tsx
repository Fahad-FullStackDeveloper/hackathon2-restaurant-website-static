"use client";
import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      {/* Header Component */}
      <header
        className="bg-black text-white py-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/HeaderBG.png')` }} // Inline style path to your image
      >
        <div className="container mx-auto px-4 flex flex-col justify-center items-center text-center">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-brand">Contact</span>
            <span className="text-white"> Us</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">/</span>
            <span className="text-brand">Contact</span>
            {/* Changed color to #FF9F0D */}
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
