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

    const serviceimage = form.serviceimage.value;
    const servicename = form.servicename.value;
    const yourname = form.yourname.value;
    const useremail = form.useremail.value;
    const servicearea = form.servicearea.value;
    const description = form.description.value;
    const price = form.price.value;
    const serviceproviderimage = form.serviceproviderimage.value;

    const addProduct = {
      serviceimage,
      servicename,
      yourname,
      useremail,
      servicearea,
      description ,
      price,
      serviceproviderimage
    };
    console.log(addProduct);

    fetch('http://localhost:5000/allservices',{
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
        <title>BloomCraft | DashBoard | Add Services</title>
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
                  name="serviceimage"
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
                  name="servicename"
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
                    name="yourname"
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
                <span className="label-text">Service Area</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="servicearea"
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
                  name="description"
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
                  name="price"
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
                    name="serviceproviderimage"
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
