import { organizers } from "../../../data/Organizer";
import React, { useState } from "react";
import { theme, Button } from "antd";
import HeaderLogo from "../../../assets/images/logo/worldbex-logo-header.png";
import HeroImage from "../../../assets/images/avatar/heroimage.png";

const Hero = () => {
  const [size, setSize] = useState("large");
  const { token } = theme.useToken();

  return (
    <section className="xl:px-36 xl:pt-12 xl:h-screen xl:overflow-hidden xl:grid xl:grid-cols-4 xl:grid-rows-3 lg:gap-4 lg:py-10">
      <div className="md:justify-center xl:justify-start xl:col-span-2 xl:h-full xl:row-span-2 xl:mt-16 px-8 flex flex-col justify-between min-h-screen">
        <div className="flex flex-col gap-4">
          <img src={HeaderLogo} className="py-8 xl:hidden pt-20 md:hidden" alt="WorldBex Logo" />
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
            <h1 className="hidden xl:flex">Not Yet Registered?</h1>
            <Button type="primary" size="large">
              Register
            </Button>
          </div>
          <div className="flex flex-col w-full gap-3 text-[#F4811F] font-semibold">
            <h1 className="hidden xl:flex">Already Registered?</h1>
            <Button type="primary" size="large">
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Organizations */}
      <div className="p-8 xl:p-0 xl:col-span-2 xl:col-start-1 xl:row-start-3">
        <hr className="border-gray-300 xl:hidden" />
        <h1 className="text-gray-500 text-center p-4 lg:p-2 lg:text-sm">Organizer Of</h1>
        <div className="grid grid-cols-2 place-items-center xl:grid-rows-2 xl:grid-cols-7">
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

      <div className="hidden xl:place-items-center xl:grid xl:col-span-2 xl:row-span-3 xl:col-start-3 xl:row-start-1">
        <img src={HeroImage} className="max-h-full object-cover" alt="" />
      </div>
    </section>
  );
};

export default Hero;
