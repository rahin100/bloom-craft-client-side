import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleServiceDetailsCard from "./SingleServiceDetailsCard";
import { Helmet } from "react-helmet";

const SingleServiceDetails = () => {
  const [singleServices, setAllSingleServices] = useState({});

  const allServices = useLoaderData();
  console.log(allServices);

  const { _id } = useParams();
  console.log(_id);

  useEffect(() => {
    const findSingleServices = allServices?.find(
      (allService) => allService._id === _id
    );
    setAllSingleServices(findSingleServices);
    console.log(setAllSingleServices);
  }, [_id, allServices]);

  console.log(singleServices);

  return (
    <div>
      <Helmet>
        <title>BloomCraft | Services | Single Services</title>
      </Helmet>
      {
        <SingleServiceDetailsCard
          key={singleServices._id}
          singleServices={singleServices}
        ></SingleServiceDetailsCard>
      }
    </div>
  );
};

export default SingleServiceDetails;
