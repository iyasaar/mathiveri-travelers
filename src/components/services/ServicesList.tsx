import { image } from "framer-motion/client";
import ServicesItem from "./ServicesItem";
import { serviceData } from "./serviceData";

const ServicesList = () => {
  const services = serviceData;

  return (
    <div>
      {services.map((service) => (
        <ServicesItem key={service.id} service={service} />
      ))}
    </div>
  );
};
export default ServicesList;
