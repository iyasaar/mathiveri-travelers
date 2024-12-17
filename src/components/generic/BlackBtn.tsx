import React from "react";

interface BlackBtnProps {
  className?: string;
  children: React.ReactNode;
}

export const BlackBtn: React.FC<BlackBtnProps> = ({ children, className }) => {
  return (
    <button
      className={`mt-4 px-6 py-3 bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
