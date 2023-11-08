import { Helmet } from "react-helmet-async";
import MySchedulesShow from "./MySchedulesShow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MySchedules = () => {
  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);

  const url = `http://localhost:5000/bookings?serviceEmail=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyBookings(data);
      });
  }, [url]);

  console.log(myBookings);

  return (
    <div>
      <Helmet>
        <title>BloomCraft | DashBoard | My Schedule</title>
      </Helmet>
      <div className="my-[30px]">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-[25px] text-[#74c69d]">
          Bookings
        </h2>
        {myBookings.length === 0 ? ( 
          <p className="lg:text-4xl md:text-3xl text-2xl font-bold mb-[25px] text-red-600 text-center">No bookings available at the moment.</p>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Name</th>
                    <th>Service Email</th>
                    <th>User Email</th>
                    <th>Date</th>
                    <th>Special Instruction</th>
                    <th>Service Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {myBookings.map((data) => (
                    <MySchedulesShow key={data._id} data={data}></MySchedulesShow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MySchedules;
