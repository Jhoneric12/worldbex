import React from "react";
import { organizers } from "../../data/Organizer";

const Organizers = () => {
  return (
    <>
      <h1 className="text-center mb-4 font-medium">Organizer of</h1>
      <div className="grid grid-cols-7 place-items-center">
        {organizers.map((org, index) => (
          <img key={index} src={org.image} alt={org.alt} loading="lazy" className="shrink-0 " />
        ))}
      </div>
    </>
  );
};

export default Organizers;
