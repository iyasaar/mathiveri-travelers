import React from "react";

interface WhiteBtnProps {
  className?: string;
  children: React.ReactNode;
  onClickEvent?: () => void;
}

export const WhiteBtn: React.FC<WhiteBtnProps> = ({ children, className, onClickEvent }) => {
  return (
    <button onClick={onClickEvent}
      className={`mt-4 px-6 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};
