import { organizers } from "../../../data/Organizer";
import React, { useState } from "react";
import { theme, Button } from "antd";
import HeaderLogo from "../../../assets/images/logo/worldbex-logo-header.png";
import HeroImage from "../../../assets/images/avatar/heroimage.png";

const Hero = () => {
  const [size, setSize] = useState("large");
  const { token } = theme.useToken();

  return (
    <section className="xl:flex xl:items-center xl:px-20">
      <div className="xl:mt-10 xl:w-[60%] lg:mt-14">
        <div className="h-screen flex flex-col lg:gap-10 justify-between py-6 px-4 md:justify-around md:px-20 lg:min-h-screen">
          <div className="flex flex-col gap-6 mt-14">
            <img src={HeaderLogo} alt="worldbex Logo" className="lg:hidden" />
            <h1 className="text-primary-color text-2xl font-bold leading-9 md:text-4xl md:leading-14 lg:text-6xl lg:leading-22 xl:text-4xl xl:leading-12">
              WELCOME TO WORLDBEX SERVICES INTERNATIONAL
            </h1>
            <p className="md:text-xl leading-7 md:leading-9 lg:text-2xl lg:leading-12 xl:text-xl xl:leading-9 font-medium">
              THE LEADING EXHIBITION AND EVENTS MANAGEMENT COMPANY IN THE PHILIPPINES WITH OVER 25
              YEARS OF EXCELLENCE
            </p>
          </div>
          <div>
            <div className="hidden lg:block shrink-0 xl:hidden xl:w-[40%]">
              <img src={HeroImage} alt="Hero Image" loading="lazy" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 md:gap-10 lg:gap-20 xl:gap-30">
            <div className="flex flex-col gap-3 w-full font-medium">
              <h1 className="text-primary-color hidden xl:block">Not yet registered?</h1>
              <Button type="primary" size="large">
                REGISTER
              </Button>
            </div>
            <div className="flex flex-col gap-3 w-full font-medium">
              <h1 className="text-primary-color hidden xl:block">Already registered?</h1>
              <Button type="primary" size="large">
                SIGN IN
              </Button>
            </div>
          </div>
          <div className="py-10 hidden lg:block w-full">
            <h1 className="text-center mb-4 font-medium">Organizer of</h1>
            <div className="grid grid-cols-7 gap-2 place-items-center">
              {organizers.map((org) => (
                <>
                  <img
                    src={org.image}
                    alt="Organizations"
                    loading="lazy"
                    className="hover:scale-125 duration-300"
                  />
                </>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-gray-200 mt-4 mb-4 m-10 lg:hidden" />
        <div className="py-10 lg:hidden">
          <h1 className="text-center mb-4 font-medium">Organizer of</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 place-items-center">
            {organizers.map((org) => (
              <>
                <img src={org.image} alt="Organizations" loading="lazy" />
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden xl:block shrink-0 xl:w-[40%]">
        <img src={HeroImage} alt="Hero Image" loading="lazy" />
      </div>
    </section>
  );
};

export default Hero;
