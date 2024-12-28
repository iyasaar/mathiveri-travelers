import FacilitiesList from "@/components/facilities/FacilitiesList";

const FacilitiesPage = () => {
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
            FACILITIES
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-medium font-serif mb-8">
          Available Facilities
        </h2>
        <FacilitiesList />
      </div>
    </div>
  );
};

export default FacilitiesPage;
