import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import useAppSelector from "./hooks/useAppSelector";

// Pages
const MerPanelPage = React.lazy(() => import("./pages/MainPage"));
const LayoutMain = React.lazy(() => import("./layout"));

function App() {
  const { status } = useAppSelector(({ user }) => user);
  if (status) {
    return (
      <Routes>
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
      </Routes>
    );
  } else {
    return (
      <Routes>
        {PublicRoute.map((route) => (
          <Route element={route.component} path={route.path} key={route.key} />
        ))}
      </Routes>
    );
  }
}

export default App;
