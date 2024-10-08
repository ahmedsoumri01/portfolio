import React, { useState, useEffect } from "react";
import { Button, TextInput, Table, Tooltip } from "flowbite-react";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaPlus } from "react-icons/fa";
import EditOrAddExperienceModal from "../../../components/modals/EditExperienceModal";
import {
  getExperiences,
  deleteExperience,
  createExperience,
  updateExperience,
} from "../../../service/experiencesService"; // Assume these methods exist
import { formatDate } from "../../../utils/Utils";
import DeleteExperienceModal from "../../../components/modals/DeleteExperienceModal";
import { toast } from "react-toastify";
import { Spinner } from "flowbite-react";
export default function ExperiencesList() {
  const [experiences, setExperiences] = useState([]);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [filter, setFilter] = useState({
    title: "",
    company: "",
    startDate: "",
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null);
  const [loadingAddOrEdit, setLoadingAddOrEdit] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loadData, setLoadData] = useState(false);

  const fetchExperiences = async () => {
    try {
      setLoadData(true);
      const data = await getExperiences();
      setExperiences(data);
      setFilteredExperiences(data);
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
    const filtered = experiences.filter(
      (exp) =>
        exp.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        exp.company.toLowerCase().includes(filter.company.toLowerCase()) &&
        (!filter.startDate ||
          formatDate(exp.startDate) === formatDate(filter.startDate))
    );
    setFilteredExperiences(filtered);
  }, [filter, experiences]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleAddExperience = () => {
    setIsEditing(false);
    setCurrentExperience({
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setIsAddEditModalOpen(true);
  };

  const handleEditExperience = (experience) => {
    setIsEditing(true);
    setCurrentExperience(experience);
    setIsAddEditModalOpen(true);
  };

  const handleDeleteExperience = (experienceId) => {
    setCurrentExperience(experienceId);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteExperience(currentExperience);
      fetchExperiences();
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveExperience = async () => {
    if (isEditing) {
      try {
        setLoadingAddOrEdit(true);
        await updateExperience(currentExperience._id, currentExperience);
        setLoadingAddOrEdit(false);
        toast.success("Experience updated successfully");
      } catch (error) {
        setLoadingAddOrEdit(false);

        console.error(error);
        toast.error("Error updating experience");
      }
    } else {
      try {
        setLoadingAddOrEdit(true);
        await createExperience(currentExperience);
        setLoadingAddOrEdit(false);
        toast.success("Experience added successfully");
      } catch (error) {
        setLoadingAddOrEdit(false);
        console.error(error);
        toast.error("Error adding experience");
      }
    }
    fetchExperiences();
    setIsAddEditModalOpen(false);
  };

  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center mb-4">
        {/* Filters Section */}
        <div className="flex gap-4">
          <TextInput
            name="title"
            placeholder="Filter by title"
            value={filter.title}
            onChange={handleFilterChange}
          />
          <TextInput
            name="company"
            placeholder="Filter by company"
            value={filter.company}
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
        {/* Add Experience Button */}
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded flex items-center gap-2"
          onClick={handleAddExperience}
        >
          <span>Add Experience</span>{" "}
          <span>
            {" "}
            <FaPlus />
          </span>{" "}
        </Button>
      </div>

      {/* Experience Table */}
      <div className="overflow-x-auto w-full">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Title</Table.HeadCell>
            <Table.HeadCell>Company</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Period</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Actions</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {loadData && (
              <Table.Row>
                <Table.Cell colSpan={6} className="text-center">
                <div className="flex justify-center p-4">
                  <Spinner />
                </div>
                </Table.Cell>
              </Table.Row>
            )}
            {filteredExperiences.length === 0 && loadData === false && (
              <Table.Row>
                <Table.Cell colSpan={6} className="text-center">
                  No experiences found
                </Table.Cell>
              </Table.Row>
            )}
            {filteredExperiences?.map((experience) => (
              <Table.Row key={experience._id}>
                <Table.Cell>{experience.title}</Table.Cell>
                <Table.Cell>{experience.company}</Table.Cell>
                <Table.Cell>{experience.description}</Table.Cell>
                <Table.Cell>{experience.location}</Table.Cell>
                <Table.Cell>
                  {formatDate(experience.startDate)} -{" "}
                  {formatDate(experience.endDate)}
                </Table.Cell>
                <Table.Cell>
                  <div className="flex gap-2">
                    <Tooltip content="Edit">
                      <Button onClick={() => handleEditExperience(experience)}>
                        <FaEdit />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Delete">
                      <Button
                        color="failure"
                        onClick={() => handleDeleteExperience(experience._id)}
                      >
                        <MdDelete />
                      </Button>
                    </Tooltip>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Add/Edit Modal */}
      <EditOrAddExperienceModal
        isAddEditModalOpen={isAddEditModalOpen}
        setIsAddEditModalOpen={setIsAddEditModalOpen}
        currentExperience={currentExperience}
        setCurrentExperience={setCurrentExperience}
        isEditing={isEditing}
        handleSaveExperience={handleSaveExperience}
        loadingAddOrEdit={loadingAddOrEdit}
      />

      <DeleteExperienceModal
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        confirmDelete={confirmDelete}
      />
    </div>
  );
}
