import React from "react";
import { Tabs } from "antd";

const Tickets = () => {
  return (
    <Tabs
      type="card"
      items={[
        {
          key: 1,
          label: "UNUSED",
          children: (
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 50 }, (_, index) => (
                <div key={index} className="px-4 py-10 border border-red-600 text-xs md:text-sm">
                  Sample UNUSED TICKETS No.{index + 1}
                </div>
              ))}
            </div>
          ),
        },
        {
          key: 2,
          label: "EXPIRED",
          children: (
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 50 }, (_, index) => (
                <div key={index} className="px-4 py-10 border border-red-600 text-xs md:text-sm">
                  Sample EXPIRED TICKETS No.{index + 1}
                </div>
              ))}
            </div>
          ),
        },
      ]}
    />
  );
};

export default Tickets;
