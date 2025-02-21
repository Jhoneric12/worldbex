import React from "react";

const Ticket = ({ children, style, logoSrc }) => {
  return (
    <div className="flex flex-col justify-between rounded-lg px-3 py-3 h-full shadow-sm border bg-white border-gray-300">
      <div
        style={{ backgroundImage: style }}
        className="flex justify-center w-full h-[12rem] rounded-sm mb-4"
      >
        <img src={logoSrc} className=" w-auto object-contain" />
      </div>
      {children}
    </div>
  );
};

export default Ticket;
