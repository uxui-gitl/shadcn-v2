import React from "react";

const RoundedButtonWithArrow = () => {
  return (
    <button className="flex items-center justify-center w-24 h-24 bg-blue-500 text-white font-semibold rounded-full transition-transform transform hover:scale-105 hover:-rotate-45 focus:outline-none">
      <span></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-3"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
};

export default RoundedButtonWithArrow;
