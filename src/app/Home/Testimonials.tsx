"use client";
import Image from "next/image";
import React, { useState } from "react";
import Rating from "../components/Rating";

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      personImage: "/images/testimonials_person.png",
      flowerImage: "/images/testimonials_flower.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dolor vitae justo gravida cursus.",
      rating: 5,
    },
    {
      personImage: "/images/testimonials_person.png",
      flowerImage: "/images/testimonials_flower.png",
      text: "Suspendisse potenti. Ut vehicula justo eget justo malesuada pharetra.",
      rating: 4,
    },
    {
      personImage: "/images/testimonials_person.png",
      flowerImage: "/images/testimonials_flower.png",
      text: "Cras sed libero non est cursus pellentesque sit amet eu eros.",
      rating: 4,
    },
    {
      personImage: "/images/testimonials_person.png",
      flowerImage: "/images/testimonials_flower.png",
      text: "Pellentesque quis sapien a arcu volutpat luctus.",
      rating: 5,
    },
  ];

  const handleReviewChange = (index: number) => {
    setCurrentReview(index);
  };

  return (
    <div className="w-full flex flex-col items-center px-6 mt-10 mb-28">
      {/* Testimonials Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl text-brand mb-4 font-GreatVibes">
          Testimonials
        </h2>
        <h3 className="text-5xl font-semibold font-Helvetica text-white mb-20">
          <span className="text-brand">Wh</span>at our client are saying
        </h3>
      </div>

      {/* Review Cards */}
      <div className="relative bg-base-contrast p-6 rounded-md w-full max-w-5xl h-full max-h-5xl">
        {/* Person Image */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <Image
            className="object-cover rounded-full shadow-lg"
            src={reviews[currentReview].personImage}
            alt="Testimonials Person"
            width={100}
            height={100}
          />
        </div>

        {/* Flower Image */}
        <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 opacity-20">
          <Image
            className="object-cover rounded-md shadow-lg"
            src={reviews[currentReview].flowerImage}
            alt="Testimonials Flower"
            width={200}
            height={200}
          />
        </div>

        {/* Review Text */}
        <div className="text-center mt-16">
          <p className="text-md text-base font-Inter mb-4">
            {reviews[currentReview].text}
          </p>
        </div>
        {/* 5-Star Bottom Rating */}
        <div className="flex justify-center mt-6">
          <Rating maxStars={5} color="brand" size={24} currentRating={5} />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center mt-10 gap-4">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`w-5 h-5 rounded-full cursor-pointer ${
              currentReview === index ? "bg-brand-light" : "bg-brand-dark"
            }`}
            onClick={() => handleReviewChange(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
