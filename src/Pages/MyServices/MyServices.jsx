import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Providers/AuthProvider";
import MyServicesShow from "./MyServicesShow";
import Swal from "sweetalert2";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  const [getMyServices, setGetMyServices] = useState([]);


  const url = `http://localhost:5000/allservices?serviceEmail=${user.email}`;

  useEffect(() => {
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setGetMyServices(data)
    })
  }, [url]);

  console.log(getMyServices)

  const handleDelete = (_id) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/allservices/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                const remaining = getMyServices?.filter((getMyService)=> getMyService._id !== _id)
                setGetMyServices(remaining)
                
              }
            });
        }
      });
  }


  return (
    <div>
      <Helmet>
        <title>BloomCraft | DashBoard | My Services</title>
      </Helmet>
     <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-[50px]">
     {
        getMyServices?.map((getMyService)=><MyServicesShow key={getMyService._id} getMyService={getMyService} handleDelete={handleDelete}></MyServicesShow>)
      }
     </div>
    </div>
  );
};

export default MyServices;
