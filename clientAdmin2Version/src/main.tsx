import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import locale from "antd/lib/locale/ru_RU";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";
import colors from "./styles/colors";
import store from "./store";
import GlobalStyle from "./styles/GlobalStyle";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./settings/ReactQuery/ReactQuerySettings";
import ReduxToastrLib from "react-redux-toastr";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
const { blue } = colors;
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
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
          <ReduxToastrLib />
          <GlobalStyle>
            <App />
          </GlobalStyle>
        </ConfigProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </Provider>
);
