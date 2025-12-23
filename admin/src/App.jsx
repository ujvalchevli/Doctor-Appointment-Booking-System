import React from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import AdminContext from "./context/AdminContext";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./pages/Admin/Dashbord";
import AllAppointment from "./pages/Admin/AllAppointment";
import AddDoctor from "./pages/Admin/AddDoctor";
import Doctorlist from "./pages/Admin/Doctorlist";
import Slidbar from "./components/Slidbar";

function App() {
  const { aToken } = useContext(AdminContext);
  return aToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Slidbar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/admin-dashbord" element={<Dashbord />} />
          <Route path="/all-appointment" element={<AllAppointment />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctor-list" element={<Doctorlist />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
