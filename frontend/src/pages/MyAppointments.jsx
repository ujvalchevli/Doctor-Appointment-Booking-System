import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function MyAppointments() {
  const { doctors } = useContext(AppContext);
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <p className="mt-5 mb-5 font-medium text-2xl text-gray-700">
        My appointments
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 mb-4 bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              className="w-24 h-24 rounded-full mb-4 object-cover"
              src={item.image}
              alt={item.name}
            />
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              {item.name}
            </h2>
            <p className="text-gray-600 mb-2 text-sm">
              Speciality: {item.speciality}
            </p>
            <p className="text-gray-600 mb-1 text-sm">{item.address.line1}</p>
            <p className="text-gray-600 mb-3 text-sm">{item.address.line2}</p>
            <p className="text-gray-600 mb-4 text-sm font-medium">
              Date & Time: 25, July, 2024 | 8:30 PM
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <button className="flex-1 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-all font-medium">
                Cancel Appointment
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all font-medium">
                Pay Online
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointments;
