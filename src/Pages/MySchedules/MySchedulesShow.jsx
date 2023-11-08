/* eslint-disable react/prop-types */
const MySchedulesShow = ({ data, handleConfirm, status }) => {
  const {
    _id,
    serviceImage,
    serviceName,
    serviceEmail,
    userEmail,
    date,
    specialInstruction,
    servicePrice,
  } = data;
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceEmail}
        <br />
      </td>
      <td>{userEmail}</td>
      <td>{date}</td>
      <td>{specialInstruction}</td>
      <td>{servicePrice}</td>
      <th>
        
          {
            status === 'confirm'?  (
              <span className="text-xl text-[#74c69d]">Confirmed</span>
               
            )  : (
              <button
              onClick={() => handleConfirm(_id)}
              className="btn btn-xs"
            >
              Confirm
            </button>
            )
          }
      </th>
    </tr>
  );
};

export default MySchedulesShow;
