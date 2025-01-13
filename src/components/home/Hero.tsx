import Navbar from "../nav/Navbar";
import { Cedarville_Cursive } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const cedar = Cedarville_Cursive({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  const imageRef: any = useRef(null);
  const textRef: any = useRef(null);
  const cardsRef: any = useRef([]);

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

    // Cards animation after the text loads
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: "power2.out",
        stagger: 0.2,
      }
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
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Text Section */}
      <div className="flex md:flex-row flex-col-reverse  w-full justify-center items-center md:gap-0 gap-36 h-full pl-4 sm:pl-8 md:pl-12">
        <div className="relative z-10 grid grid-cols-1 gap-8 w-11/12 sm:w-2/3 md:mt-0 -mt-12">
          {[
            { title: "How to reach Mathiveri", href: "/reach-mathiveri" },
            { title: "How to stay in Mathiveri", href: "/stay-mathiveri" },
            {
              title: "Things to do in Mathiveri",
              href: "/things-to-do-mathiveri",
            },
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              <div
                ref={(el: any) => (cardsRef.current[index] = el)}
                className="bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 rounded-lg p-6 shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-opacity-30"
              >
                <h2 className="text-2xl font-medium text-gray-300">
                  {item.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
        <div className="relative z-10 flex flex-col justify-start items-end w-full md:h-full pr-4 sm:pr-8 md:pr-12">
          <div className="basis-1/5"></div>
          <h1
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide"
            ref={textRef}
          >
            <span className={cedar.className}>Mathiveri Islands</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
