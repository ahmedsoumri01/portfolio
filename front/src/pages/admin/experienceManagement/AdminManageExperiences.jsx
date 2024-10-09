import React from "react";
import ExperiencesList from "./ExperiencesList";
import AdminSectionTitle from "../../../components/adminDashboard/AdminSectionTitle";
export default function AdminManageExperiences() {
  return (
    <div className="w-full bg-white rounded-md m-2 min-h-screen">
      <AdminSectionTitle
        title="Manage Experiences"
        description="Here you can manage experiences"
      />

      <div className="p-2">
        <ExperiencesList />
      </div>
    </div>
  );
}
