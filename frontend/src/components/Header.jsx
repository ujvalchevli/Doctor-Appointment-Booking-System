import React from "react";
import { assets } from "../assets/assets";

function Header() {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left side - Content */}
      <div className="md:w-1/2 flex flex-col items-start justify-center py-10 md:py-16 lg:py-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight mb-6">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        <div className="mb-8">
          <p className="text-gray-200 text-lg mb-4">
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden md:block" />
            schedule your appointment hassle-free.
          </p>
          <div className="flex items-center gap-2">
            <img
              className="w-24 h-10"
              src={assets.group_profiles}
              alt="Trusted profiles"
            />
            <span className="text-white text-sm">500+ Trusted Doctors</span>
          </div>
        </div>

        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300"
        >
          Book Appointment
          <img className="w-5 h-5" src={assets.arrow_icon} alt="Arrow icon" />
        </a>
      </div>

      {/* Right side - Image */}
      <div className="md:w-1/2 flex items-center justify-center md:justify-end pt-6 md:pt-0">
        <img
          className="w-full max-w-lg md:max-w-none h-auto rounded-lg md:rounded-l-lg lg:mt-16 "
          src={assets.header_img}
          alt="Doctor consultation"
        />
      </div>
    </div>
  );
}

export default Header;
