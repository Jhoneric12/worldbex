import { useState, useEffect } from "react";

export const useCurrentLocation = (currentLocation) => {
  const { pathname } = currentLocation;
  const [location, setLocation] = useState(null);
  useEffect(() => {
    if (pathname === "/visitor/events") {
      setLocation(["events"]);
    } else if (pathname === "/visitor/tickets") {
      setLocation(["tickets"]);
    }
  }, [pathname]);
  return location;
};
