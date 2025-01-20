import ServicesList from "@/components/services/ServicesList";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div
        className="md:h-[230px] h-[200px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/bg.jpg')`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold font-serif tracking-wider md:mt-0 mt-8">
            SERVICES
          </h1>
        </div>
      </div>

      <div className="py-12 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-medium font-serif mb-8">
          Service Available
        </h2>

        <ServicesList />
      </div>
    </div>
  );
};

export default ServicesPage;
