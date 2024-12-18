import FacilitiesItem from "./FacilitiesItem";
import { data } from "./data";

const FacilitiesList = () => {
  const services = data;

  return (
    <div className="space-y-12">
      {" "}
      {/* Add vertical spacing */}
      {services.map((service, index) => (
        <FacilitiesItem key={service.id} service={service} index={index} />
      ))}
    </div>
  );
};

export default FacilitiesList;
