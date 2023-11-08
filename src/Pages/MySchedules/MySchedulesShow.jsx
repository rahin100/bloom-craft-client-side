/* eslint-disable react/prop-types */
const MySchedulesShow = ({ data }) => {
  const {
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
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={serviceImage}
                alt="Avatar Tailwind CSS Component"
              />
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
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default MySchedulesShow;
