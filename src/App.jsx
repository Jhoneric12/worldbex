import ClientRoute from "./routes/client/ClientRoute";
import LandingPageRoute from "./routes/landingPage/LandingPageRoute";

function App() {
  return (
    <>
      <LandingPageRoute />
      <ClientRoute />
    </>
  );
}

export default App;
