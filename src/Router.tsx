import { createBrowserRouter } from "react-router-dom";

import { Applayout } from "./layouts/AppLayout";

import Home from "./pages/Home";
import Sample from "./pages/Sample";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter(
 [
  {
   path: "/",
   element: <Applayout />,
   children: [
    {
     path: "",
     element: <Home />,
    },
    {
     path: "sample",
     element: <Sample />,
    },
   ],
  },
  {
   path: "*",
   element: <NotFound />,
  },
 ],
 {
  basename: global.basename,
 },
);
