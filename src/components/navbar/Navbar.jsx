import WorldBexLogo from "../../assets/images/logo/worldbex.png";
import HamburgerMain from "../../assets/images/icon/hambergermenu.svg";
import { useState, useEffect } from "react";
import Information from "../../assets/images/icon/information.svg";
import Login from "../../assets/images/icon/logincurve.svg";
import SignUp from "../../assets/images/icon/useradd.svg";
import { NavLink } from "react-router";
import WorlbelLogoHeader from "../../assets/images/logo/worldbex-logo-header.png";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShowMenu = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    let scrollPos = 0;
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > scrollPos) {
        navbar.classList.add("up");
        navbar.classList.remove("down");
      } else {
        navbar.classList.add("down");
        navbar.classList.remove("up");
      }

      if (window.scrollY > 10) {
        navbar.classList.add("drop-shadow-lg");
      } else {
        navbar.classList.remove("drop-shadow-lg");
      }

      scrollPos = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <nav className="navbar px-4 py-2 fixed w-full z-40 lg:block backdrop-blur-sm">
      <div className="flex md:hidden items-center justify-between">
        <img src={WorldBexLogo} alt="Worldbex Logo" className="w-10 h-10" />
        <img onClick={handleShowMenu} src={HamburgerMain} alt="Hamburger" />
      </div>
      <div
        className={
          isShow
            ? `flex flex-col gap-4 w-full items-start shadow-sm py-10 bg-white`
            : `hidden`
        }
      >
        <NavLink className="flex items-center gap-4 px-4 font-medium">
          <img src={Information} alt="Information" />
          <span>About WSI</span>
        </NavLink>
        <NavLink className="flex items-center gap-4 px-4 font-medium">
          <img src={Login} alt="Login" />
          <span>Login</span>
        </NavLink>
        <NavLink className="flex items-center gap-4 px-4 font-medium">
          <img src={SignUp} alt="Signup" />
          <span>Signup</span>
        </NavLink>
      </div>
      <div className="hidden md:flex md:items-center md:justify-between md:px-2 md:py-4 lg:px-14 xl:px-30">
        <NavLink to={"/"}>
          <img
            src={WorlbelLogoHeader}
            alt="Worldbex Logo Header"
            className="lg:w-64 xl:w-80"
          />
        </NavLink>
        <div className="flex md:gap-10 lg:gap-14">
          <NavLink className={"nav-link hover:text-primary-color font-medium"}>
            About WSI
          </NavLink>
          <NavLink className={"nav-link hover:text-primary-color font-medium"}>
            Login
          </NavLink>
          <NavLink className={"nav-link hover:text-primary-color font-medium"}>
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
