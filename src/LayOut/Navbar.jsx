// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
              <NavLink to="/">Home </NavLink>
            </li>
            <li>
              <NavLink to="/rooms">Rooms</NavLink>
            </li>
            <li>
              <NavLink to="/bookings">My Bookings</NavLink>
            </li>
          </ul>
        </div>
        <a>
          <img src={logo} alt="" className="max-w-[200px]" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/rooms">Rooms</NavLink>
          </li>
          <li>
            <NavLink to="/bookings">My Bookings</NavLink>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn  btn-circle avatar">
            <div className="text-2xl">
              {user ? (
                <div className="w-8 h-8 rounded-full">
                  <img src={user?.photoURL} alt="" className="w-8 h-8 rounded-full" />
                </div>
              ) : (
                <FaUserCircle></FaUserCircle>
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-lime-300 rounded-box w-52"
          >
            {user ? (
              <>
                <li>
                  <p className="text-center">{user.displayName}</p>
                </li>
                <li>
                  <NavLink onClick={handleLogOut}>Log Out</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

