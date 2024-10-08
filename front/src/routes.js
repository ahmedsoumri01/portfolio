import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Resetpassword from "./pages/auth/Resetpassword";
import AdminLayout from "./layouts/AdminLayout";
import AdminRoute from "./components/AdminRoute";
import AdminProfile from "./pages/admin/AdminProfile/AdminProfile";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import AdminManageExperiences from "./pages/admin/experienceManagement/AdminManageExperiences";
import AdminManageProjects from "./pages/admin/projectManagement/AdminManageProjects";
import AdminManageSkills from "./pages/admin/skillsManagement/AdminManageSkills";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword" element={<Resetpassword />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route
          index
          element={<AdminRoute element={<AdminDashboard />} />}
        />
        <Route
         path="dashboard/profile"
          element={<AdminRoute element={<AdminProfile />} />}
        />
        <Route
          path="dashboard/experiences"
          element={<AdminRoute element={<AdminManageExperiences />} />}
        />
        <Route
          path="dashboard/projects"
          element={<AdminRoute element={<AdminManageProjects />} />}
        />
        <Route
          path="dashboard/skills"
          element={<AdminRoute element={<AdminManageSkills />} />}
        />
      </Route> 
      <Route path="*" element={<div>404 Page</div>} />
    </Route>
  )
);

export default router;
