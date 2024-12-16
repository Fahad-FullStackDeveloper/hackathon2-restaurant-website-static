import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Example using react-icons library

interface RatingProps {
  maxStars?: number; // Default to 5 stars
  color?: string; // Default color for filled stars
  size?: string | number; // Default size for stars
}

const Rating: React.FC<RatingProps> = ({
  maxStars = 5,
  color = "#FF9F0D",
  size = 24,
}) => {
  const [rating, setRating] = useState<number>(0); // State to manage the selected rating

  return (
    <div className="flex space-x-1">
      {[...Array(maxStars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <FaStar
            key={index}
            size={size}
            color={starIndex <= rating ? color : "#D3D3D3"} // Regular color for filled stars, light gray for unfilled
            className="cursor-pointer"
            onClick={() => setRating(starIndex)} // Update rating on click
          />
        );
      })}
    </div>
  );
};

export default Rating;
