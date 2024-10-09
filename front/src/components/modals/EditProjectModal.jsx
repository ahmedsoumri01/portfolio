import React from "react";
import { Button, Modal, TextInput } from "flowbite-react";
import { Spinner } from "flowbite-react";
export default function EditProjectModal({
  isAddEditModalOpen,
  setIsAddEditModalOpen,
  currentProject,
  setCurrentProject,
  isEditing,
  handleSaveProject,
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
              label="name"
              placeholder="project name"
              value={currentProject?.name || ""}
              onChange={(e) =>
                setCurrentProject({
                  ...currentProject,
                  name: e.target.value,
                })
              }
            />
            <TextInput
              label="coverImage"
              placeholder="coverImage"
              value={currentProject?.coverImage || ""}
              onChange={(e) =>
                setCurrentProject({
                  ...currentProject,
                  coverImage: e.target.value,
                })
              }
            />

            <TextInput
              label="images"
              placeholder="images"
              value={"images" || ""}
            />
            <TextInput
              label="description"
              placeholder="description"
              value={currentProject?.description || ""}
              onChange={(e) =>
                setCurrentProject({
                  ...currentProject,
                  description: e.target.value,
                })
              }
            />
            <TextInput
              label="sourceCode"
              placeholder="sourceCode"
              value={currentProject?.sourceCode || ""}
              onChange={(e) =>
                setCurrentProject({
                  ...currentProject,
                  sourceCode: e.target.value,
                })
              }
            />
            <TextInput
              label="status"
              placeholder="status"
              value={"status" || ""}
            />
            <TextInput
              label="startDate"
              placeholder="startDate"
                type="date"
              value={currentProject?.startDate || ""}
              onChange={(e) =>
                setCurrentProject({
                  ...currentProject,
                  startDate: e.target.value,
                })
              }
            />
                  <TextInput
              label="endDate"
              placeholder="endDate"
                type="date"
              value={currentProject?.endDate || ""}
              onChange={(e) =>
                setCurrentProject({
                  ...currentProject,
                  endDate: e.target.value,
                })
              }
            />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSaveProject} disabled={loadingAddOrEdit}>
          Save
        </Button>
        <Button color="failure" onClick={() => setIsAddEditModalOpen(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
