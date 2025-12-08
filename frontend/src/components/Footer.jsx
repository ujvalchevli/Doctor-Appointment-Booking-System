import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm mt-40">
        {/* left isde */}
        <div>
          <img
            className="mb-5 w-40"
            src={assets.logo}
            alt=""
            onClick={() => navigate("/")}
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            repellat quo eos voluptates ratione natus aut culpa distinctio sint
            nisi eveniet sit ut perspiciatis quaerat ea aliquam, omnis deleniti
            quidem.
          </p>
        </div>
        {/* center */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About Us</li>
            <li onClick={() => navigate("/contact")}>Contact Us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right side */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>📍123 Doctor St, Health City, HC 12345</li>
            <li> 📞 +91 (234) 567-8901</li>
            <li> 📧 chevliujval@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copywrite text*/}
      <div className="">
        <hr />
        <p className="py-5 text-center text-sm">
          CopyWrite © 2024 Doctor Appointment Booking. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
