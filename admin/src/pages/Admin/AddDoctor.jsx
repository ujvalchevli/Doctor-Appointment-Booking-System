import React from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { useContext } from "react";
import AdminContext from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

function AddDoctor() {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [specialization, setSpecialization] = useState("General physician");
  const [education, setEducation] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [about, setAbout] = useState("");

  const { backedurl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Please Upload Doctor Image");
      }
      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", specialization);
      formData.append("degree", education);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
      const { data } = await axios.post(
        backedurl + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName("");
        setEmail("");
        setPassword("");
        setExperience("1 Year");
        setFees("");
        setSpecialization("General physician");
        setEducation("");
        setAddress1("");
        setAddress2("");
        setAbout("");
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full max-w-4xl mx-1 sm:mx-auto  p-3 sm:p-5 bg-white shadow-lg rounded-lg my-8"
    >
      <p className="text-xl sm:text-3xl font-bold mb-4 sm:mb-5 text-gray-800 text-center">
        Add Doctor
      </p>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col items-center mb-2">
          <label
            htmlFor="doctor-img"
            className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-3 sm:p-4 hover:border-blue-500 transition-colors duration-300"
          >
            <img
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="Upload Area"
              className="w-20 h-20 sm:w-25 sm:h-25 object-cover rounded-lg"
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doctor-img"
            hidden
          />
          <p className="mt-3 text-gray-600 text-[12px] sm:text-lg">
            Upload Doctor Picture
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="space-y-4">
            <div className="flex flex-col">
              <p className="text-gray-700 font-medium mb-2">Doctor Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Enter Doctor's Name"
                required
                className="p-3 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 font-medium mb-2">Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter Doctor's Email"
                required
                className="p-3 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 font-medium mb-2">Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter Doctor's Password"
                required
                className="p-3 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 font-medium mb-2">
                Doctor Experience
              </p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                name="experience"
                id="experience"
                className="p-3 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1 year">1 year</option>
                <option value="2 year">2 year</option>
                <option value="3 year">3 year</option>
                <option value="4 year">4 year</option>
                <option value="5 year">5 year</option>
                <option value="6 year">6 year</option>
                <option value="7 year">7 year</option>
                <option value="8 year">8 year</option>
                <option value="9 year">9 year</option>
                <option value="10 year">10 year</option>
              </select>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 font-medium mb-2">Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                type="number"
                placeholder="Enter Consultation Fees"
                required
                className="p-3 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col">
              <p className="text-gray-700 font-medium mb-2">
                Doctor Specialization
              </p>
              <select
                onChange={(e) => setSpecialization(e.target.value)}
                value={specialization}
                name="specialization"
                id="specialization"
                className="p-3 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
              </select>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 font-medium mb-2">Education</p>
              <input
                onChange={(e) => setEducation(e.target.value)}
                value={education}
                type="text"
                placeholder="Enter Doctor's Education"
                required
                className="p-3 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 font-medium mb-2">Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                type="text"
                placeholder="Address Line 1"
                required
                className="p-3 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                type="text"
                placeholder="Address Line 2 (Optional)"
                className="p-3 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-700 font-medium mb-2">About</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            name="about"
            id="about"
            rows="4"
            className="w-full p-3 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            placeholder="Enter a brief description about the doctor"
            sm:rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold text-base sm:text-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddDoctor;
