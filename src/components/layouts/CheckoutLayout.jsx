import WorldBexLogoWhite from "../../assets/images/logo/worldbex-logo-white.png";
import WorldBexHeader from "../../assets/images/logo/worldbex-logo-header.png";
import { Layout, theme } from "antd";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Outlet, useLocation, useNavigate } from "react-router";

const { Header, Content } = Layout;

const CheckoutLayout = () => {
  const [width] = useWindowSize();
  const isMobile = width < 768;
  const { token } = theme.useToken();
  const eventLocation = useLocation();

  const headerStyle = {
    padding: 0,
    background: token.colorPrimary,
    position: "sticky",
    top: 0,
    zIndex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
  };

  const event = eventLocation.state?.event ?? { eventName: "Event Name" };

  return (
    <Layout>
      <Header style={headerStyle}>
        <div className="flex md:gap-10 justify-between px-2 lg:px-10 items-center w-full">
          <div className="flex justify-between w-full">
            {isMobile ? (
              <div className="flex gap-4 items-center">
                <img
                  src={WorldBexLogoWhite}
                  alt="Worldbex Header"
                  className="w-10 h-10"
                />
              </div>
            ) : (
              <img src={WorldBexHeader} alt="Worldbex Header" />
            )}
          </div>
          <div className="flex justify-end items-center w-full">
            <h2 className="text-white text-lg">
              {event?.eventName || "No Event Data"}
            </h2>
          </div>
        </div>
      </Header>
      <Content
        style={{
          padding: "",
          minHeight: "100vh",
          backgroundColor: "#fffF",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
};

export default CheckoutLayout;
