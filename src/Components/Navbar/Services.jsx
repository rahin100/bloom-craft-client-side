import { useLoaderData } from "react-router-dom";
import AllServices from "./AllServices";
import { useState } from "react";

const Services = () => {
  const allData = useLoaderData();
  const [displayCount, setDisplayCount] = useState(6);
  const [search, setSearch] = useState(""); 
  console.log(allData);

  const handleShowMore = () => {
    setDisplayCount(displayCount + 6);
  };

  
  const filteredData = allData.filter((data) =>
    data.serviceName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mt-[50px]">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-[25px] text-[#74c69d]">Search Here</h2>
        <input
          type="text"
          placeholder="Search by Service Name"
          className="input input-bordered w-full max-w-4xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-[50px]">
        {filteredData.slice(0, displayCount).map((data) => (
          <AllServices key={data._id} data={data}></AllServices>
        ))}
      </div>
      {displayCount < filteredData.length && (
        <div className="text-center">
          <button
            className="btn bg-[#74c69d] text-white my-[50px]"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Services;
