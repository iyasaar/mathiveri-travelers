"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const thingsToDo = [
  {
    title: "Experiencing Local Lifestyle",
    description:
      "In Mathiveri, visitors can experience an authentic Maldivian lifestyle by exploring and enjoying traditional meals, wearing Maldivian traditional clothes, participating in fishing trips, visiting houses, and learning about the island’s cultural practices, all while engaging with friendly residents.",
    image: "/things/local-life/01.JPG",
  },
  {
    title: "Excursion Trips",
    description:
      "Mathiveri offers exciting excursion trips, including dolphin watching, manta ray tours, sandbank visits, turtle sightings, whale shark encounters, and island hopping. These trips provide unforgettable experiences with the Maldives' vibrant marine life.",
    image: "/things/excursion-trip/01.PNG",
  },
  {
    title: "Water Sports",
    description:
      "Enjoy thrilling motorized water sports like jet skiing, exploring the island’s coastline, or canoeing through tranquil lagoons. These activities offer adventure, relaxation, and stunning views of the Maldives' natural beauty.",
    image: "/water sports/01.jpeg",
  },
  {
    title: "Diving",
    description:
      "Dive into vibrant coral reefs with professional instructors. Explore underwater landscapes, discover diverse marine life, and enjoy unforgettable experiences in crystal-clear waters, suitable for both beginners and experienced divers.",
    image: "/things/diving/01.PNG",
  },
  {
    title: "Snorkeling",
    description:
      "Snorkeling in the shallow lagoon of Mathiveri offers an incredible experience. Explore colorful coral reefs, swim with tropical fish, and enjoy the clear, warm waters teeming with marine life.",
    image: "/things/snorkeling/01.jpg",
  },
  {
    title: "Sun Bathing",
    description:
      "Relax and sunbathe on the pristine beaches of Mathiveri and nearby Mathiveri Finolhu. Enjoy the serene surroundings, soft white sand, and crystal-clear waters for a perfect tropical escape.",
    image: "/things/sun-bathing/01.JPG",
  },
  {
    title: "Fishing",
    description:
      "Enjoy various types of fishing, including beach fishing, boat fishing, sports fishing, and night fishing. Experience the thrill of catching local fish in the Maldives' pristine waters.",
    image: "/things/fishing/01.PNG",
  },
  {
    title: "Beach Dinners and Picnics",
    description:
      "Enjoy a beach picnic or a private beach dinner under the stars. Relish delicious Maldivian cuisine while surrounded by stunning ocean views and tranquil island beauty.",
    image: "/things/dinner-beach/01.jpeg",
  },
];

const ThingsToDoPage: React.FC = () => {
  return (
    <div className="bg-blue-50 min-h-screen pb-20">
      <div
        className="md:h-[230px] h-[230px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/bg.jpg')`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center md:pt-0 pt-8">
          <h1 className="text-white text-4xl font-bold font-serif tracking-wider text-center">
            THINGS TO DO
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-20 px-4 md:px-8 lg:px-16">
        {thingsToDo.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full h-96 relative mb-6 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
            <p className="text-gray-700 text-base md:text-lg">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThingsToDoPage;
