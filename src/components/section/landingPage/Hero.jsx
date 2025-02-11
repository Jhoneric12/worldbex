import { organizers } from "../../../data/Organizer";
import React, { useState } from "react";
import { theme, Button } from "antd";
import HeaderLogo from "../../../assets/images/logo/worldbex-logo-header.png";
import HeroImage from "../../../assets/images/avatar/heroimage.png";

const Hero = () => {
  const [size, setSize] = useState("large");
  const { token } = theme.useToken();

  return (
    <section className="lg:px-36 lg:pt-12 lg:h-screen lg:overflow-hidden lg:grid lg:grid-cols-4 lg:grid-rows-3 lg:gap-4">
      <div className="lg:justify-start lg:col-span-2 lg:h-full lg:row-span-2 lg:mt-16 px-8 flex flex-col justify-between min-h-screen">
        <div className="flex flex-col gap-4">
          <img src={HeaderLogo} className="py-8 lg:hidden pt-20" alt="WorldBex Logo" />
          <h1 style={{ color: token.colorPrimary }} className="text-3xl font-bold">
            WELCOME TO WORLDBEX SERVICES INTERNATIONAL
          </h1>
          <p className="text-md text-gray-700 font-normal">
            THE LEADING EXHIBITION AND EVENTS MANAGEMENT COMPANY IN THE PHILIPPINES WITH OVER 25
            YEARS OF EXCELLENCE
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-row w-full justify-between gap-3 pt-16 pb-6">
          <div className="flex flex-col w-full gap-3 text-[#F4811F] font-semibold">
            <h1 className="hidden lg:flex">Not Yet Registered?</h1>
            <Button type="primary" size="large">
              Register
            </Button>
          </div>
          <div className="flex flex-col w-full gap-3 text-[#F4811F] font-semibold">
            <h1 className="hidden lg:flex">Already Registered?</h1>
            <Button type="primary" size="large">
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Organizations */}
      <div className="p-8 lg:p-0 lg:col-span-2 lg:col-start-1 lg:row-start-3">
        <hr className="border-gray-300 lg:hidden" />
        <h1 className="text-gray-500 text-center p-4 lg:p-2 lg:text-sm">Organizer Of</h1>
        <div className="grid grid-cols-2 place-items-center lg:grid-rows-2 lg:grid-cols-7">
          {organizers.map((org, index) => (
            <div key={index} className="p-2 shrink-0 md:shrink-1">
              <img
                src={org.image}
                alt={org.alt}
                loading="lazy"
                className="hover:scale-150 duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:place-items-center xl:grid lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-1">
        <img src={HeroImage} className="max-h-full object-cover" alt="" />
      </div>
    </section>
  );
};

export default Hero;
