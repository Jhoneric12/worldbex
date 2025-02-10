import WorldBexLogo from "../../assets/images/logo/worldbex.png";
import HamburgerMain from "../../assets/images/icon/hamburger-main.png";
import { useState } from "react";
import Information from "../../assets/images/icon/info-black.png";
import Login from "../../assets/images/icon/logoutcurve.png";
import SignUp from "../../assets/images/icon/useradd.png";
import { NavLink } from "react-router";
import WorlbelLogoHeader from "../../assets/images/logo/worldbex-logo-header.png";
import { useWindowSize } from "../../hooks/useWindowSize";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const [width] = useWindowSize();
  const ipadAirPro = width >= 1024;

  const handleShowMenu = () => {
    setIsShow(!isShow);
  };
  return (
    <nav className="px-4 py-4 fixed w-full z-20">
      <div className="flex md:hidden items-center justify-between">
        <img src={WorldBexLogo} alt="Worldbex Logo" className="w-10 h-10" />
        <img onClick={handleShowMenu} src={HamburgerMain} alt="Hamburger" />
      </div>
      <div className={isShow ? `flex flex-col gap-4 w-full items-start shadow-sm py-10` : `hidden`}>
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
      <div
        className={
          ipadAirPro
            ? "hidden md:flex md:items-center md:justify-between md:px-2 md:py-4 lg:px-32"
            : "hidden md:flex md:items-center md:justify-between md:px-2 md:py-4 lg:px-40"
        }
      >
        <NavLink to={"/"}>
          <img src={WorlbelLogoHeader} alt="Worldbex Logo Header" />
        </NavLink>
        <div className={ipadAirPro ? "flex md:gap-10 lg:gap-10" : "flex md:gap-10 lg:gap-14"}>
          <NavLink className={"nav-link hover:text-primary-color font-medium"}>About WSI</NavLink>
          <NavLink className={"nav-link hover:text-primary-color font-medium"}>Login</NavLink>
          <NavLink className={"nav-link hover:text-primary-color font-medium"}>Signup</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
