import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function MyProfile() {
  const { userData, setUserData, token, backedurl , loadUserProfileData} = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {};

  /* ---------- SAFETY GUARD ---------- */
  if (!userData) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }
  /* --------------------------------- */

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="Profile" />

      {/* NAME */}
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name || ""}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-px border-none" />

      {/* CONTACT INFORMATION */}
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>

        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userData.email}</p>

          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone || ""}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <div>
              <input
                className="bg-gray-100 w-full mb-1"
                type="text"
                placeholder="Line 1"
                value={userData.address?.line1 || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      line1: e.target.value,
                    },
                  }))
                }
              />
              <input
                className="bg-gray-100 w-full"
                type="text"
                placeholder="Line 2"
                value={userData.address?.line2 || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: {
                      ...prev.address,
                      line2: e.target.value,
                    },
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-gray-500">
              {userData.address?.line1}
              <br />
              {userData.address?.line2}
            </p>
          )}
        </div>
      </div>

      {/* BASIC INFORMATION */}
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>

        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-32 bg-gray-100"
              value={userData.gender || "Not Specified"}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  gender: e.target.value,
                }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Not Specified">Not Specified</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-40 bg-gray-100"
              type="date"
              value={userData.dob || ""}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  dob: e.target.value,
                }))
              }
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>

      {/* BUTTON */}
      <div>
        <button
          className="border border-primary rounded-full px-8 py-2 mt-3 hover:bg-primary hover:text-white transition-all"
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? "Save" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
}

export default MyProfile;
