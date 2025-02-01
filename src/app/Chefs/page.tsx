import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

const AllChefs = () => {
  const chefs = [
    { name: "Ahmed", img: "/images/Chef card05.png" },
    { name: "Fatima", img: "/images/Chef card06.png" },
    { name: "Ali", img: "/images/Chef card07.png" },
    { name: "Kashif", img: "/images/Chef card08.png" },
    { name: "Hassan", img: "/images/Chef card09.png" },
    { name: "Zainab", img: "/images/Chef card10.png" },
    { name: "Omar", img: "/images/Chef card11.png" },
    { name: "Usman", img: "/images/Chef card12.png" },
    { name: "Khalid", img: "/images/Chef card13.png" },
    { name: "Noman", img: "/images/Chef card14.png" },
    { name: "Imran", img: "/images/Chef card15.png" },
    { name: "Salman", img: "/images/Chef card16.png" },
  ];

  return (
    <>
      <Navbar />
      <header className="relative h-[300px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/HeaderBG.png"
            alt="Header Background"
            fill // Replaces layout="fill"
            style={{ objectFit: "cover" }} // Replaces objectFit="cover"
            quality={100}
            priority
          />
        </div>

        {/* Overlay to darken the background image (optional) */}
        <div className="absolute inset-0 bg-opacity-10"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-brand">Our</span>
            <span className="text-white"> Chef</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">{">"}</span>
            <span className="text-brand">Chef</span>
            {/* Changed color to brand color #FF9F0D */}
          </p>
        </div>
      </header>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="text-center mb-10">
            <h2 className="text-3xl text-brand mb-4 font-greatvibes">
              Meet Our Chefs
            </h2>
            <h3 className="text-5xl font-semibold text-gray-800">
              Culinary <span className="text-brand">Masters</span>
            </h3>
          </div>

          {/* Chefs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {chefs.map((chef, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-2 rounded-lg shadow-lg hover:transition duration-300 transform hover:scale-95"
              >
                <Image
                  src={chef.img}
                  alt={chef.name}
                  width={300}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800 ">
                  {chef.name}
                </h4>
                <p className="text-sm text-gray-600">Chef</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllChefs;
