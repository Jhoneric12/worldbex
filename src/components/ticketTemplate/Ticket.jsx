import React from "react";

const Ticket = ({ children, style }) => {
  return (
    <div
      style={{ backgroundImage: style }}
      className="flex flex-col justify-between rounded-lg px-4 h-full pb-4 shadow-lg relative"
    >
      {children}
    </div>
  );
};

export default Ticket;
