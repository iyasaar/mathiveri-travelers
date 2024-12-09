import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const fetchFacilities = () => {
  // Assuming the folder structure and images are in `public/facilities`
  const facilityFolders = [
    { name: "Accommodation & Food", image: "/facilities/Accomodation-&-Food/01.jpg" },
    { name: "ATM", image: "/facilities/ATM/01.jpg" },
    { name: "Children Park", image: "/facilities/Children-Park/01.jpg" },
    { name: "Excursion Trips", image: "/facilities/Exursion-Trips/01.jpg" },
    {
      name: "Hair Dressing & Spa Treatments",
      image: "/facilities/Hair-Dressing-&-Spa-Treatments/01.jpg",
    },
    { name: "Indoor & Outdoor Gym", image: "/facilities/Indoor-&-Outdoor-Gym/01.jpg" },
    { name: "Land Sports", image: "/facilities/Land-Sports/01.jpg" },
    {
      name: "Modern Medicine & Local Treatments",
      image: "/facilities/Modern-Medicine-&-Local-Treatments/01.jpg",
    },
    { name: "Pharmacy", image: "/facilities/Pharmacy/01.png" },
    { name: "Photography", image: "/facilities/Photography/01.jpg" },
    { name: "Traveling", image: "/facilities/Traveling/01.jpg" },
    {
      name: "Water Sports & Dive Centers",
      image: "/facilities/Water-Sports-&-Dive-Centers/01.jpeg",
    },
  ];

  return facilityFolders;
};

const Facilities = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [facilities, setFacilities] = useState<any>([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    const facilitiesData = fetchFacilities();
    setFacilities(facilitiesData);

    const totalWidth = facilitiesData.length * 35; // Assuming each card is 35vw wide
    const endValue = `${totalWidth * 4}vw top`;

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${totalWidth}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: endValue,
          scrub: 1,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div
        style={{
          backgroundImage: `url('/activities/snorkeling/01.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        ref={triggerRef}
      >
        <div
          ref={sectionRef}
          className="h-screen w-[400vw] flex relative items-end"
        >
          {facilities.map((facility: any, index: any) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "w-[40vw] h-[24vh]" : "w-[24vw] h-[40vh]"
              } flex justify-center items-center`}
            >
              <div className="w-4/5 h-4/5 relative">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover rounded-md shadow-lg"
                />
                <h2 className="absolute bottom-4 left-4 text-white text-4xl font-bold">
                  {facility.name.toUpperCase()}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
