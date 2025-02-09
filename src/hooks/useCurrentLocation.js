import { useState, useEffect } from "react";

export const useCurrentLocation = (currentLocation) => {
  const { pathname } = currentLocation;
  const [location, setLocation] = useState(null);
  useEffect(() => {
    if (pathname === "/citizen/events") {
      setLocation(["events"]);
    } else if (pathname === "/citizen/tickets") {
      setLocation(["tickets"]);
    }
  }, [pathname]);
  return location;
};
