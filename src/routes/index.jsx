import { RouterProvider, createBrowserRouter } from "react-router";
import ClientRoute from "./pageRoutes/ClientRoute";
import AdminRoutes from "./pageRoutes/AdminRoutes";

const RootRoutes = () => {
  const router = createBrowserRouter([
    { path: "/admin/*", Component: AdminRoutes },
    { path: "/*", Component: ClientRoute },
  ]);

  return <RouterProvider router={router} />;
};

export default RootRoutes;
