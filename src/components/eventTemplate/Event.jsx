import React from "react";

const Event = ({ children, style }) => {
  return (
    <div
      style={{ backgroundImage: style }}
      className="flex flex-col justify-between rounded-lg px-4 pb-3 h-full shadow-lg"
    >
      {children}
    </div>
  );
};

export default Event;
