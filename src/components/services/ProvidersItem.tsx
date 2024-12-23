// ProvidersItem.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa"; // Import icons

export interface Provider {
  id: string;
  title: string;
  slug: string; // Added slug for routing
  description: string;
  image: string;
  phone?: string;
  email?: string;
  website?: string;
}

interface ProvidersItemProps {
  provider: Provider;
}

const ProvidersItem: React.FC<ProvidersItemProps> = ({ provider }) => {
  const router = useRouter();

  const handleRouteClick = (slug: string) => {
    router.push(`/providers/${slug}`);
  };

  return (
    <div className="rounded-lg shadow-md p-6 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white">
      {/* Image at the Top */}
      <div className="w-full h-48 relative mb-4">
        <Image
          src={provider.image}
          alt={provider.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
          priority={false} // Set to true if images are above the fold
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-serif mb-2 text-gray-800">
        {provider.title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        {provider.description}
      </p>

      {/* Contact Information */}
      <ul className="space-y-2 text-sm text-gray-700 mb-6">
        {provider.phone && (
          <li className="flex items-center">
            <FaPhoneAlt className="text-main mr-2" />
            <span>{provider.phone}</span>
          </li>
        )}
        {provider.email && (
          <li className="flex items-center">
            <FaEnvelope className="text-main mr-2" />
            <a href={`mailto:${provider.email}`} className="hover:underline">
              {provider.email}
            </a>
          </li>
        )}
        {provider.website && (
          <li className="flex items-center">
            <FaGlobe className="text-main mr-2" />
            <a
              href={
                provider.website.startsWith("http")
                  ? provider.website.replace(/^https?:\/\/(www\.)?/, "https://")
                  : `https://${provider.website.replace(/^www\./, "")}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {provider.website.replace(/^https?:\/\//, "")}
            </a>
          </li>
        )}
      </ul>

      {/* Explore More Button */}
      {/* <button
        onClick={() => handleRouteClick(provider.slug)}
        className="mt-auto px-6 py-3 bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition duration-300 rounded"
      >
        Explore more
      </button> */}
    </div>
  );
};

export default ProvidersItem;
