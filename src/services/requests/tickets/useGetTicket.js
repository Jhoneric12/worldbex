import { useQuery } from "@tanstack/react-query";
import { getExpiredTickets, getTickets } from "../../api/client/tickets/tickets";

export const useGetUnusedTicket = (id) => {
  return useQuery({
    queryKey: ["unused-tickets", id],
    queryFn: getTickets,
  });
};

export const useGetExpireTickets = (id) => {
  return useQuery({
    queryKey: ["expired-tickets", id],
    queryFn: getExpiredTickets,
  });
};
