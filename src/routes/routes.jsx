import React from "react";
import Home from "../pages/Home/Home";
import Event from "../pages/Event/Event";
import Admin from "../pages/Admin/Admin";
import Register from "../pages/Register/Register";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/admin", element: <Admin /> },
  { path: "/event/:eventId", element: <Event /> },
  { path: "/event/:eventId/register", element: <Register /> },
];
