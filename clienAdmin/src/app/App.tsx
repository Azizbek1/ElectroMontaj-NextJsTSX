import { Suspense } from "react";
import { PageLoader } from "@/widgets/PageLoader/PageLoader";
import { AppRouter } from "./providers/router";
import { Sidebar } from "@/widgets/Sidebar";
import { Navbar } from "@/widgets/Navbar";
function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  );
}

export default App;
