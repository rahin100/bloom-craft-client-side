import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleAddServices = (event) => {
    event.preventDefault();
    const form = event.target;

    const serviceImage = form.serviceImage.value;
    const serviceName = form.serviceName.value;
    const serviceProviderName = form.serviceProviderName.value;
    const serviceEmail = form.serviceEmail.value;
    const serviceArea = form.serviceArea.value;
    const serviceDescription = form.serviceDescription.value;
    const servicePrice = form.servicePrice.value;
    const serviceProviderImage= form.serviceProviderImage.value;

    const addProduct = {
      serviceImage,
      serviceName,
      serviceProviderName,
      serviceEmail,
      serviceArea,
      serviceDescription,
      servicePrice,
      serviceProviderImage
    };
    console.log(addProduct);

    fetch('https://bloom-craft-garden-server-rahinislam030-gmailcom.vercel.app/allservices',{
        method:"POST",
        headers: {
          "content-type": "application/json"
        },
        body:JSON.stringify(addProduct)
  
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
    <div>
      <Helmet>
        <title>BloomCraft | DashBoard | Add</title>
      </Helmet>
      <div className="bg-[#F4F3F0] lg:p-24 mb-[30px]">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-[25px] text-center text-[#74c69d]">
          Add a Service
        </h2>
        <form onSubmit={handleAddServices}>
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
           {
            user?. photoURL?(
                <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Service Provider Image</span>
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
            ) : ""
           }
          </div>

          <input
            type="submit"
            value="Add Service"
            className="block w-full select-none rounded-lg bg-[#71B280] py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AddServices;
