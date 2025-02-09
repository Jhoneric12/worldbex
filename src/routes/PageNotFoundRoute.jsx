import { Routes, Route } from "react-router";
import PageNotFound from "../pages/PageNotFound";

const PageNotFoundRoute = () => {
  return (
    <Routes>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default PageNotFoundRoute;
