import React from "react";

export default function AdminSectionTitle({ title, description }) {
  return (
    <div>
      <h1 className="text-2xl font-bold p-2 bg-blue-800 text-white rounded-t-md">
        {title}
      </h1>
      <p className="p-2">{description}</p>
    </div>
  );
}
