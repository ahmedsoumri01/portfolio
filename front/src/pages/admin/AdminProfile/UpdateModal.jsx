import React from 'react'
import { Button, Label, TextInput, Modal } from "flowbite-react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa"; 
export default function UpdateModal({
  isModalOpen,
  toggleModal,
  email,
  setEmail,
  oldPassword,
  setOldPassword,
  newPassword,
  setNewPassword,
  showOldPassword,
  setShowOldPassword,
  showNewPassword,
  setShowNewPassword,
  handleSave
}) {
  return (
    <div>
       <Modal show={isModalOpen} size="md" popup={true} onClose={toggleModal}>
        <Modal.Header className='bg-blue-500'>
          <div className="flex justify-between items-center p-1 mb-2">
            <h3 className="text-xl font-medium">Update Profile</h3>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6 py-4">
            <div>
              <Label htmlFor="newEmail" value="New Email" />
              <TextInput
                id="newEmail"
                type="email"
                placeholder="Enter new email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <Label htmlFor="oldPassword" value="Old Password" />
              <TextInput
                id="oldPassword"
                type={showOldPassword ? "text" : "password"}
                placeholder="Enter old password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <div
                className="absolute inset-y-0 right-0 pt-5 pr-3 flex items-center cursor-pointer text-white"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="relative">
              <Label htmlFor="newPassword" value="New Password" />
              <TextInput
                id="newPassword"
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 text-white pt-5 flex items-center cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSave} className='w-full'>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
