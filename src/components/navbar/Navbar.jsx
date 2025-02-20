import WorldBexLogo from "../../assets/images/logo/worldbex.png";
import HamburgerMain from "../../assets/images/icon/hambergermenu.svg";
import { useState, useEffect } from "react";
import Information from "../../assets/images/icon/information.svg";
import Login from "../../assets/images/icon/logincurve.svg";
import SignUp from "../../assets/images/icon/useradd.svg";
import { NavLink } from "react-router";
import WorlbelLogoHeader from "../../assets/images/logo/worldbex-logo-header.svg";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleShowMenu = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar px-4 py-2 fixed w-full z-40 lg:block border-gray-200 backdrop-blur-xs transition-all duration-300 ${
        isScrolled ? "bg-white border border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="flex md:hidden items-center justify-between">
        <NavLink to={"/"}>
          <img src={WorldBexLogo} alt="Worldbex Logo" className="w-10 h-10" />
        </NavLink>
        <img onClick={handleShowMenu} src={HamburgerMain} alt="Hamburger" />
      </div>
      <AnimatePresence>
        {isShow && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-4 w-full items-start shadow-sm py-10 bg-white absolute top-14 left-0 right-0 -z-10"
          >
            <NavLink className="flex items-center gap-4 px-4 font-medium">
              <img src={Information} alt="Information" />
              <span>About WSI</span>
            </NavLink>
            <NavLink to={"/login"} className="flex items-center gap-4 px-4 font-medium">
              <img src={Login} alt="Login" />
              <span>Login</span>
            </NavLink>
            <NavLink to={"/registration"} className="flex items-center gap-4 px-4 font-medium">
              <img src={SignUp} alt="Signup" />
              <span>Signup</span>
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden md:flex md:items-center md:justify-between md:px-2 md:py-4 lg:px-14 xl:px-30">
        <NavLink to={"/"}>
          <img src={WorlbelLogoHeader} alt="Worldbex Logo Header" className="lg:w-64 xl:w-80" />
        </NavLink>
        <div className="flex md:gap-10 lg:gap-14">
          <NavLink className={"nav-link hover:text-primary-color font-medium"}>About WSI</NavLink>
          <NavLink to={"/login"} className={"nav-link hover:text-primary-color font-medium"}>
            Login
          </NavLink>
          <NavLink to={"/registration"} className={"nav-link hover:text-primary-color font-medium"}>
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
