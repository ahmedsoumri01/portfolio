import React from "react";
import AdminSectionTitle from "../../../components/adminDashboard/AdminSectionTitle";
import ProjectsList from "./ProjectsList";
export default function AdminManageProjects() {
  return (
    <div className="w-full bg-white rounded-md m-2 min-h-screen">
      <AdminSectionTitle
        title="Manage projects"
        description="Here you can manage projects"
      />

      <div className="p-2">
        <ProjectsList />
      </div>
    </div>
  );
}
