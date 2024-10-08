import React from "react";
import { Button, Modal, TextInput } from "flowbite-react";
import { Spinner } from "flowbite-react";

export default function EditOrAddExperienceModal({
  isAddEditModalOpen,
  setIsAddEditModalOpen,
  currentExperience,
  setCurrentExperience,
  isEditing,
  handleSaveExperience,
  loadingAddOrEdit,
}) {
  return (
    <Modal
      show={isAddEditModalOpen}
      onClose={() => setIsAddEditModalOpen(false)}
    >
      <Modal.Header>
        {isEditing ? "Edit Experience" : "Add Experience"}
      </Modal.Header>
      <Modal.Body>
        {loadingAddOrEdit ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="space-y-4">
            <TextInput
              label="Title"
              placeholder="Job title"
              value={currentExperience?.title || ""}
              onChange={(e) =>
                setCurrentExperience({
                  ...currentExperience,
                  title: e.target.value,
                })
              }
            />
            <TextInput
              label="Company"
              placeholder="Company"
              value={currentExperience?.company || ""}
              onChange={(e) =>
                setCurrentExperience({
                  ...currentExperience,
                  company: e.target.value,
                })
              }
            />
            <TextInput
              label="Location"
              placeholder="Location"
              value={currentExperience?.location || ""}
              onChange={(e) =>
                setCurrentExperience({
                  ...currentExperience,
                  location: e.target.value,
                })
              }
            />
            <TextInput
              label="Start Date"
              type="date"
              value={currentExperience?.startDate || ""}
              onChange={(e) =>
                setCurrentExperience({
                  ...currentExperience,
                  startDate: e.target.value,
                })
              }
            />
            <TextInput
              label="End Date"
              type="date"
              value={currentExperience?.endDate || ""}
              onChange={(e) =>
                setCurrentExperience({
                  ...currentExperience,
                  endDate: e.target.value,
                })
              }
            />
            <TextInput
              label="Description"
              placeholder="Description"
              value={currentExperience?.description || ""}
              onChange={(e) =>
                setCurrentExperience({
                  ...currentExperience,
                  description: e.target.value,
                })
              }
            />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSaveExperience}
        disabled={loadingAddOrEdit}
        >Save</Button>
        <Button color="failure" onClick={() => setIsAddEditModalOpen(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
