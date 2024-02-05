import React from "react";
import Home from "../pages/Home/Home";
import Event from "../pages/Event/Event";
import Admin from "../pages/Admin/Admin";
import Register from "../pages/Register/Register";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import OngoingEvent from "../pages/Home/OnngoingEvent";
import EventOngoing from "../pages/Event/EventOngoing";
import AttendanceForm from "../pages/Attendance/Attendance";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/admin", element: <Admin /> },
  { path: "/adminpanel", element: <AdminPanel /> },
  { path: "/event/:eventId", element: <Event /> },
  { path: "/event/:eventId/register", element: <Register /> },
  { path: "/admin/adminpanel", element: <AdminPanel /> },
  { path: "/ongoing-events", element: <OngoingEvent /> },
  { path: "ongoing/event/:eventId", element: <EventOngoing /> },
  { path: "/event/:eventId/attendance", element: <AttendanceForm /> },
];
