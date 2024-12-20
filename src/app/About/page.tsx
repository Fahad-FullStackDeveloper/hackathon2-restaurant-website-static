"use client";
import React from "react";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "../Home/Testimonials";
import { IoPlayOutline } from "react-icons/io5";

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
        {/* Frist Section: Content and Buttons */}
        <section className="text-white body-font">
          <div className="container mx-auto flex px-5 py-24">
            <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
              <Image
                className="object-cover object-center w-336px h-536px mt-530px ml-300px radius-6px"
                alt="hero"
                src="/images/about-img1.png"
                width={309}
                height={536}
              />
            </div>
            {/* Right Images */}
            <div className="flex flex-col space-y-2 space-x-2 mt-2 ml-2">
              <Image
                className="object-cover object-center w-309px h-271px mt-584px ml-660px radius-6px"
                alt="image2"
                src="/images/about-img2.png"
                width={309}
                height={271}
              />
              {/* Bottom Image */}
              <Image
                className="object-cover object-center w-309px h-382px mt-882px ml-660px radius-6px"
                alt="image3"
                src="/images/about-img3.png"
                width={309}
                height={382}
              />
            </div>
            {/* Text Content and Buttons */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
                About us _____
              </h1>
              <p className="text-gray-800 title-font text-6xl font-bold">
                Food is an important part of a balanced Diet
              </p>
              <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit
                eu velit in consequat.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                  Show More
                </button>
                <button className="ml-4 inline-flex text-black  border-0 py-2 px-3 focus:outline-none rounded text-lg">
                  <IoPlayOutline className="mr-2 block" />{" "}
                  {/* Icon on the left */}
                  Watch video
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <div className="mb-8 text-gray-800">
          <h2 className="font-bold text-6xl text-center mt-20 mb-4">
            Why Choose Us
          </h2>
          <p className="text-center text-lg ml-96 mr-96 mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            src="/images/BG_Why Choose Us.png"
            alt="Why Choose Us"
            width={1320}
            height={386}
            className="mx-auto mb-4 block w-full"
          ></Image>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center mt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                fill="#1f2937"
                viewBox="0 0 256 256"
                className="h-mx-auto mb-10"
              >
                <path d="M225.27,60.21l-96-32a4,4,0,0,0-2.54,0l-96,32A4,4,0,0,0,28,64v80a4,4,0,0,0,8,0V69.55L79.88,84.18a60,60,0,0,0,24.54,91c-20.86,5.74-39,19.13-51.77,38.65a4,4,0,0,0,6.7,4.36C75.17,193.92,100.2,180,128,180s52.83,13.92,68.65,38.18a4,4,0,0,0,6.7-4.36c-12.72-19.52-30.91-32.91-51.77-38.65a60,60,0,0,0,24.54-91l49.15-16.39a4,4,0,0,0,0-7.58ZM180,120A52,52,0,1,1,87.93,86.86l38.8,12.93a3.95,3.95,0,0,0,2.54,0l38.8-12.93A51.85,51.85,0,0,1,180,120ZM128,91.78,44.65,64,128,36.22,211.35,64Z"></path>
              </svg>
              <h3 className="text-2xl mb-5 font-bold">Best Chef</h3>
              <p className="text-sm pl-10 pr-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>
            <div className="flex flex-col items-center mt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                fill="#1f2937"
                viewBox="0 0 256 256"
                className="h-mx-auto mb-10"
              >
                <path d="M84,56V24a4,4,0,0,1,8,0V56a4,4,0,0,1-8,0Zm36,4a4,4,0,0,0,4-4V24a4,4,0,0,0-8,0V56A4,4,0,0,0,120,60Zm32,0a4,4,0,0,0,4-4V24a4,4,0,0,0-8,0V56A4,4,0,0,0,152,60Zm92,60v8a36,36,0,0,1-36,36h-.41a92.53,92.53,0,0,1-35.76,48H208a4,4,0,0,1,0,8H32a4,4,0,0,1,0-8H68.17A92.34,92.34,0,0,1,28,136V88a4,4,0,0,1,4-4H208A36,36,0,0,1,244,120Zm-40,16V92H36v44a84.28,84.28,0,0,0,48.21,76h71.58A84.28,84.28,0,0,0,204,136Zm32-16a28,28,0,0,0-24-27.71V136a91.75,91.75,0,0,1-2.2,19.94A28,28,0,0,0,236,128Z"></path>
              </svg>
              <h3 className="text-2xl mb-5 font-bold">120 Food Items</h3>
              <p className="text-sm pl-10 pr-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>
            <div className="flex flex-col items-center mt-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="72"
                fill="#1f2937"
                viewBox="0 0 256 256"
                className="h-mx-auto mb-10"
              >
                <path d="M128,68a28,28,0,1,0-28-28A28,28,0,0,0,128,68Zm0-48a20,20,0,1,1-20,20A20,20,0,0,1,128,20Zm87.42,116.78-45.25-51.3a28,28,0,0,0-21-9.48H106.83a28,28,0,0,0-21,9.48l-45.25,51.3a16,16,0,0,0,22.56,22.69L89,138.7l-19.7,74.88a16,16,0,0,0,29.08,13.35L128,176l29.58,51a16,16,0,0,0,29.08-13.35L167,138.7l25.9,20.77a16,16,0,0,0,22.56-22.69Zm-5.76,16.87a8,8,0,0,1-11.31,0,3.11,3.11,0,0,0-.33-.29l-35.51-28.48a4,4,0,0,0-6.38,4.13L179,215.94a4.12,4.12,0,0,0,.24.67,8,8,0,1,1-14.5,6.76c-.05-.11-.11-.21-.17-.32L131.46,166a4,4,0,0,0-6.92,0L91.42,223.05c-.06.11-.12.21-.17.32a8,8,0,1,1-14.5-6.76,4.12,4.12,0,0,0,.24-.67L99.87,129a4,4,0,0,0-6.38-4.13L58,153.36a3.11,3.11,0,0,0-.33.29,8,8,0,0,1-11.31-11.31l.17-.18L91.83,90.77a20,20,0,0,1,15-6.77h42.34a20,20,0,0,1,15,6.77l45.32,51.39.17.18A8,8,0,0,1,209.66,153.65Z"></path>
              </svg>
              <h3 className="text-2xl mb-5 font-bold">Clean Environment</h3>
              <p className="text-sm pl-10 pr-10">
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
        <div className="bg-slate-500 mb-8">
        <Testimonials />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
