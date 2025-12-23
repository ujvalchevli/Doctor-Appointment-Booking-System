import React from "react";
import { useContext } from "react";
import { useState } from "react";
import AdminContext from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAtoken, backedurl } = useContext(AdminContext);

  const onSubmithandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Admin") {
        const { data } = await axios.post(backedurl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("atoken", data.token);
          setAtoken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmithandler} className="min-h-[80vh] flex items-center">
      <div
        className="flex flex-col gap-3 m-auto items-start p-8 sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg"
        style={{ minWidth: "325px" }}
      >
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button className="w-full text-white bg-primary py-2 rounded-md text-base">
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login{" "}
            <span
              className="cursor-pointer text-blue-500 underline"
              onClick={() => setState("Doctor")}
            >
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Admin Login{" "}
            <span
              className="cursor-pointer text-blue-500 underline"
              onClick={() => setState("Admin")}
            >
              Click Here
            </span>
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;
