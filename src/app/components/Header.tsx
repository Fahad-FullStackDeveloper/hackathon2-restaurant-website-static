"use client";
import React from "react";
import Link from "next/link";

// Header1 Component
export const Header = () => {
  return (
    <header className="text-base-contrast py-4">
      <div className="container mx-auto px-4 flex justify-center items-center mt-5">
        <Link href="#" className="text-2xl font-bold">
          <span className="text-brand">Food</span>
          <span className="text-base-contrast">tuck</span>
        </Link>
      </div>
    </header>
  );
};

// // Header2 Component
// export const Header2 = () => {
//   return (
//     <header
//       className="bg-base text-base-contrast py-16 bg-cover bg-center"
//       style={{ backgroundImage: `url('/images/HeaderBG.png')` }} // Change the path to your image
//     >
//       <div className="container mx-auto px-4 flex flex-col justify-center items-center text-center">
//         {/* Main Heading */}
//         <h1 className="text-5xl font-bold mb-4">
//           <span className="text-brand">Our</span>
//           <span className="text-base-contrast"> Menu</span>
//         </h1>

//         {/* Page Route */}
//         <p className="text-lg">
//           Home <span className="mx-2">/</span>
//           <span className="text-brand">Menu</span>{" "}
//           {/* Changed color to brand */}
//         </p>
//       </div>
//     </header>
//   );
// };
