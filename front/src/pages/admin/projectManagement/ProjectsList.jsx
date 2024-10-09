import React, { useState, useEffect } from "react";
import { Button, TextInput, Table, Tooltip } from "flowbite-react";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaPlus } from "react-icons/fa";
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../../../service/projectService"; // Assume these methods exist
import { formatDate } from "../../../utils/Utils";
import ProjectCard from "../../../components/adminDashboard/manageProjects/ProjectCard";
import { toast } from "react-toastify";
import { Spinner } from "flowbite-react";
import DeleteProjectModal from "../../../components/modals/DeleteProjectModal";
import EditProjectModal from "../../../components/modals/EditProjectModal";
export default function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    description: "",
    startDate: "",
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [loadingAddOrEdit, setLoadingAddOrEdit] = useState(false);

  const fetchExperiences = async () => {
    try {
      setLoadData(true);
      const data = await getProjects();
      setProjects(data);
      setFilteredProjects(data);
      setLoadData(false);
    } catch (error) {
      toast.error("Error fetching experiences");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  // Filter experiences by title, company, or start date
  useEffect(() => {
    const filtered = projects.filter(
      (exp) =>
        exp.name.toLowerCase().includes(filter.name.toLowerCase()) &&
        exp.description
          .toLowerCase()
          .includes(filter.description.toLowerCase()) &&
        (!filter.startDate ||
          formatDate(exp.startDate) === formatDate(filter.startDate))
    );
    setFilteredProjects(filtered);
  }, [filter, projects]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };
  const confirmDelete = async () => {
    try {
      console.log(currentProject);
      await deleteProject(currentProject._id);
      toast.success("Project deleted successfully");
      setIsDeleteModalOpen(false);
      //empty the current project
      setCurrentProject(null);
      fetchExperiences();
    } catch (error) {
      toast.error("Error deleting project");
      console.error(error);
    }
  };
  const handleAddExperience = () => {
    setIsEditing(false);
    setCurrentProject(null);
    setIsAddEditModalOpen(true);
  };
  const handleSaveProject = async (project) => {};
  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center mb-4">
        {/* Filters Section */}
        <div className="flex gap-4">
          <TextInput
            name="name"
            placeholder="Filter by title"
            value={filter.name}
            onChange={handleFilterChange}
          />
          <TextInput
            name="description"
            placeholder="Filter by company"
            value={filter.description}
            onChange={handleFilterChange}
          />
          <TextInput
            name="startDate"
            type="date"
            placeholder="Filter by start date"
            value={filter.startDate}
            onChange={handleFilterChange}
          />
        </div>
        {/* Add project Button */}
        <Button
          onClick={handleAddExperience}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded flex items-center gap-2"
        >
          <span>Add new project</span>{" "}
          <span>
            {" "}
            <FaPlus />
          </span>{" "}
        </Button>
      </div>

      {/* project items */}
      <div className="overflow-x-auto w-full">
        {loadData ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:md:grid-cols-3 lg:py-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  setCurrentProject={setCurrentProject}
                  setIsDeleteModalOpen={setIsDeleteModalOpen}
                  setIsAddEditModalOpen={setIsAddEditModalOpen}
                  setIsEditing={setIsEditing}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <DeleteProjectModal
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        isDeleteModalOpen={isDeleteModalOpen}
        confirmDelete={confirmDelete}
      />
      <EditProjectModal
        isAddEditModalOpen={isAddEditModalOpen}
        setIsAddEditModalOpen={setIsAddEditModalOpen}
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
        isEditing={isEditing}
        handleSaveProject={handleSaveProject}
        loadingAddOrEdit={loadingAddOrEdit}
      />
    </div>
  );
}
