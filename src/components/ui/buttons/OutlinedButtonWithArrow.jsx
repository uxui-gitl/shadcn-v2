import React, { useState } from "react";

const OutlinedButtonWithArrow = ({ onClick, size = 24, arrowColor = "black" }) => {
  // Define size classes or inline styles based on the size prop
  const sizeClasses = {
    16: { button: "w-4 h-4", svg: "w-2 h-2" },
    24: { button: "w-6 h-6", svg: "w-3 h-3" },
    32: { button: "w-8 h-8", svg: "w-4 h-4" },
    48: { button: "w-12 h-12", svg: "w-6 h-6" },
    56: { button: "w-14 h-14", svg: "w-6 h-6" },
    64: { button: "w-16 h-16", svg: "w-6 h-6" },
    96: { button: "w-24 h-24", svg: "w-6 h-6" },
  };

  const selectedSize = sizeClasses[size] || sizeClasses[24]; // Default to size 24 if not matched
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) onClick(); // Invoke the onClick function passed from the parent if it exists
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center border-2 text-blue-500 font-semibold rounded-full bg-transparent transition-transform transform hover:scale-110 hover:-rotate-45 focus:outline-none ${
        isActive ? "rotate-[135deg]" : ""
      } ${selectedSize.button}`}
      style={{ borderColor: arrowColor }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={arrowColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={selectedSize.svg}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
};

export default OutlinedButtonWithArrow;
