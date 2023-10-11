import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Routing = () => {
  const Info = lazy(() => import("./pages/Info"));
  const AddOns = lazy(() => import("./pages/AddOns"));
  const Plan = lazy(() => import("./pages/Plan"));
  const Finish = lazy(() => import("./pages/Finish"));
  const ThankYou = lazy(() => import("./pages/ThankYou"));
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={"loading..."}>
            <Info />
          </Suspense>
        }
      />
      <Route
        path="/Plan"
        element={
          <Suspense fallback={"loading..."}>
            <Plan />
          </Suspense>
        }
      />
      <Route
        path="/AddOns"
        element={
          <Suspense fallback={"loading..."}>
            <AddOns />
          </Suspense>
        }
      />
      <Route
        path="/Finish"
        element={
          <Suspense fallback={"loading..."}>
            <Finish />
          </Suspense>
        }
      />
      <Route
        path="/ThankYou"
        element={
          <Suspense fallback={"loading..."}>
            <ThankYou />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Routing;
