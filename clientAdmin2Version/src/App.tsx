import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

// Pages
const MerPanelPage = React.lazy(() => import("./pages/MainPage"));
const LayoutMain = React.lazy(() => import("./layout"));

function App() {
  const auth = false;
  return (
    <GlobalStyle>
      <Routes>
        {/* <Route element={<LayoutMain />}>
          <Route index element={<MerPanelPage />} />
          {PrivateRoute.map((route) => (
            <Route
              element={route.component}
              path={route.path}
              key={route.key}
            />
          ))}
        </Route> */}
        {auth ? (
          <Route element={<LayoutMain />}>
            <Route index element={<MerPanelPage />} />
            {PrivateRoute.map((route) => (
              <Route
                element={route.component}
                path={route.path}
                key={route.key}
              />
            ))}
          </Route>
        ) : (
          PublicRoute.map((route) => (
            <Route
              element={route.component}
              path={route.path}
              key={route.key}
            />
          ))
        )}
      </Routes>
    </GlobalStyle>
  );
}

export default App;
