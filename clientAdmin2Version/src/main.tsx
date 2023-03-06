import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import locale from "antd/lib/locale/ru_RU";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import colors from "./styles/colors";
import store from "./store";
import GlobalStyle from "./styles/GlobalStyle";
const { blue } = colors;
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
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
        <GlobalStyle>
          <App />
        </GlobalStyle>
      </ConfigProvider>
    </BrowserRouter>
  </Provider>
);
