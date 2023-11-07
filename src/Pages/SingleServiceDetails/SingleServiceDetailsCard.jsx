import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

/* eslint-disable react/prop-types */
const SingleServiceDetailsCard = ({ singleServices }) => {
  const { user } = useContext(AuthContext);
  const {
    serviceImage,
    serviceName,
    serviceDescription,
    serviceProvider,
    servicePrice,
  } = singleServices;

  if (!serviceProvider) {
    return null;
  }

  const handleAddToBooking = (event) => {
    event.preventDefault();

    const form = event.target;

    const serviceimage = form.serviceimage.value;
    const servicename = form.servicename.value;
    const serviceemail = form.serviceemail.value;
    const useremail = form.useremail.value;
    const date = form.date.value;
    const specialinstruction = form.specialinstruction.value;
    const price = form.price.value;

    const bookingServices = {
      serviceimage,
      servicename,
      serviceemail,
      useremail,
      date,specialinstruction,
      price,
    };

    console.log(bookingServices);


    //send data to server
    fetch('http://localhost:5000/bookings',{
      method:"POST",
      headers: {
        "content-type": "application/json"
      },
      body:JSON.stringify(bookingServices)

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        toast.success('Successfully data added!')
      }
    })


  };



  return (
    <div className="my-10 mx-auto">
      <div>
        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <img
              src={serviceProvider.image}
              alt="tania andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {serviceProvider.name}
                </h5>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                {serviceProvider.email}
              </p>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                {serviceProvider.serviceArea}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative max-w-[500px] flex w-full flex-col rounded-xl bg-white bg-clip-border shadow-lg">
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
              <div>
                <p className="block  text-[18px] font-medium antialiased leading-relaxed ">
                  {serviceProvider.name}
                </p>
                <p className="block  text-[18px] font-medium antialiased leading-relaxed ">
                  Service_Area: {serviceProvider.serviceArea}
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 pt-3">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="block w-full select-none rounded-lg bg-[#71B280] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Book Now
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-[25px] text-center text-[#74c69d]">
                  Book Now
                </h3>
                <p className="py-4">
                  <form onSubmit={handleAddToBooking}>
                    {/* first row*/}
                    <div className="md:flex mb-8">
                      <div className="form-control md:w-1/2">
                        <label className="label">
                          <span className="label-text">Service Image</span>
                        </label>
                        <label className="input-group">
                          <input
                            type="text"
                            name="serviceimage"
                            defaultValue={serviceImage}
                            placeholder="Image"
                            className="input input-bordered w-full"
                          />
                        </label>
                      </div>
                      <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                          <span className="label-text"> Service Name </span>
                        </label>
                        <label className="input-group">
                          <input
                            type="text"
                            name="servicename"
                            defaultValue={serviceName}
                            placeholder="Name"
                            className="input input-bordered w-full"
                          />
                        </label>
                      </div>
                    </div>
                    {/* second row*/}
                    <div className="md:flex mb-8 gap-4">
                      <div className="form-control md:w-1/2">
                        <label className="label">
                          <span className="label-text">
                            Service Provider Email
                          </span>
                        </label>
                        <label className="input-group">
                          <input
                            type="email"
                            name="serviceemail"
                            defaultValue={serviceProvider.email}
                            placeholder="email"
                            className="input input-bordered w-full"
                          />
                        </label>
                      </div>
                      {user?.email ? (
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text">User Email</span>
                          </label>
                          <label className="input-group">
                            <input
                              type="email"
                              name="useremail"
                              defaultValue={user.email}
                              placeholder="email"
                              className="input input-bordered w-full"
                            />
                          </label>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* Third row */}
                    <div className="md:flex mb-8">
                      <div className="form-control md:w-1/2">
                        <label className="label">
                          <span className="label-text">
                            Service Taking Date
                          </span>
                        </label>
                        <label className="input-group">
                          <input
                            type="date"
                            name="date"
                            placeholder="date"
                            className="input input-bordered w-full"
                          />
                        </label>
                      </div>
                      <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                          <span className="label-text">
                            Special instruction
                          </span>
                        </label>
                        <label className="input-group">
                          <input
                            type="text"
                            name="specialinstruction"
                            placeholder="Special instruction"
                            className="input input-bordered w-full"
                          />
                        </label>
                      </div>
                    </div>
                    {/* fourth row*/}
                    <div className="mb-8">
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                          <input
                            type="text"
                            name="price"
                            defaultValue={servicePrice}
                            placeholder="Price"
                            className="input input-bordered w-full"
                          />
                        </label>
                      </div>
                    </div>
                    <input type="submit" value="Purchase this Service" className="block w-full select-none rounded-lg bg-[#71B280] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn" />
                  </form>
                </p>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceDetailsCard;
