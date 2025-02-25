import "@ant-design/v5-patch-for-react-19";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F4811F",
          // borderRadius: 0,
          // fontFamily: "Poppins",
          colorBgBase: "#FFFFFF",
          borderRadius: 4,
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
            itemPaddingInline: 10,
            iconMarginInlineEnd: 10,
            itemBorderRadius: 4,
            // itemPaddingInline: 30,
          },
          Form: {
            labelFontSize: 16,
          },
          Segmented: {
            itemSelectedBg: "#F4811F",
            itemSelectedColor: "#FFFFFF",
            trackBg: "#FFFFFF",
            trackPadding: 2,
          },
          Input: {
            borderRadius: 6,
          },
          Card: {
            borderRadiusLG: 8,
            lineWidth: 1,
            colorBorderSecondary: "#D1D5DC",
          },

          // Input: {
          //   inputFontSize: 16,
          // },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </ConfigProvider>
  </StrictMode>
);
