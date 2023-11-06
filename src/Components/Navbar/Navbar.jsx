import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLink = (
    <>
      <li className="text-[16px] font-bold text-black">
        <NavLink
          to="/"
          className="text-black"
          activeclassname="text-primary-600"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          className="text-[16px] font-bold text-black"
          activeclassname="text-primary-600"
        >
          Service
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className="text-[16px] font-bold text-black"
          activeclassname="text-primary-600"
        >
          Log In
        </NavLink>
      </li>

       {
        user?.email? (
          <li tabIndex={0}>
          <details>
            {/* <summary className="text-[18px] font-bold text-black">Dashboard</summary> */}
            <summary className="text-[18px] font-bold text-black">
              Dashboard
            </summary>
            <ul className="p-2">
              <li>
                <NavLink
                  to="/my-services"
                  className="text-black shadow-md text-[14px] font-bold"
                  activeclassname="text-primary-600"
                >
                  My Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-services"
                  className="text-black shadow-md text-[14px] font-bold"
                  activeclassname="text-primary-600"
                >
                  Add Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-schedules"
                  className="text-black shadow-md text-[14px] font-bold"
                  activeclassname="text-primary-600"
                >
                  My Schedules
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
        ) : ""
       } 

    </>
  );

  return (
    <div>
      <div className="navbar bg-[#cbdfbd] shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link to={"/"}>
            <img
              className="w-[230px]"
              src="https://svgur.com/i/zJG.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 z-20 bg-[#cbdfbd]">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-lg dropdown-content bg-white rounded-box h-[]"
              >
                <li>
                  <a>{user.displayName}</a>
                </li>
                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://i.ibb.co/s5zPXPr/accoung-img.jpg"
                      alt="User Avatar"
                    />
                  </div>
                </label>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
