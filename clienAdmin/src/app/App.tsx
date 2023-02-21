import { Suspense } from "react";
import { PageLoader } from "@/widgets/PageLoader/PageLoader";
import { AppRouter } from "./providers/router";
import { Sidebar } from "@/widgets/Sidebar";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
      <Footer/>
    </Suspense>
  );
}

export default App;
