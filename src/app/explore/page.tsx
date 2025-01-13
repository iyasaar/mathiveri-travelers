"use client";
import AboutSection2 from "@/components/home/About2";
import GovtInstitutions from "@/components/home/GovtInstitutions";
import Information from "@/components/home/Information";
import Tourism from "@/components/home/Tourism";

const explore = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div
        className="md:h-[200px] h-[150px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/bg.jpg')`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold font-serif tracking-wider">
            EXPLORE MATHIVERI ISLANDS
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-6 md:px-12 lg:px-24 mx-auto">
        <AboutSection2 />
        <Information />
        <Tourism />
        <GovtInstitutions />
      </div>
    </div>
  );
};

export default explore;
