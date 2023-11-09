import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import MySchedulesShow from "./MySchedulesShow";
import { AuthContext } from "../../Providers/AuthProvider";

const MySchedules = () => {
  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);

  const url = `https://bloom-craft-garden-server.vercel.app/bookings?serviceEmail=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyBookings(data);
      });
  }, [url]);

  const handleConfirm = (_id) => {
    fetch(`https://bloom-craft-garden-server.vercel.app/bookings/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: 'confirm' }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = myBookings.filter((myBooking) => myBooking._id !== _id);
          console.log(remaining)
          const updated = myBookings.find((myBooking) => myBooking._id === _id);
          console.log(updated)
          updated.status = 'confirm';
          const newBooking = [updated, ...remaining];
          console.log(newBooking)
          setMyBookings(newBooking);
        }
      });
  };

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
          <p className="lg:text-4xl md:text-3xl text-2xl font-bold mb-[25px] text-red-600 text-center">
            No bookings available at the moment.
          </p>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
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
                    <MySchedulesShow
                      key={data._id}
                      data={data}
                      handleConfirm={handleConfirm}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <div className="my-[30px]">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-[25px] text-[#74c69d]">
          My Pending works
        </h2>
        {myBookings.length === 0 ? (
          <p className="lg:text-4xl md:text-3xl text-2xl font-bold mb-[25px] text-red-600 text-center">
            There is no pending work.
          </p>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
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
                    <MySchedulesShow
                      key={data._id}
                      data={data}
                      handleConfirm={handleConfirm}
                    />
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
