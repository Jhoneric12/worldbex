import { Layout } from "antd";
const { Header, Content } = Layout;
import WorldBexLogo from "../../assets/images/logo/worldbex-logo-header.svg";
import { NavLink, useLocation } from "react-router";
import { Outlet } from "react-router";

const CheckoutLayout = () => {
  const eventLocation = useLocation();

  const headerStyle = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #C9C9C9",
    width: "100%",
    padding: 0,
  };

  const layoutStyle = {
    overflow: "hidden",
    height: "100vh",
  };

  const contentStyle = {
    backgroundColor: "#FFFF",
    overflowY: "auto",
    paddingBottom: "3rem",
  };

  const event = eventLocation.state?.event ?? { eventName: "Event Name" };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <div className="flex justify-between px-4 xl:px-6 items-center xl:flex xl:items-center xl:justify-between h-full">
          <div>
            <NavLink to={"events"}>
              <div className="flex items-center gap-2">
                <img src={WorldBexLogo} alt="Worldbex" className="w-64 xl:w-80" />
              </div>
            </NavLink>
          </div>
          <div className=" py-10">
            <div className="flex justify-end items-center w-full">
              <h2 className="text-gray-700 text-md font-semibold">
                {event?.eventName || "No Event Data"}
              </h2>
            </div>
          </div>
        </div>
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default CheckoutLayout;
