import { organizers } from "../../../data/Organizer";
import React, { useState } from "react";
import { theme } from "antd";
import PrimaryButton from "../../buttons/PrimaryButton";
import SecondaryButton from "../../buttons/SecondaryBUtton";
import HeaderLogo from "../../../assets/images/logo/worldbex-logo-header.png";
import HeroImage from "../../../assets/images/avatar/heroimage.png";

const Hero = () => {
  const [size, setSize] = useState("large");
  const { token } = theme.useToken();

  return (
    <section className="md:px-20 md:max-h-screen md:grid md:grid-cols-4 md:grid-rows-3 md:gap-4">
      <div className="md:justify-start md:col-span-2 md:row-span-2 md:mt-16 px-8 flex flex-col justify-between min-h-screen">
        <div className="flex flex-col gap-4">
          <img
            src={HeaderLogo}
            className="py-8 md:hidden"
            alt="WorldBex Logo"
          />
          <h1
            style={{ color: token.colorPrimary }}
            className="text-3xl font-bold"
          >
            WELCOME TO WORLDBEX SERVICES INTERNATIONAL
          </h1>
          <p className="text-md text-gray-700 font-normal">
            THE LEADING EXHIBITION AND EVENTS MANAGEMENT COMPANY IN THE
            PHILIPPINES WITH OVER 25 YEARS OF EXCELLENCE
          </p>
        </div>

        {/* Buttons */}
        <div className="md:hidden flex w-full justify-between gap-3 pb-6">
          <PrimaryButton btnText={"Register"} />
          <SecondaryButton btnText={"Sign In"} />
        </div>

        <div className="hidden md:flex w-full justify-between gap-3 pt-12">
          <div className="flex flex-col w-full gap-3 text-[#F4811F] font-semibold">
            <h1>Not Yet Registered?</h1>
            <PrimaryButton btnText={"Register"} />
          </div>
          <div className="flex flex-col w-full gap-3 text-[#F4811F] font-semibold">
            <h1>Already Registered?</h1>
            <PrimaryButton btnText={"Sign In"} />
          </div>
        </div>
      </div>

      {/* Organizations */}
      <div className="p-8 md:p-0 md:col-span-2 md:col-start-1 md:row-start-3">
        <hr className="border-gray-300 md:hidden" />
        <h1 className="text-gray-500 text-center p-4">Organizer Of</h1>
        <div className="grid grid-cols-2 place-items-center md:grid-rows-2 md:grid-cols-7">
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

      <div className="hidden md:place-items-center md:grid md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-1">
        <img src={HeroImage} alt="" />
      </div>
    </section>
  );
};

export default Hero;
