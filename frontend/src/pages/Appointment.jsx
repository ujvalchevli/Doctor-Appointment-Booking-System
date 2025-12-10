import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctor from "../components/RelatedDoctor";

function Appointment() {
  const { docId } = useParams();
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const { doctors, currencySymbol } = useContext(AppContext);
  const [doctorinfo, setDoctorinfo] = React.useState([]);
  const [doctorSlot, setDoctorSlot] = React.useState([]);
  const [slotIndex, setSlotIndex] = React.useState(0);
  const [slotTime, setSlotTime] = React.useState("");
  console.log(docId);

  const fetchDoctorInfo = async () => {
    const docData = doctors.find((doc) => doc._id === docId);
    setDoctorinfo(docData);
    console.log(docData);
  };

  const getAvailableSlots = async () => {
    setDoctorSlot([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endtime = new Date();
      endtime.setDate(today.getDate() + i);
      endtime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots = [];
      while (currentDate < endtime) {
        let formattedtime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedtime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDoctorSlot((prevSlots) => [...prevSlots, timeSlots]);
    }
  };

  React.useEffect(() => {
    fetchDoctorInfo();
  }, [doctors, docId]);

  useEffect(() => {
    console.log(doctorSlot);
  }, [doctorSlot]);

  useEffect(() => {
    getAvailableSlots();
  }, [doctorinfo]);

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
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {doctorinfo.fees}
              </span>{" "}
            </p>
          </div>
        </div>

        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {doctorSlot.length &&
              doctorSlot.map((slots, index) => (
                <div
                  onClick={() => {
                    setSlotIndex(index);
                  }}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-gray-800 text-white"
                      : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p>{slots[0] && daysOfWeek[slots[0].datetime.getDay()]}</p>
                  <p>{slots[0] && slots[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-auto mt-4">
            {doctorSlot.length &&
              doctorSlot[slotIndex].map((slot, idx) => (
                <p
                  onClick={() => setSlotTime(slot.time)}
                  className={`text-sm font-light shrink-0 px-5 py-2 rounded-full cursor-pointer  ${
                    slot.time === slotTime
                      ? "bg-gray-800 text-white"
                      : " text-gray-400 border border-gray-300"
                  }`}
                  key={idx}
                >
                  {slot.time.toLowerCase()}
                </p>
              ))}
          </div>
          <div className="mt-6">
            <button
              disabled={slotTime === ""}
              className="bg-gray-800 disabled:bg-gray-400 text-white px-6 py-2 rounded-full"
            >
              Book Appointment
            </button>
          </div>
        </div>
        <RelatedDoctor docId={docId} speciality={doctorinfo.speciality} />
      </div>
    )
  );
}

export default Appointment;
