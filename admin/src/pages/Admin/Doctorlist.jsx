import React, { useContext, useEffect } from "react";
import AdminContext from "../../context/AdminContext";

function Doctorlist() {
  const { aToken, getAllDoctors, doctors } = useContext(AdminContext);
  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken, getAllDoctors]);
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
        Doctor List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {doctors.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-blue-400"
              />
              <p className="text-lg font-semibold text-gray-800 mb-1">
                {item.name}
              </p>
              <p className="text-sm text-gray-600 mb-3">{item.speciality}</p>
              <div className="flex items-center space-x-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={item.available}
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <p className="text-sm">Available</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Doctorlist;
