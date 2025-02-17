import React from "react";

const Ticket = ({ children, style, isExpired }) => {
  return (
    <div
      style={{ backgroundImage: style }}
      className="flex flex-col justify-between rounded-lg px-4 py-6 shadow-lg relative"
    >
      {children}
      {isExpired && (
        <div className="ribbon bg-neutral-500  absolute min-w-[130%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] flex items-center justify-center">
          <h1 className="text-white ">Expired</h1>
        </div>
      )}
    </div>
  );
};

export default Ticket;
