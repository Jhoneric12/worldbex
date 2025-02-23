import React from "react";
import { Tabs, Input, Badge, Button } from "antd";
import { useClientStoreAuth } from "../../store/client/useAuth";
import {
  useGetExpireTickets,
  useGetUnusedTicket,
} from "../../services/requests/tickets/useGetTicket";
import Ticket from "../../components/ticketTemplate/Ticket";
import SkeletonTicket from "../../components/ticketTemplate/SkeletonTicket";

const Tickets = () => {
  // const onSearch = (value, _e, info) => console.log(info?.source, value);
  // const { Search } = Input;
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
                      <Badge.Ribbon text={event?.paymentStatus} color="green">
                        <Ticket style={event?.bg} logoSrc={event?.logo}>
                          <div className="mt-auto">
                            <div className="flex items-center justify-between">
                              <span className="text-neutral-400 text-xs font-medium">
                                {event?.type === "events" ? "Event" : "Seminar"}
                              </span>
                              <span className="text-xs text-[#686868] bg-[#DEDEDE] rounded-full px-4 py-1 font-medium">
                                {event?.pax === 1 ? "Single" : "Multiple"}
                              </span>
                            </div>
                            <div className="mb-4">
                              <h1 className="text-lg font-medium">{event?.eventName}</h1>
                              <div className="flex items-center gap-1 text-neutral-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-3"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                  />
                                </svg>
                                <span>{event?.date}</span>
                              </div>
                            </div>
                            <div className="mt-auto">
                              <h1 className="text-center mb-2 font-medium">{clientData?.name}</h1>
                              <Button
                                block
                                style={{
                                  borderRadius: "4px",
                                  backgroundColor: "#FFFFFF",
                                  borderCOlor: "black",
                                }}
                                className="border border-black rounded-md px-6 py-1"
                              >
                                DOWNLOAD QR CODE
                              </Button>
                            </div>
                          </div>
                        </Ticket>
                      </Badge.Ribbon>
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
                    <div key={index}>
                      <Badge.Ribbon text="Expired" color="red">
                        <Ticket style={event?.bg} logoSrc={event?.logo}>
                          <div className="mt-auto">
                            <div className="flex items-center justify-between">
                              <span className="text-neutral-400 text-xs font-medium">
                                {event?.type === "events" ? "Event" : "Seminar"}
                              </span>
                              <span className="text-xs text-[#686868] bg-[#DEDEDE] rounded-full px-4 py-1 font-medium">
                                {event?.pax === 1 ? "Single" : "Multiple"}
                              </span>
                            </div>
                            <div className="mb-4">
                              <h1 className="text-lg font-medium">{event?.eventName}</h1>
                              <div className="flex items-center gap-1 text-neutral-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-3"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                  />
                                </svg>
                                <span>{event?.date}</span>
                              </div>
                            </div>
                            <div className="mt-auto">
                              <h1 className="text-center mb-2 font-medium">{clientData?.name}</h1>
                            </div>
                          </div>
                          <div className="bg-gray-200 opacity-50 absolute w-full h-full rounded-lg inset-0 "></div>
                        </Ticket>
                      </Badge.Ribbon>
                    </div>
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
