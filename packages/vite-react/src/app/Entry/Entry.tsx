import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path="/single" Component={React.lazy(() => import("../Single"))} />
      <Route
        path="/event-emit"
        Component={React.lazy(() => import("../EventEmit"))}
      />
    </Routes>
  )
);

const Entry = () => <RouterProvider router={router} />;

export default Entry;
