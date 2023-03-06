import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import useAppSelector from "./hooks/useAppSelector";
import Spinner from "./components/Spinner";

// Pages
const MerPanelPage = React.lazy(() => import("./pages/MainPage"));
const LayoutMain = React.lazy(() => import("./layout"));

function App() {
  const { status, authAdmin} = useAppSelector(({ user }) => user);

  if (status && authAdmin === 'admin') {
    return (
      <Suspense fallback={<Spinner/>}>
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
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback={<Spinner/>}>
         <Routes>
        {PublicRoute.map((route) => (
          <Route element={route.component} path={route.path} key={route.key} />
        ))}
      </Routes>
      </Suspense>
     
    );
  }
}

export default App;
