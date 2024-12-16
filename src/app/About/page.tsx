"use client";
import React from "react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

const AboutPage = () => {
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
            <span className="text-brand">About</span>
            <span className="text-white"> Us</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">/</span>
            <span className="text-brand">About</span>
            {/* Changed color to brand color #FF9F0D */}
          </p>
        </div>
      </header>

      <div className="container mx-auto p-8">
        {/* About Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Container for the 3 images with different sizes */}
          <div className="flex justify-between items-center space-x-4">
            <div className="w-1/3">
              <Image
                src="/images/dish9.png"
                alt="About Us Image 1"
                width={300} // Different width for each image
                height={250} // Different height for each image
                className="object-cover rounded"
              />
            </div>
            <div className="w-1/3">
              <Image
                src="/images/dish10.png"
                alt="About Us Image 2"
                width={350} // Different width for this image
                height={300} // Different height for this image
                className="object-cover rounded"
              />
            </div>
            <div className="w-1/3">
              <Image
                src="/images/product6.png"
                alt="About Us Image 3"
                width={400} // Different width for this image
                height={350} // Different height for this image
                className="object-cover rounded"
              />
            </div>
          </div>

          {/* About Us Text Section */}
          <div className="col-span-2 text-center">
            <h2 className="font-bold text-3xl mb-4">
              Food is an Important Part of a Balanced Diet
            </h2>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <button className="bg-yellow-400 text-white px-6 py-3 rounded-full hover:bg-yellow-500">
              Watch Video
            </button>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-8">
          <h2 className="font-bold text-2xl text-center mb-4">
            Why Choose Us?
          </h2>
          <p className="text-center text-sm mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <Image
                src="/images/chef.jpg"
                alt="Best Chef"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold">Best Chef</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>
            <div>
              <Image
                src="/images/food-item.jpg"
                alt="120 Food Items"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold">120 Food Items</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>
            <div>
              <Image
                src="/images/clean-environment.jpg"
                alt="Clean Environment"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold">Clean Environment</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>
          </div>
        </div>

        {/* Full Width Image Section */}
        <div className="mb-8">
          <Image
            src="/images/full-width-image.jpg"
            alt="Full Width Image"
            width={1920}
            height={800}
            className="w-full object-cover rounded"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
