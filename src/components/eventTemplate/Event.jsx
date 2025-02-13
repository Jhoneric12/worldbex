import React from "react";

const Event = ({ children, style }) => {
  return (
    <div
      style={{ backgroundImage: style }}
      className="flex flex-col justify-between rounded-lg px-4 py-3 h-[20rem] shadow-lg"
    >
      {children}
    </div>
  );
};

export default Event;
