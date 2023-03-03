import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import locale from 'antd/lib/locale/ru_RU';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import colors from "./styles/colors";
const { blue } = colors;
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
      locale={locale}
        theme={{
          components: {
            Menu: {
              colorPrimary: blue,
              colorPrimaryHover: blue,
            },  
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
