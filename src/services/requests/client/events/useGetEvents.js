import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../../../api/client/events/getEvents";

export const useGetEvents = (id) => {
  return useQuery({
    queryKey: ["events"],
    queryFn: () => getEvents(id),
  });
};
