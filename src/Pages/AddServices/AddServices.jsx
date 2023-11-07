import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddServices = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <div>
      <div className="bg-[#F4F3F0] lg:p-24 mb-[30px]">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-[25px] text-center text-[#74c69d]">Add a Service</h2>
        <form>
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
          <div className="mb-8">
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
