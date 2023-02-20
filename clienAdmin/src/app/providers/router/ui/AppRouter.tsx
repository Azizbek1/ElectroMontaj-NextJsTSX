import { routeConfig } from "@/shared/config/routeConfig/routeConfig";

import { Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          element={<div className="page-wrapper">{element}</div>}
          path={path}
        />
      ))}
    </Routes>
  );
}
