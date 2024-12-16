"use client";
import React from "react";
import Navbar from "../components/Navbar";

const ShoppingCart = () => {
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
            <span className="text-brand"> Shopping</span>
            <span className="text-white"> Cart</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">/</span>
            <span className="text-brand">Shopping Cart</span>
            {/* Changed color to brand color #FF9F0D */}
          </p>
        </div>
      </header>

      {/* This is the Shop page */}
      <main>
        <h1>Shopping Cart Page</h1>
      </main>
    </>
  );
};

export default ShoppingCart;
