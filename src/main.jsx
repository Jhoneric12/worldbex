import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F4811F",
          borderRadius: 0,
          fontFamily: "Poppins",
          colorBgBase: "#FFFFFF",
        },
        components: {
          Layout: {
            siderBg: "#FFFFFF",
          },
          Menu: {
            itemBg: "#FFFFFF",
            itemSelectedBg: "#F4811F",
            itemSelectedColor: "#FFFFFF",
            itemMarginInline: 0,
            itemPaddingInline: 0,
            itemMarginBlock: 0,
            iconMarginInlineEnd: 25,
          },
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>
);
