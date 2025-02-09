import { Routes } from "react-router";
import ClientRoute from "./routes/client/ClientRoute";
import LandingPageRoute from "./routes/landingPage/LandingPageRoute";
import PageNotFoundRoute from "./routes/PageNotFoundRoute";

function App() {
  return (
    <>
      <LandingPageRoute />
      <ClientRoute />
      {/* <PageNotFoundRoute /> */}
    </>
  );
}

export default App;
