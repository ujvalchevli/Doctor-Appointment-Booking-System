import React, { useContext } from "react";
import AdminContext from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function Slidbar() {
  const { aToken } = useContext(AdminContext);

  return (
    <div className="min-h-362 sm:min-h-270  bg-white border-r shadow-lg w-48 sm:w-56 md:w-64 lg:w-72 p-4 overflow-y-auto shrink-0 hidden md:block">
      {aToken && (
        <ul className="text-gray-700 space-y-2 mt-5">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-100 ${
                isActive
                  ? "bg-blue-100 text-blue-700 border-r-4 border-blue-500"
                  : ""
              }`
            }
            to={"/admin-dashbord"}
          >
            <img
              src={assets.home_icon}
              alt="Dashboard Icon"
              className="w-6 h-6"
            />
            <p className="text-sm sm:text-base  font-medium">Dashboard</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-100 ${
                isActive
                  ? "bg-blue-100 text-blue-700 border-r-4 border-blue-500"
                  : ""
              }`
            }
            to={"/all-appointment"}
          >
            <img
              src={assets.appointment_icon}
              alt="All Appointment Icon"
              className="w-6 h-6"
            />
            <p className="text-sm sm:text-base font-medium">All Appointment</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-100 ${
                isActive
                  ? "bg-blue-100 text-blue-700 border-r-4 border-blue-500"
                  : ""
              }`
            }
            to={"/add-doctor"}
          >
            <img
              src={assets.add_icon}
              alt="Add Doctor Icon"
              className="w-6 h-6"
            />
            <p className="text-sm sm:text-base font-medium">Add Doctor</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-100 ${
                isActive
                  ? "bg-blue-100 text-blue-700 border-r-4 border-blue-500"
                  : ""
              }`
            }
            to={"/doctor-list"}
          >
            <img
              src={assets.people_icon}
              alt="Doctor List Icon"
              className="w-6 h-6"
            />
            <p className="text-sm sm:text-base font-medium">Doctor List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
}

export default Slidbar;
