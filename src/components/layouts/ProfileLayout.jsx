import { Layout, theme, Menu, Avatar, Button } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import { NavLink, useLocation, useNavigate } from "react-router";
import { useCurrentLocation } from "../../hooks/useCurrentLocation";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useClientStoreAuth } from "../../store/client/useAuth";
import WorldBexLogo from "../../assets/images/logo/worldbex.png";

const ProfileLayout = ({ children }) => {
  const { reset, clientData } = useClientStoreAuth();
  const navigate = useNavigate();
  const [width] = useWindowSize();
  const secondLetterIndex = clientData.name.indexOf(" ") + 1;
  const isMobile = width < 768;
  const currentLocation = useLocation();
  const location = useCurrentLocation(currentLocation);

  const layoutStyle = {
    overflow: "hidden",
    minHeight: "100vh",
  };

  const contentStyle = {
    backgroundColor: "##C9C9C9",
    overflowY: "auto",
    minHeight: "calc(100vh - 64px)",
  };

  const headerStyle = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #C9C9C9",
    width: "100%",
    padding: 0,
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <div className="flex justify-between px-4 xl:px-6 items-center xl:flex xl:items-center xl:justify-between h-full">
          <div>
            <NavLink to={"events"}>
              <div className="flex items-center gap-2">
                <img src={WorldBexLogo} alt="Worldbex" className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="text-primary-color font-medium  xl:text-lg">
                    Worldbex Services International
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </Header>
      <Content style={contentStyle}>
        <div className="mt-4 px-2 md:px-4 overflow-y-auto pb-36 md:pb-28 lg:pb-40">
          {children}
        </div>
      </Content>
    </Layout>
  );
};

export default ProfileLayout;
