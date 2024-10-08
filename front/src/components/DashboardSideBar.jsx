import React, { useState, useEffect } from "react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
export default function DashboardSideBar() {
  const [HideSidebar, setHideSidebar] = useState(false);
  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLogged");
    window.location.href = "/login";
  };
  return (
    <div>
      <Sidebar
        aria-label="Default sidebar example"
        className={`h-screen transition-all duration-300 ${
          HideSidebar ? "w-16" : "w-64"
        }
      `}
      >
        <div className="flex items-center justify-end p-2">
          <button
            onClick={() => {
              setHideSidebar(!HideSidebar);
            }}
            className="border-2 border-black hover:bg-gray-300 dark:text-white dark:border-2 dark:border-white p-1.5 rounded-md dark:hover:bg-white dark:hover:text-black dark:transition-all dark:duration-300"
          >
            <HiArrowSmRight
              className={`transform transition-transform duration-300 ${
                HideSidebar ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        <Sidebar.Items className="flex flex-col min-h-screen">
          <Sidebar.ItemGroup>
            <NavLink to="/admin">
              <Sidebar.Item className="cursor-pointer hover:bg-blue-500 hover:text-white">
                <div className="flex gap-2 items-center hover:text-white">
                  <span className="text-2xl">
                    <HiChartPie />
                  </span>
                  {!HideSidebar && <span>Dashboard</span>}
                </div>
              </Sidebar.Item>
            </NavLink>
            <NavLink to="/admin/dashboard/profile">
              <Sidebar.Item
                className="cursor-pointer hover:bg-blue-500 hover:text-white"
                labelColor="dark"
                label={HideSidebar ? null : "Admin"}
              >
                <div className="flex gap-2 items-center text-black dark:text:white hover:text-white">
                  <span className="text-2xl">
                    {" "}
                    <CgProfile />{" "}
                  </span>{" "}
                  {!HideSidebar && <span>Profile</span>}
                </div>
              </Sidebar.Item>
            </NavLink>

            <NavLink to="dashboard/experiences">
              <Sidebar.Item className="cursor-pointer hover:bg-blue-500 hover:text-white">
                <div className="flex gap-2 items-center text-black dark:text:white hover:text-white">
                  <span className="text-2xl">
                    <MdOutlineWorkOutline />
                  </span>
                  {!HideSidebar && <span>manage experiences</span>}
                </div>
              </Sidebar.Item>
            </NavLink>

            <NavLink to="dashboard/projects">
              <Sidebar.Item className="cursor-pointer hover:bg-blue-500 hover:text-white">
                <div className="flex gap-2 items-center text-black dark:text:white hover:text-white">
                  <span className="text-2xl">
                    <FaRegBuilding />
                  </span>
                  {!HideSidebar && <span>manage projects</span>}
                </div>
              </Sidebar.Item>
            </NavLink>
            <NavLink to="dashboard/skills">
              <Sidebar.Item className="cursor-pointer hover:bg-blue-500 hover:text-white">
                <div className="flex gap-2 items-center text-black dark:text:white hover:text-white">
                  <span className="text-2xl">
                    <GiSkills />
                  </span>
                  {!HideSidebar && <span>manage skills</span>}
                </div>
              </Sidebar.Item>
            </NavLink>

            <Sidebar.Item
              k
              className="cursor-pointer hover:!bg-red-500 hover:text-white"
            >
              <div
                className="flex gap-2 items-center hover:text-white"
                onClick={Logout}
              >
                <span className="text-2xl">
                  <MdLogout />
                </span>
                {!HideSidebar && <span>logout</span>}
              </div>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
