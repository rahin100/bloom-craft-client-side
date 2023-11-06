import { useEffect, useState } from "react";
import ServicesShow from "./ServicesShow";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

//   console.log(services);

  return (
    <div>
      <div>
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-[25px] text-center text-[#74c69d]">
          Popular Services
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mb-[40px]">
        {services?.map((service) => (
          <ServicesShow key={service._id} service={service}></ServicesShow>
        ))}
      </div>
      <div className="text-center mb-[70px]">
        <Link to="/services">
          <button className="btn bg-[#74c69d] text-white">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
