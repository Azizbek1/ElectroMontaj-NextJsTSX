import ProjectGlobalStyle from "@/app/styles/GlobalStyles";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/app/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectGlobalStyle>
        <App />
      </ProjectGlobalStyle>
    </BrowserRouter>
  </React.StrictMode>
);
