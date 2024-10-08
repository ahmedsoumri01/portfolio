import React from 'react'
import { Button, Modal } from 'flowbite-react'
export default function DeleteExperienceModal({
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    confirmDelete,
}) {
  return (
    <div>
      <Modal
        show={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this experience?
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={confirmDelete}>
            Yes, Delete
          </Button>
          <Button onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
