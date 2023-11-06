import { useEffect, useState } from "react";
import AllServices from "./AllServices";

const Services = () => {
  const [allServices, setAllServices] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allservices")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);

  const filteredServices = allServices.filter((service) =>
    service.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const limitedServices = showAll ? filteredServices : filteredServices.slice(0, 6);

  return (
    <div>
      <div className="mt-[50px]">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-[25px] text-[#74c69d]">Search Here</h2>
        <input
          type="text"
          placeholder="Search by Service Name"
          className="input input-bordered w-full max-w-4xl"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-[50px]">
        {limitedServices.map((allService) => (
          <AllServices key={allService._id} allService={allService}></AllServices>
        ))}
      </div>
      {filteredServices.length > 6 && (
        <div className="mb-[100px] text-center mt-[50px]">
          <button className="btn bg-[#74c69d] text-white" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Services;
