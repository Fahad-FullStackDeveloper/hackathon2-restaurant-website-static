// "use client";
// import React from "react";
// import Navbar from "../components/Navbar";

// const ShopList = () => {
//   return (
//     <>
//       <Navbar />
//

//       {/* This is the Shop page */}
//       <main>
//         <h1>Shop Page</h1>
//       </main>
//     </>
//   );
// };

// export default ShopList;

"use client";
import Navbar from "../components/Navbar";
import React, { useState } from "react";
import Image from "next/image";

const ShopPage = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Fresh Lime",
      price: "$38.00",
      discountPrice: "$45.00",
      image: "/images/product6.png",
    },
    {
      id: 2,
      name: "Chocolate Muffin",
      price: "$28.00",
      image: "/images/product7.png",
    },
    {
      id: 3,
      name: "Burger",
      price: "$21.00",
      discountPrice: "$45.00",
      image: "/images/product8.png",
    },
    {
      id: 4,
      name: "Country Burger",
      price: "$45.00",
      image: "/images/Burger.png",
    },
    { id: 5, name: "Drink", price: "$24.00", image: "/images/Drink.png" },
    {
      id: 6,
      name: "Pizza",
      price: "$10.00",
      discountPrice: "23.00",
      image: "/images/Pizza.png",
    },
    {
      id: 7,
      name: "Cheese Butter",
      price: "$25.00",
      image: "/images/Cheese Butter.png",
    },
    {
      id: 8,
      name: "Sandwiches",
      price: "$12.00",
      image: "/images/Sandwiches.png",
    },
    {
      id: 9,
      name: "Chicken Soup",
      price: "$45.00",
      discountPrice: 3,
      image: "/images/Chicken Soup.png",
    },
    {
      id: 10,
      name: "Country Burger",
      price: "$25.00",
      image: "/images/Burger.png",
    },
    {
      id: 11,
      name: "Drink",
      price: "$45.00",
      discountPrice: "$65.00",
      image: "/images/Drink.png",
    },
    { id: 12, name: "Pizza", price: "$25.00", image: "/images/Pizza.png" },
    {
      id: 13,
      name: "Cheese Butter",
      price: "$15.00",
      image: "/images/Cheese Butter.png",
    },
    {
      id: 14,
      name: "Sandwiches",
      price: "$15.00",
      image: "/images/Sandwiches.png",
    },
    {
      id: 15,
      name: "Chicken soup",
      price: "$23.00",
      image: "/images/Chicken Soup.png",
    },
  ]);

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
            <span className="text-brand"> Our</span>
            <span className="text-white"> Shop</span>
          </h1>

          {/* Page Route */}
          <p className="text-lg">
            Home <span className="mx-2">/</span>
            <span className="text-brand">Shop</span>
            {/* Changed color to brand color #FF9F0D */}
          </p>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 p-20 text-gray-800">
        {/* Main Content */}
        <main className="flex-grow">
          {/* Sort and Show */}
          <div className="flex items-center mb-4">
            <div className="flex items-center gap-2 mr-10">
              <label htmlFor="sort" className="font-bold">
                Sort by:
              </label>
              <select id="sort" className="p-2 border rounded">
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="show" className="font-bold">
                Show:
              </label>
              <select id="show" className="p-2 border rounded">
                <option value="default">Default</option>
                <option value="high">High</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
            {products.map((product) => (
              <div key={product.id} className="">
                {/* Image with increased size */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400} // Increased width
                  height={300} // Increased height
                  className=" mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <div className="flex items-center gap-4">
                  {/* Display price and discount in the same line */}
                  <p className="text-brand font-semibold">
                    {product.price}
                  </p>
                  {[1, 3, 5, 11].includes(product.id) && (
                    <p className="text-gray-500 line-through">
                      {product.discountPrice}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-12">
            {[
              { page: "<<" },
              { page: 1 },
              { page: 2 },
              { page: 3 },
              { page: ">>" },
            ].map((item) => (
              <button
                key={item.page}
                className="px-4 py-2 border rounded mx-1 text-brand hover:bg-brand hover:text-white font-bold"
              >
                {item.page}
              </button>
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white">
          {/* Search Product */}
          <div className="mb-6">
            <input
              type="text"
              id="search"
              placeholder="Search by Product"
              className="w-full p-2 border bg-orange-100"
            />
          </div>

          {/* Categories */}
          <div className="mb-6">
            <p className="font-bold mb-2">Category</p>
            <ul className="space-y-2">
              {[
                "Sandwiches",
                "Burger",
                "Chicken Chup",
                "Drink",
                "Pizza",
                "Thi",
                "Non Veg",
                "Uncategorized",
              ].map((category) => (
                <li key={category}>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Filter by Price */}
          <div className="flex-grow bg-white hover:bg-white accent-brand">
            <p className="font-bold mb-2">Filter by Price</p>
            <div className="flex flex-col gap-2">
              <input
                type="range"
                min="0"
                max="8000"
                className="flex-grow bg-white accent-brand"
              />
              <div className="flex justify-between items-center text-brand">
                <span>From $0 to $8000</span>
                <span>Filter</span>
              </div>
            </div>
          </div>

          {/* Sidebar Image */}
          <div className="mb-6">
            <Image
              src="/images/Ads Banner.png"
              alt="Ad"
              width={300}
              height={200}
              className="rounded"
            />
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-4 mb-8">
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-2">
              {[
                {
                  image: "/recent1.png",
                  date: "22 oct 2022",
                  description: "Lorem ipsum dolor sit amet",
                },
                {
                  image: "/recent2.png",
                  date: "22 oct 2022",
                  description: "Lorem ipsum dolor sit amet",
                },
                {
                  image: "/recent3.png",
                  date: "22 oct 2022",
                  description: "Lorem ipsum dolor sit amet",
                },
                {
                  image: "/recent4.png",
                  date: "22 oct 2022",
                  description: "Lorem ipsum dolor sit amet",
                },
              ].map((post, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Image
                    src={post.image}
                    alt="Recent Post"
                    width={50}
                    height={50}
                  />
                  <div className="text-start">
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <span className="block text-sm text-gray-400">
                      {post.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Tags */}
          <div>
            <p className="font-bold mb-2">Product Tags</p>
            <ul className="flex flex-wrap gap-2">
              {[
                "Services",
                "Our Menu",
                "Pizza",
                "Cupcake",
                "Burger",
                "Cookies",
                "Our Shop",
                "Tandoori Chicken",
              ].map((tag) => (
                <li
                  key={tag}
                  className="px-3 py-1 text-gray-400 border rounded cursor-pointer hover:text-brand hover:underline"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default ShopPage;
