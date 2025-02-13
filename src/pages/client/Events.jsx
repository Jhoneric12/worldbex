import React from "react";
import { events } from "../../data/Events";
import Event from "../../components/eventTemplate/Event";
import { Input } from "antd";

const Events = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const { Search } = Input;

  return (
    <>
      <div className="mb-6">
        <Search placeholder="Search" onSearch={onSearch} />
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
        {events.map((event, index) => (
          <div key={index}>
            <Event style={event.bg}>
              <div>
                <img
                  src={event.logo}
                  alt={event.alt}
                  className="h-[10rem] w-full"
                />
                <div className="flex flex-col text-white font-medium mt-auto">
                  <h1 className="text-lg">{event.eventName}</h1>
                  <span className="text-lg">{event.date}</span>
                  <span className="text-lg">
                    {event.price === 0 ? "FREE" : `PHP ${event.price}`}
                  </span>
                </div>
              </div>
              <div>
                {event.isJoin ? (
                  <div className="flex justify-between items-center">
                    <div></div>
                    <span className="text-right text-lg text-white font-bold">
                      JOINED
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-between  items-center">
                    <div></div>
                    <button className="rounded-full text-black text-lg bg-white px-4 py-2 font-medium hover:opacity-90 hover:scale-110 duration-300">
                      JOIN
                    </button>
                  </div>
                )}
              </div>
            </Event>
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
