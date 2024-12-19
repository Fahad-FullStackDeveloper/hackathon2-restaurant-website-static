import React from "react";
import Navbar from "../components/Navbar";


const Pages = () => {
  return (
    <>
    <Navbar />
    <header
        className="bg-black text-white py-16 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/HeaderBG.png')` }} // Inline style path to your image
      >
        <div className="container mx-auto px-4 flex flex-col justify-center items-center text-center">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-brand">Our</span>
            <span className="text-white"> Pages</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">/</span>
            <span className="text-brand">Pages</span>
            {/* Changed color to brand color #FF9F0D */}
          </p>
        </div>
      </header>

      <h1>Pages</h1>
    </>
  );
};

export default Pages;
