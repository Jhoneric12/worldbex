import React from "react";
import { events } from "../../data/Events";
import Event from "../../components/eventTemplate/Event";
import { Input } from "antd";
import { useGetEvents } from "../../services/requests/client/events/useGetEvents";
import { useClientStoreAuth } from "../../store/client/useAuth";
import { useNavigate } from "react-router";
import SkeletonEvent from "../../components/eventTemplate/SkeletonEvent";

const Events = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const { Search } = Input;
  const { clientData } = useClientStoreAuth();
  const navigate = useNavigate();
  const { data, isLoading } = useGetEvents(clientData?.id);

  return (
    <>
      <div className="mb-6">
        <Search placeholder="Search" size="large" onSearch={onSearch} />
      </div>
      {isLoading && <SkeletonEvent />}
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
        {data?.map((event, index) => (
          <div key={index}>
            <Event style={event?.bg}>
              <div>
                <div className="flex justify-center w-full mt-auto h-[10rem]">
                  <img src={event?.logo} alt={event?.alt} className=" w-auto object-contain" />
                </div>
                <div className="flex flex-col text-white font-medium">
                  <h1 className="text-lg">{event?.eventName}</h1>
                  <span className="text-lg">{event?.date}</span>
                  <span className="text-lg">
                    {event?.amount === 0 ? "FREE" : `PHP ${event?.amount}`}
                  </span>
                </div>
              </div>
              <div>
                {event?.isJoin ? (
                  <div className="flex justify-between items-center">
                    <div></div>
                    <span className="text-right text-lg text-white font-bold">JOINED</span>
                  </div>
                ) : (
                  <div className="flex justify-between  items-center">
                    <div></div>
                    <button
                      onClick={() =>
                        navigate("/visitor/event-checkout", {
                          state: { event },
                        })
                      }
                      className="rounded-full text-black text-lg bg-white px-4 py-2 font-medium hover:opacity-90 hover:scale-110 duration-300"
                    >
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
