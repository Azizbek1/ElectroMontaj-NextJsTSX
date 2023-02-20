import { Suspense } from "react";
import { PageLoader } from "@/widgets/PageLoader/PageLoader";
import { AppRouter } from "./providers/router";
function App() {
  return (
    <Suspense fallback={<PageLoader/>}>
      React
      <AppRouter />
    </Suspense>
  );
}

export default App;
