import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

function Appointment() {
  const { docId } = useParams();
  const { doctors,currencySymbol } = useContext(AppContext);
  const [doctorinfo, setDoctorinfo] = React.useState([]);
  console.log(docId);

  const fetchDoctorInfo = async () => {
    const docData = doctors.find((doc) => doc._id === docId);
    setDoctorinfo(docData);
    console.log(docData);
  };

  React.useEffect(() => {
    fetchDoctorInfo();
  }, [doctors, docId]);
  return (
    doctorinfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={doctorinfo.image}
              alt="doctor image"
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 -mt-20 sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {doctorinfo.name}
              <img className="w-5" src={assets.verified_icon} />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {doctorinfo.degree} - {doctorinfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {doctorinfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium mt-3 text-gray-900">
                About <img src={assets.info_icon} />
              </p>
              <p className="text-sm text-gray-500 mx-w-[700px] mt-1">
                {doctorinfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee: <span className="text-gray-600">{currencySymbol}{doctorinfo.fees}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    )
  );
}

export default Appointment;
