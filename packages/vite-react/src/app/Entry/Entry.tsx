import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/single" Component={React.lazy(() => import("../Single"))} />
  )
);

const Entry = () => <RouterProvider router={router} />;

export default Entry;
