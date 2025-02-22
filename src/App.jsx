import ClientRoute from "./routes/client/ClientRoute";
import LandingPageRoute from "./routes/landingPage/LandingPageRoute";

function App() {
  return (
    <div className="text-text-color scroll-smooth">
      <LandingPageRoute />
      <ClientRoute />
    </div>
  );
}

export default App;
