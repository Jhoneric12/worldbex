import { Navigate, Outlet } from "react-router";

export const Auth = ({ store, redirect }) => {
  const { clientData } = store();
  return clientData ? <Outlet /> : <Navigate to={redirect} />;
};

export const UnAuth = ({ store, redirect }) => {
  const { clientData } = store();
  return clientData ? <Navigate to={redirect} /> : <Outlet />;
};
