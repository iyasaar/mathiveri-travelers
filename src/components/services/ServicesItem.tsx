import Image from "next/image";

const ServicesItem = ({ service }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={service.image}
          width={400}
          height={250}
          alt="Adaaran Club Rannalhi"
          className="rounded-lg object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            {service.title}
          </h3>
          <p className="text-gray-600 mt-2">{service.description}</p>
          <button className="mt-4 bg-nav text-white px-4 py-2 rounded-lg hover:bg-nav">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
