import { Routes, Route } from "react-router";
import Home from "../../pages/landingPage/Home";
import Login from "../../pages/landingPage/Login";
import Registration from "../../pages/landingPage/Registration";
const LandingPageRoute = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
    </Routes>
  );
};

export default LandingPageRoute;
