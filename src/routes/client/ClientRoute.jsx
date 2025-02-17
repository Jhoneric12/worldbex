import { Routes, Route } from "react-router";
import ClientLayout from "../../components/layouts/ClientLayout";
import Events from "../../pages/client/Events";
import Tickets from "../../pages/client/Tickets";
import UserProfile from "../../pages/client/UserProfile";
import { Auth } from "../ValidateAuth";
import { useClientStoreAuth } from "../../store/client/useAuth";
import CheckoutLayout from "../../components/layouts/CheckoutLayout";
import EventCheckout from "../../pages/client/EventCheckout";

const ClientRoute = () => {
  return (
    <Routes>
      <Route element={<Auth store={useClientStoreAuth} redirect={"/login"} />}>
        <Route path="visitor">
          <Route element={<ClientLayout />}>
            <Route path="events" element={<Events />} />
            <Route path="tickets" element={<Tickets />} />
            {/* <Route path="profile" element={<Profile />} /> */}
          </Route>
          <Route path="profile" element={<UserProfile />} />

          <Route element={<CheckoutLayout />}>
            <Route path="event-checkout" element={<EventCheckout />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default ClientRoute;
