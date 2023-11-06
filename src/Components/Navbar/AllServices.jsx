/* eslint-disable react/prop-types */
const AllServices = ({ allService }) => {
  const {
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProvider,
    servicePrice,
  } = allService;

  return (
    <div>
      <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border  shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img src={serviceImage} alt="ui/ux review check" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {serviceName}
            </h5>
          </div>
          <p className="block text-base antialiased font-light leading-relaxed ">
            {serviceDescription}
          </p>

          <p className="block  text-[20px] antialiased font-light leading-relaxed mt-[10px]">
            Price: {servicePrice}
          </p>
          <h5 className="block text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 mt-[10px]">
            Service Provider Info:
          </h5>
          <div className="mt-[20px] flex items-center gap-5">
            <img
              className="rounded-full w-[100px] h-[100px]"
              src={serviceProvider.image}
              alt=""
            />
            <p className="block  text-[18px] font-medium antialiased leading-relaxed ">
              {serviceProvider.name}
            </p>
          </div>
        </div>
        <div className="p-6 pt-3">
          <button
            className="block w-full select-none rounded-lg bg-[#71B280] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
