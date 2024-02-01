import Event from "../pages/Event/Event";
import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";
import Register from "../pages/Register/Register";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/admin", element: <Admin /> },
  { path: "/event/:id", element: <Event /> },
  { path: "/register/:id", element: <Register /> },
];
