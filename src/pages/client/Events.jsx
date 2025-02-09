import React from "react";

const Events = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 50 }, (_, index) => (
        <div key={index} className="px-4 py-10 border border-blue-600 text-xs md:text-sm">
          Sample Event No.{index + 1}
        </div>
      ))}
    </div>
  );
};

export default Events;
