import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import AdminContext from "../context/AdminContext";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const { aToken, setAtoken } = useContext(AdminContext);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    aToken && setAtoken("");
    aToken && localStorage.removeItem("atoken");
  };
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-sm">
        <img className="w-36 sm:w-40" src={assets.admin_logo} alt="" />
        <p className="rounded-full px-2.5 py-0.5 border border-gray-500 text-gray-500">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        className="bg-primary text-white px-4 py-1 rounded-4xl text-base hidden md:block "
        onClick={logout}
      >
        Logout
      </button>
      <img
        onClick={() => setShowMenu(true)}
        src={assets.menu_icon}
        alt="Menu icon"
        className="w-6 md:hidden ml-auto"
      />
      <div
        className={`${
          showMenu ? "fixed w-full" : "h-0 w-0"
        } md:hidden top-0 bottom-0 right-0 z-20 overflow-hidden bg-white transition-all`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <img className="w-36" src={assets.logo} alt="" />
          <img
            className="w-7"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="Close menu"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <NavLink to="/admin-dashbord" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 rounded inline-block">Dashboard</p>
          </NavLink>
          <NavLink to="all-appointment" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 rounded inline-block"> All Appointment</p>
          </NavLink>
          <NavLink to="/add-doctor" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 rounded inline-block">Add Doctor</p>
          </NavLink>
          <NavLink to="/doctor-list" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 rounded inline-block">Doctor List</p>
          </NavLink>
          <NavLink onClick={logout}>
            <p className="px-4 py-2 rounded inline-block bg-primary text-white" style={{color:"white"}}>Logout</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
