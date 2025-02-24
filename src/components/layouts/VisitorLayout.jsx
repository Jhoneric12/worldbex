import { Layout, Menu, Avatar, Popover } from "antd";
const { Header, Footer, Sider, Content } = Layout;
// import WorldBexLogo from "../../assets/images/logo/worldbex.png";
import { NavLink, useLocation, useNavigate } from "react-router";
import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useCurrentLocation } from "../../hooks/useCurrentLocation";
import DownloadButtons from "../downaload/DownloadButtons";
import { organizers } from "../../data/Organizer";
import Marquee from "react-fast-marquee";
import DGSILOGO from "../../assets/images/logo/DGSI_LOGO-removebg-preview.png";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Outlet } from "react-router";
import { useClientStoreAuth } from "../../store/client/useAuth";
import WorldBexLogoHeader from "../../assets/images/logo/worldbex-logo-header.svg";
import LogoutIcon from "../../assets/images/icon/logoutcurve.png";
import ProfileIcon from "../../assets/images/icon/profile.png";

const VisitorLayout = () => {
  const { reset, clientData } = useClientStoreAuth();
  const navigate = useNavigate();
  const [width] = useWindowSize();
  const secondLetterIndex = clientData.name.indexOf(" ") + 1;
  const isMobile = width < 768;
  const currentLocation = useLocation();
  const location = useCurrentLocation(currentLocation);

  const handleSignOut = () => {
    reset();
    navigate("/login");
  };

  const headerStyle = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #C9C9C9",
    width: "100%",
    padding: 0,
  };
  const contentStyle = {
    backgroundColor: "##C9C9C9",
    overflowY: "auto",
  };
  const siderStyle = {
    backgroundColor: "#FFFFFF",
    borderRight: "1px solid #C9C9C9",
  };
  const footerStyle = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #C9C9C9",
    padding: 0,
    position: isMobile ? "fixed" : "static",
    bottom: 0,
  };
  const layoutStyle = {
    overflow: "hidden",
    height: "100vh",
  };
  const menuStyle = {
    paddingLeft: 7,
  };

  const items = [
    {
      key: "events",
      label: <NavLink to={"/visitor/events"}>Events</NavLink>,
      icon: <AppstoreOutlined />,
    },
    {
      key: "tickets",
      label: <NavLink to={"/visitor/tickets"}>Tickets</NavLink>,
      icon: <UserOutlined />,
    },
  ];

  const itemsMobile = [
    {
      key: "events",
      label: <NavLink to={"/visitor/events"}>Events</NavLink>,
    },
    {
      key: "tickets",
      label: <NavLink to={"/visitor/tickets"}>Tickets</NavLink>,
    },
  ];

  const content = (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 px-6 border-gray-300">
        <img src={ProfileIcon} className="w-5 h-5" />
        <NavLink to={"/visitor/profile"}>
          <span className="text-text-color">Profile</span>
        </NavLink>
      </div>
      <hr className="border-gray-200" />
      <div className="flex gap-2 px-6">
        <img src={LogoutIcon} className="w-5 h-5" />
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
  );

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <div className="flex justify-between px-4 xl:px-6 items-center xl:flex xl:items-center xl:justify-between h-full">
          <div>
            <NavLink to={"events"}>
              <div className="flex items-center gap-2">
                {/* <img src={WorldBexLogo} alt="Worldbex" className="w-10 h-10" /> */}
                {/* <div className="flex flex-col">
                  <span className="text-primary-color font-medium  xl:text-lg">
                    Worldbex Services International
                  </span>
                </div> */}
                <img
                  src={WorldBexLogoHeader}
                  alt="Worldbex"
                  className="w-64 xl:w-80"
                />
              </div>
            </NavLink>
          </div>
          <div className=" py-10">
            {isMobile ? (
              <Popover content={content} trigger="click">
                <Avatar
                  style={{
                    backgroundColor: "#f4811f",
                    color: "#ffffff",
                  }}
                >
                  <h1>{`${clientData?.name.charAt(0)}${clientData?.name.charAt(
                    secondLetterIndex
                  )}`}</h1>
                </Avatar>
              </Popover>
            ) : (
              <div className="flex flex-row">
                <DownloadButtons />
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-1 hover:bg-primary-color px-2 hover:text-white duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                    />
                  </svg>
                  <span>Signout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </Header>
      <Layout>
        {!isMobile ? (
          <Sider style={siderStyle}>
            <div>
              <div className="relative flex flex-col gap-2 items-center justify-center py-6 xl:px-4">
                <NavLink to="profile">
                  <div className="absolute z-10 bottom-18 right-15 bg-white p-1 rounded-full border border-primary-color duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 text-primary-color"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>
                  </div>
                </NavLink>
                <Avatar style={{ backgroundColor: "#F4811F" }} size={80}>
                  <h1 className="text-2xl">{`${clientData?.name.charAt(
                    0
                  )}${clientData?.name.charAt(secondLetterIndex)}`}</h1>
                </Avatar>
                <div className="text-center">
                  <h1 className="font-medium ">{clientData.name}</h1>
                  <span className="xl:text-xs text-neutral-400">
                    {clientData.email}
                  </span>
                </div>
              </div>
              <div>
                <Menu
                  style={menuStyle}
                  mode="vertical"
                  defaultSelectedKeys={location}
                  items={items}
                />
              </div>
              <div className="absolute bottom-0 right-1 left-1 py-3 whitespace-nowrap">
                <div className="flex flex-col items-center text-[0.688rem]">
                  <span className="text-[#5E5E5E] font-medium">
                    For question and inquiries
                  </span>
                  <span className="font-bold">inquire@worldbexevents.com</span>
                  <span className="text-[#5E5E5E] font-medium">
                    or contact us at
                  </span>
                  <span className="font-bold">86569239</span>
                </div>
              </div>
            </div>
          </Sider>
        ) : (
          <Menu mode="horizontal" items={itemsMobile} selectedKeys={location} />
        )}
        <Content style={contentStyle}>
          <div className=" mt-4 px-2 md:px-4 overflow-y-auto pb-16 md:pb-4 ">
            {<Outlet />}
            <div className="flex flex-col gap-2 items-center mt-6 xl:hidden">
              <span className=" text-center text-gray-400">Powered by</span>
              <img
                src={DGSILOGO}
                alt="Dynamic Global Soft Inc."
                className=" w-40 h-20 "
              />
              <DownloadButtons
                styles={"xl:hidden lg:hidden md:hidden mt-6 border-r-0"}
              />
            </div>
          </div>
        </Content>
      </Layout>
      <Footer style={footerStyle}>
        <div className="flex items-center gap-2">
          <div className="items-center hidden xl:flex xl:pl-4">
            <span className=" text-center text-xs text-gray-400 whitespace-nowrap">
              Powered by
            </span>
            <img
              src={DGSILOGO}
              alt="Dynamic Global Soft Inc."
              className=" max-w-20 h-12"
            />
          </div>
          <div className="flex flex-col">
            {/* <h1 className="text-center text-xs text-gray-400">Organizers</h1> */}
            <div className="flex justify-center items-center whitespace-nowrap w-full overflow-x-auto lg:overflow-hidden ">
              <Marquee autoFill speed={25} pauseOnHover>
                <div className="flex gap-3">
                  {organizers.map((org, index) => (
                    <div key={index} className=" shrink-0 xl:shrink-1">
                      <img
                        src={org.image}
                        alt={org.alt}
                        className=" h-12 w-12"
                      />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default VisitorLayout;
