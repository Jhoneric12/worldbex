import React from "react";
import DecorationTop from "../../assets/images/icon/decoration-top-hero.png";
import DecorationBottom from "../../assets/images/icon/decoration-bottom-hero.png";

const Decoration = () => {
  return (
    <>
      <img
        src={DecorationTop}
        alt="Decoration Top"
        className="hidden lg:block fixed top-0 left-0 z-50 w-20"
      />
      <img
        src={DecorationBottom}
        alt="Decoration Bottom"
        className="hidden lg:block fixed bottom-0 right-0 -z-10 w-20"
      />
    </>
  );
};

export default Decoration;
