import React from "react";
import { WhiteBtn } from "../generic/WhiteBtn";
import { useRouter } from "next/navigation";

const Historical = () => {
  const router = useRouter();
  return (
    <div className="relative min-h-screen w-full flex items-center bg-black overflow-hidden mt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: 'url("/landmarks/shipwreck/01.JPG")' }}
      ></div>

      {/* Top fade overlay */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white to-transparent"></div>

      {/* Bottom fade overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent"></div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl self-start mt-32 justify-self-start md:ml-32  text-left px-4">
        <h1 className="text-white font-serif text-4xl md:text-7xl font-light mb-2 md:mb-8">
          Discover Historical
        </h1>
        <h1 className="text-white font-serif text-4xl md:text-7xl font-light mb-4 md:mb-8">
          Treasures
        </h1>
        {/* <p className="text-white text-sm md:text-base mb-6 max-w-xl mx-auto">
          Experience the rich tapestry of history through curated excursions
          that immerse you in timeless stories and enduring legacies.
        </p> */}
        <WhiteBtn onClickEvent={() => router.push('/landmarks')}>Discover More</WhiteBtn>
      </div>
    </div>
  );
};

export default Historical;
