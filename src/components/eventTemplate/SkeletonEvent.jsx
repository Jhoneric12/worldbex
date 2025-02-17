import React from "react";

const SkeletonEvent = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index}>
          <div className="px-4 py-3 border-2 border-gray-200 flex flex-col gap-4 rounded-lg bg-neutral-50">
            <div className="w-full h-20 animate-pulse bg-neutral-400"></div>
            <div className="w-[10rem] h-10 animate-pulse bg-neutral-400"></div>
            <div className="w-[13rem] h-10 animate-pulse bg-neutral-400"></div>
            <div className="w-[6rem] h-10 animate-pulse bg-neutral-400"></div>
            <div className="mt-6 flex justify-between">
              <div></div>
              <div className="w-[6rem] h-10 animate-pulse bg-neutral-400 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonEvent;
