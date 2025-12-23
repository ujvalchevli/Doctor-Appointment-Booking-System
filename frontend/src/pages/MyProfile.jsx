import React, { useState } from "react";
import { assets } from "../assets/assets";

function MyProfile() {
  const [userdata, setUserdata] = React.useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "9876543210",
    assdress: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "12-05-1990",
  });

  const [isedit, setIsedit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userdata.image} alt="Profile" />
      {isedit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userdata.name}
          onChange={(e) =>
            setUserdata((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userdata.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-px border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userdata.email}</p>
          <p className="font-medium">Phone:</p>
          {isedit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userdata.phone}
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userdata.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isedit ? (
            <p>
              <input
                className="bg-gray-100 "
                type="text"
                onChange={(e) =>
                  setUserdata((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userdata.assdress.line1}
              />
              <br />
              <input
                className="bg-gray-100"
                type="text"
                onChange={(e) =>
                  setUserdata((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userdata.assdress.line2}
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userdata.assdress.line1}
              <br />
              {userdata.assdress.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isedit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userdata.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userdata.gender}</p>
          )}
          <p className="font-medium">BirthDay:</p>
          {isedit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              value={userdata.dob}
              onChange={(e) =>
                setUserdata((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-400">{userdata.dob}</p>
          )}
        </div>
      </div>
      <div>
        {isedit ? (
          <button
            className="border border-primary rounded-full px-8 py-2 mt-3 hover:bg-primary hover:text-white transition-all "
            onClick={() => setIsedit(false)}
          >
            Save
          </button>
        ) : (
          <button
            className="border border-primary rounded-full px-8 py-2 mt-3 hover:bg-primary hover:text-white transition-all "
            onClick={() => setIsedit(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
