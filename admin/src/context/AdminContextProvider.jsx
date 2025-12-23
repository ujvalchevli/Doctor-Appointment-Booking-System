import { useState } from "react";
import AdminContext from "./AdminContext";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminContextProvider = (props) => {
  const [aToken, setAtoken] = useState(
    localStorage.getItem("atoken") ? localStorage.getItem("atoken") : ""
  );
  const [doctors, setDoctors] = useState([]);
  const backedurl = import.meta.env.VITE_BACKED_URL;
  console.log(backedurl);

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(
        backedurl + "/api/admin/all-doctors",
        {},
        { headers: { aToken } }
      );
      if (data.success) {
        setDoctors(data.doctors);
        console.log(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const value = {
    aToken,
    setAtoken,
    backedurl,
    getAllDoctors,
    doctors,
  };
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};
export default AdminContextProvider;
