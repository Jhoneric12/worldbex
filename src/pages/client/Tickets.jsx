import React from "react";

const Tickets = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 50 }, (_, index) => (
        <div key={index} className="px-4 py-10 border border-red-600 text-xs md:text-sm">
          Sample Ticket No.{index + 1}
        </div>
      ))}
    </div>
  );
};

export default Tickets;
