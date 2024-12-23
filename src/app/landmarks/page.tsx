"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function LandmarksPage() {
  const sectionRefs = useRef<any>([]);

  useEffect(() => {
    // Basic example of fading in sections using GSAP
    // Add each section to sectionRefs when rendering
    sectionRefs.current.forEach((sec: any, i: any) => {
      gsap.fromTo(
        sec,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1, delay: i * 0.3 }
      );
    });
  }, []);

  const addToRefs = (el: any) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="bg-[#f2f2f2] text-neutral-800 font-sans">
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        {/* Container for top heading/text + illustration (optional) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: “The history” label + Title + Text */}
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              Landmarks & Historical Sites
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4 leading-tight">
              A 300 Year Glimpse <br className="hidden md:block" />
              Into the Island's Heritage
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mathiveri Kuda Miskiy, built 300 years ago, is a small, historic
              mosque in Mathiveri, offering a glimpse into the island's rich
              heritage
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Great Banyan Tree in Mathiveri is an ancient landmark, visible
              from the island's shore, and frequently visited by tourists.
            </p>
          </div>

          {/* Right Column: Optional illustration or decorative image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 hidden md:block">
              <Image
                src="/landmarks/01.png"
                alt="Tower illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className=" py-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
            {/* First (larger) image on desktop */}
            <div className="relative w-full md:w-2/3 h-[30rem]">
              <Image
                src="/landmarks/mosque/01.jpg"
                alt="Sheep"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full md:w-1/3 h-80">
              <Image
                src="/landmarks/nikagas/01.jpg"
                alt="Farmer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 text-gray-800">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: "The Wine" label + big quote */}
            <div>
              {/* <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                Welcome Monument
              </p> */}
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Welcome <br className="hidden md:block" />
                Monument
              </h2>
            </div>
            {/* Right Column: Paragraph + Show more */}
            <div className="max-w-lg">
              <p className="text-base md:text-lg leading-relaxed mb-4">
                The Mathiveri welcome Monument indicate the island's shallow
                lagoon's beauty and island's logoons rich marine lives such as
                Manta ray and surgeonfish, its located in mathiveri harbor
              </p>
            </div>
          </div>

          <div className=" py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-screen-md mx-auto text-gray-800">
              <div className="w-full gap-6 mt-10">
                {/* Card #1: Under 2000 */}
                <div className="w-ful flex flex-col items-center">
                  {/* Image */}
                  <div className="relative w-full h-80">
                    <Image
                      src="/landmarks/welcome/01.JPG"
                      alt="Takeover of the estate"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative min-h-screen w-full flex items-center bg-black overflow-hidden mt-20">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: 'url("/landmarks/shipwreck/01.JPG")' }}
        ></div>

        {/* Top fade overlay */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#f2f2f2] to-transparent"></div>

        {/* Bottom fade overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#f2f2f2] to-transparent"></div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-4xl self-start mt-48 justify-self-start ml-32  text-left px-4">
          <h1 className="text-white font-serif text-4xl md:text-7xl font-light mb-8">
            Shipwreck
          </h1>
          <p className="text-white text-lg md:text-2xl mb-6 max-w-xl mx-auto">
            The Mathiveri shipwreck, located in mathiveri lagoon. is attracting
            divers with its underwater allure and marine life
          </p>
        </div>
      </div>
    </div>
  );
}
