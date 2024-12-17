import Navbar from "../nav/Navbar";
import { Cedarville_Cursive } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const cedar = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Fade-in animation for the image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // Text animation after the image loads
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-end">
      {/* Background Image */}
      <div className="absolute inset-0" ref={imageRef}>
        <Image
          src="/introduction/02.jpg"
          alt="Mathiveri Islands"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="relative z-10 flex flex-col justify-start items-end w-full h-full pr-12">
        <div className="basis-1/5"></div>
        <h1
          className="text-white text-4xl md:text-6xl tracking-wide"
          ref={textRef}
        >
          <span className={cedar.className}>Mathiveri Islands</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
