"use client";
import ProvidersList from "@/components/services/ProvidersList";
import { useParams } from "next/navigation";

const Provider = () => {
  const { slug } = useParams();
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div
        className="h-[200px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/bg2.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold font-serif tracking-wider">
            Service Providers
          </h1>
        </div>
      </div>

      <div className="py-12 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-medium font-serif mb-8">
            Providers
        </h2>

        <ProvidersList slug={slug} />
      </div>
    </div>
  );
};

export default Provider;
