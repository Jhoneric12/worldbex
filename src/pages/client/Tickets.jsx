import React from "react";
import { Tabs, Input, Badge } from "antd";
import { useClientStoreAuth } from "../../store/client/useAuth";
import {
  useGetExpireTickets,
  useGetUnusedTicket,
} from "../../services/requests/tickets/useGetTicket";
import Ticket from "../../components/ticketTemplate/Ticket";
import SkeletonTicket from "../../components/ticketTemplate/SkeletonTicket";

const Tickets = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const { Search } = Input;
  const { clientData } = useClientStoreAuth();
  const { data: UnusedTickets, isLoading: LoadingUnused } = useGetUnusedTicket(clientData?.id);
  const { data: ExpiredTickets, isLoading: LoadingExpired } = useGetExpireTickets(clientData?.id);

  return (
    <>
      {/* <div className="mb-6">
        <Search placeholder="Search" size="large" onSearch={onSearch} />
      </div> */}
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="text-xl font-semibold ">Your Tickets</h1>
        <span className="text-neutral-400 text-sm leading-6">
          If you successfully made a payment for your ticket, please wait for your purchase to be
          reflected on your account in the next 2-3 days.
        </span>
      </div>
      <Tabs
        type="card"
        items={[
          {
            key: 1,
            label: "UNUSED",
            children: (
              <>
                {LoadingUnused && <SkeletonTicket />}
                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
                  {UnusedTickets?.map((event, index) => (
                    <div key={index}>
                      <Ticket style={event?.bg}>
                        <div>
                          <div className="flex justify-center h-[7.5rem] w-full">
                            <img src={event?.logo} alt={event?.alt} className="max-h-full w-full" />
                          </div>
                          <div className="flex flex-col text-white font-medium mt-auto">
                            <h1 className="text-lg">{event?.eventName}</h1>
                            <span className="text-lg">{event?.date}</span>
                            <div className="flex items-center justify-between mt-3">
                              <span className="text-lg">
                                {event?.amount === 0 ? "FREE" : `PHP ${event?.amount}`}
                              </span>
                              <span className="bg-white rounded-full px-4 py-1 text-black font-medium">
                                {event?.pax === 1 ? "Single" : "Multiple"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-auto pt-4">
                          <h1 className=" text-white font-medium text-lg">{clientData?.name}</h1>
                          <button className="border-white text-white border text-center px-4 py-2 mt-2 hover:bg-white hover:text-black duration-200">
                            DOWNLOAD QR CODE
                          </button>
                        </div>
                        <div className="bg-green-500/70 #0opacity-60 rounded-full text-center absolute top-4 left-2 px-6">
                          <span className="text-white">{event?.paymentStatus}</span>
                        </div>
                      </Ticket>
                    </div>
                  ))}
                </div>
              </>
            ),
          },
          {
            key: 2,
            label: "EXPIRED",
            children: (
              <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
                {LoadingExpired && <SkeletonTicket />}
                {ExpiredTickets?.map((event, index) => (
                  <div key={index}>
                    <Badge.Ribbon text="Expired" color="red">
                      <Ticket style={event?.bg}>
                        <div>
                          <div className="flex justify-center h-[7.5rem] w-full">
                            <img src={event?.logo} alt={event?.alt} className="max-h-full w-full" />
                          </div>
                          <div className="flex flex-col text-white font-medium mt-auto">
                            <h1 className="text-lg">{event?.eventName}</h1>
                            <span className="text-lg">{event?.date}</span>
                            <div className="flex items-center justify-between mt-3">
                              <span className="text-lg">
                                {event?.amount === 0 ? "FREE" : `PHP ${event?.amount}`}
                              </span>
                              <span className="bg-white rounded-full px-4 py-1 text-black font-medium">
                                {event?.pax === 1 ? "Single" : "Multiple"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-4">
                          <h1 className=" text-white font-medium text-lg">{clientData?.name}</h1>
                        </div>
                        <div className="bg-gray-400 opacity-50 absolute w-full h-full inset-0 "></div>
                      </Ticket>
                    </Badge.Ribbon>
                  </div>
                ))}
              </div>
            ),
          },
        ]}
      />
    </>
  );
};

export default Tickets;
