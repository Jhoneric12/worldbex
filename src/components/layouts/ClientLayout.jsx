import { useState, useMemo } from "react";
import WorldBexLogo from "../../assets/images/logo/worldbex.png";
import WorldBexLogoWhite from "../../assets/images/logo/worldbex-logo-white.png";
import HamburgerMenu from "../../assets/images/logo/hambergermenu.png";
import WorldBexHeader from "../../assets/images/logo/worldbex-logo-header.png";
import Avatar from "../../assets/images/avatar/matsu-bieber.png";
import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Button, Popover } from "antd";
import { organizers } from "../../data/Organizer";
import { useWindowSize } from "../../hooks/useWindowSize";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router";
import { useCurrentLocation } from "../../hooks/useCurrentLocation";
import LogoutIcon from "../../assets/images/icon/logoutcurve.png";
import ProfileIcon from "../../assets/images/icon/profile.png";
import DownloadButtons from "../downaload/DownloadButtons";
import { useClientStoreAuth } from "../../store/client/useAuth";

const { Header, Content, Footer, Sider } = Layout;

const ClientLayout = () => {
  const [width] = useWindowSize();
  const isMobile = width < 768;
  const [collapsed, setCollapsed] = useState(false);
  const { token } = theme.useToken();
  const currentLocation = useLocation();
  const location = useCurrentLocation(currentLocation);
  const [arrow, setArrow] = useState("Show");
  const navigate = useNavigate();
  const { reset, clientData } = useClientStoreAuth();

  const handlesignOut = () => {
    reset();
    navigate("/login");
  };

  const siderStyle = {
    overflow: "auto",
    height: "100vh",
    position: "sticky",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarGutter: "stable",
    zIndex: 20,
  };

  const footerStyle = {
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    zIndex: 1,
    width: isMobile ? "100%" : collapsed ? "100%" : "calc(100% - 250px)",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    background: token.colorBgBase,
    flexShrink: 0,
    borderTop: "1px solid #DEE2E6",
  };

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

  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }
    if (arrow === "Show") {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);

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
        <button onClick={handlesignOut}>Sign out</button>
      </div>
    </div>
  );

  return (
    <Layout hasSider>
      {!isMobile && (
        <Sider
          trigger={null}
          collapsedWidth={0}
          collapsed={collapsed}
          className="shadow-2xl"
          style={siderStyle}
          width={250}
        >
          <div className="flex justify-center items-center p-6 mb-4">
            <img src={WorldBexLogo} alt="Worlbex Logo" className="w-20 h-20" />
          </div>
          <Menu
            style={{ fontSize: token.fontSizeLG }}
            theme="light"
            mode="inline"
            defaultSelectedKeys={location}
            items={items}
          />
          <div className="absolute bottom-0 right-1 left-1 py-6">
            <DownloadButtons />
            <div className="flex flex-col gap-1 items-center text-xs">
              <span className="text-[#5E5E5E] font-medium">For question and inquiries</span>
              <span className="font-bold">inquire@worldbexevents.com</span>
              <span className="text-[#5E5E5E] font-medium">or contact us at</span>
              <span className="font-bold">86569239</span>
            </div>
          </div>
        </Sider>
      )}
      <Layout>
        <Header style={headerStyle}>
          {!isMobile && (
            <Button
              type="text"
              onClick={() => setCollapsed(!collapsed)}
              style={{
                width: 64,
                height: 64,
              }}
            >
              <img src={HamburgerMenu} alt="" />
            </Button>
          )}
          <div className="flex md:gap-10 justify-between px-2 lg:px-10 items-center w-full">
            <div>
              {isMobile ? (
                <div className="flex gap-4 items-center">
                  <img src={WorldBexLogoWhite} alt="Worldbex Header" className="w-10 h-10" />
                  <span className=" text-white">{clientData?.name}</span>
                </div>
              ) : (
                <img src={WorldBexHeader} alt="Worldbex Header" />
              )}
            </div>
            <div className="flex items-center gap-4">
              {!isMobile && (
                <span className="text-xs md:text-base text-white">{clientData?.name}</span>
              )}
              <Popover placement="bottomRight" content={content} arrow={mergedArrow}>
                <img src={Avatar} alt="Avatar" className="w-9 h-9" />
              </Popover>
            </div>
          </div>
        </Header>
        <Content>
          <div className="mt-4 px-2 md:px-4 overflow-y-auto pb-36 md:pb-28 lg:pb-40">
            <DownloadButtons styles={"xl:hidden lg:hidden md:hidden"} />
            <div className="md:hidden">
              <Button type="text">Events</Button>
              <Button type="text">Tickets</Button>
            </div>
            {<Outlet />}
          </div>
        </Content>
        <Footer style={footerStyle}>
          <div className="flex flex-col items-center py-2">
            <h1 className="text-center text-sm text-[#5E5E5E]">Organizers</h1>
            <div className="flex justify-center items-center whitespace-nowrap w-full overflow-x-auto lg:overflow-hidden">
              <div className="flex gap-2">
                {organizers.map((org, index) => (
                  <div key={index} className="p-2 shrink-0 md:shrink-1">
                    <img
                      src={org.image}
                      loading="lazy"
                      alt={org.alt}
                      className="hover:scale-150 duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default ClientLayout;
