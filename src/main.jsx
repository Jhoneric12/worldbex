import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "@ant-design/v5-patch-for-react-19";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F4811F",
          borderRadius: 0,
          // fontFamily: "Poppins",
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
            iconMarginInlineEnd: 8,
          },
          Form: {
            labelFontSize: 16,
          },

          // Input: {
          //   inputFontSize: 16,
          // },
        },
      }}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>
);
