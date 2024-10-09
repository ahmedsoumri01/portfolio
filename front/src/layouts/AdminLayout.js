import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSideBar from "../components/adminDashboard/DashboardSideBar";
import AdminNavBar from "../components/adminDashboard/AdminNavBar";
export default function AdminDashLayout() {
  return (
    <>
      <AdminNavBar />
      <div className="flex gap-2">
        <DashboardSideBar />
        <Outlet />
      </div>
    </>
  );
}
