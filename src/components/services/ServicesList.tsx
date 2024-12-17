import { image } from "framer-motion/client";
import ServicesItem from "./ServicesItem";

const ServicesList = () => {

    const services = [
        {
            id: 1,
            title: "Service 1",
            description: "Description 1",
            image: "/facilities/ATM/01.jpg",
        }
    ]

  return (
    <div>
      {services.map((service) => (
        <ServicesItem key={service.id} service={service} />
      ))}
    </div>
  );
};
export default ServicesList;
