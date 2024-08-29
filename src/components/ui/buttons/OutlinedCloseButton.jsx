import React from "react";

const OutlinedCloseButton = ({ onClick, size = 24, color = "black", className }) => {
  // Define size classes for button and SVG
  const sizeClasses = {
    16: { button: "w-4 h-4", svg: "w-3 h-3" },
    24: { button: "w-6 h-6", svg: "w-4 h-4" },
    32: { button: "w-8 h-8", svg: "w-5 h-5" },
    48: { button: "w-12 h-12", svg: "w-6 h-6" },
    56: { button: "w-14 h-14", svg: "w-6 h-6" },
    64: { button: "w-16 h-16", svg: "w-6 h-6" },
    96: { button: "w-24 h-24", svg: "w-6 h-6" },
  };

  const selectedSize = sizeClasses[size] || sizeClasses[24]; // Default to size 24 if not matched

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center border-2 text-blue-500 font-semibold rounded-full bg-transparent transition-transform transform hover:scale-110 focus:outline-none ${selectedSize.button} ${className}`}
      style={{ borderColor: color }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={selectedSize.svg}
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  );
};

export default OutlinedCloseButton;
