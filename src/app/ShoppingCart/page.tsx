"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  rating: number;
  image: string;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Burger",
      price: 5,
      quantity: 1,
      rating: 5,
      image: "/images/burger.jpg",
    },
    {
      id: 2,
      name: "Fresh Lime",
      price: 3,
      quantity: 1,
      rating: 4,
      image: "/images/freshlime.jpg",
    },
    {
      id: 3,
      name: "Pizza",
      price: 8,
      quantity: 1,
      rating: 3,
      image: "/images/pizza.jpg",
    },
    {
      id: 4,
      name: "Cheese Muffin",
      price: 6,
      quantity: 1,
      rating: 5,
      image: "/images/cheesemuffin.jpg",
    },
    {
      id: 5,
      name: "Chicken Butter",
      price: 10,
      quantity: 1,
      rating: 4,
      image: "/images/chickenbutter.jpg",
    },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = (): string => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

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

      <div className="flex flex-col items-center gap-8 p-4 lg:p-8">
        {/* Shopping Cart Container */}
        <div className="w-full lg:w-3/4 bg-white p-6 border rounded shadow">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2">Product</th>
                  <th className="border-b py-2">Price</th>
                  <th className="border-b py-2">Quantity</th>
                  <th className="border-b py-2">Total</th>
                  <th className="border-b py-2">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={200}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div>
                        <p>{item.name}</p>
                        <p className="text-yellow-500">
                          {"★".repeat(item.rating)}
                          {"☆".repeat(5 - item.rating)}
                        </p>
                      </div>
                    </td>
                    <td className="py-2">${item.price}</td>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <button
                          className="px-2 py-1 bg-gray-200 rounded"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="px-2 py-1 bg-gray-200 rounded"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-2">
                      <button
                        className="text-red-500 font-bold hover:text-yellow-600"
                        onClick={() => handleRemove(item.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Coupon Code and Total Bill Side-by-Side */}
        <div className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-6">
          {/* Coupon Code Container */}
          <div className="flex-1 bg-white p-6 border rounded shadow">
            <h2 className="font-bold text-lg mb-4">Coupon Code</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="p-2 border rounded w-full"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 ">
                Apply
              </button>
            </div>
          </div>

          {/* Total Bill Container */}
          <div className="flex-1 bg-white p-6 border rounded shadow">
            <h2 className="font-bold text-lg mb-4">Total Bill</h2>
            <div className="text-lg">
              <p className="flex justify-between">
                <span>Cart Subtotal</span>
                <span>${calculateTotal()}</span>
              </p>
              <p className="flex justify-between">
                <span>Shipping Charge</span>
                <span>$00.00</span>
              </p>
              <p className="flex justify-between font-bold">
                <span>Total Amount</span>
                <span>${calculateTotal()}</span>
              </p>
            </div>
            <button className="bg-yellow-500 text-white w-full py-2 mt-4 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
