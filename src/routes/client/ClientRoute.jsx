import { Routes, Route } from "react-router";
import ClientLayout from "../../components/layouts/ClientLayout";
import Events from "../../pages/client/Events";
import Tickets from "../../pages/client/Tickets";

const ClientRoute = () => {
  return (
    <Routes>
      <Route path="citizen">
        <Route element={<ClientLayout />}>
          <Route path="events" element={<Events />} />
          <Route path="tickets" element={<Tickets />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default ClientRoute;
