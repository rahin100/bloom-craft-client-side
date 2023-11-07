import toast from "react-hot-toast";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
// import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const MyServicesShow = ({ getMyService,handleDelete }) => {
 const {user} = useContext(AuthContext)
  const {
    serviceImage,
    serviceName,
    serviceProviderName,
    serviceEmail,
    serviceArea,
    serviceDescription,
    servicePrice,
    serviceProviderImage,
  } = getMyService;

  const handleAddToUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const serviceImage = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const serviceProviderName = form.serviceProviderName.value;
    const serviceEmail = form.serviceEmail.value;
    const serviceArea = form.serviceArea.value;
    const serviceDescription = form.serviceDescription.value;
    const servicePrice = form.servicePrice.value;
    const serviceProviderImage = form.serviceProviderImage.value;

    const updateProduct = {
      serviceImage,
      serviceName,
      serviceProviderName,
      serviceEmail,
      serviceArea,
      serviceDescription,
      servicePrice,
      serviceProviderImage,
    };
    console.log(updateProduct);

    fetch(`http://localhost:5000/allservices/${getMyService._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully data Updated!");
        }
      });
  };


  

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
              src={serviceProviderImage}
              alt=""
            />
            <div>
              <p className="block  text-[18px] font-medium antialiased leading-relaxed ">
                {serviceProviderName}
              </p>
              <p className="block  text-[18px] font-medium antialiased leading-relaxed ">
                {serviceEmail}
              </p>
              <p className="block  text-[18px] font-medium antialiased leading-relaxed ">
                Service_Area: {serviceArea}
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 pt-3">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn block w-full select-none rounded-lg bg-[#71B280] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-[10px]"
            type="button"
            data-ripple-light="true"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Update
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-[25px] text-center text-[#74c69d]">Update Product</h3>
              <p className="py-4">
                <form onSubmit={handleAddToUpdate}>
                  {/* first row*/}
                  <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text">Service Image</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="serviceImage"
                          placeholder="Service Image"
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
                          name="serviceName"
                          placeholder="Service Name"
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>
                  </div>
                  {/* second row*/}
                  <div className="md:flex mb-8 gap-4">
                    {user?.displayName ? (
                      <div className="form-control md:w-1/2">
                        <label className="label">
                          <span className="label-text">Your Name</span>
                        </label>
                        <label className="input-group">
                          <input
                            type="text"
                            name="serviceProviderName"
                            defaultValue={user.displayName}
                            placeholder="name"
                            className="input input-bordered w-full"
                          />
                        </label>
                      </div>
                    ) : (
                      ""
                    )}
                    {user?.email ? (
                      <div className="form-control md:w-1/2">
                        <label className="label">
                          <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                          <input
                            type="email"
                            name="serviceEmail"
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
                        <span className="label-text">Service Area</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="serviceArea"
                          placeholder="Service Area"
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                      <label className="label">
                        <span className="label-text">Description</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="serviceDescription"
                          placeholder="Description"
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>
                  </div>
                  {/* fourth row*/}
                  <div className="md:flex mb-8 gap-3">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          name="servicePrice"
                          placeholder="Price"
                          className="input input-bordered w-full"
                        />
                      </label>
                    </div>
                    {user?.photoURL ? (
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">
                            Service Provider Image
                          </span>
                        </label>
                        <label className="input-group">
                          <input
                            type="photo"
                            name="serviceProviderImage"
                            defaultValue={user.photoURL}
                            placeholder="service provider image"
                            className="input input-bordered w-full"
                          />
                        </label>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <input
                    type="submit"
                    value="Update Service"
                    className="block w-full select-none rounded-lg bg-[#71B280] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn"
                  />
                </form>
              </p>
            </div>
          </dialog>
          <button
           onClick={()=>handleDelete(getMyService._id)}
            className="block w-full select-none rounded-lg bg-[#6a040f] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyServicesShow;
