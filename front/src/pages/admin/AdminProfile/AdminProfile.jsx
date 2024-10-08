import React, { useState, useEffect } from "react";
import { Button, Label, TextInput } from "flowbite-react";
// Icons for password visibility and close button
import {
  getAdminProfile,
  updateAdminProfile,
} from "../../../service/adminService";
import { jwtDecode } from "jwt-decode";
import UpdateModal from "./UpdateModal";
import { toast } from "react-toastify";
export default function AdminProfile() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [startUpdate, setStartUpdate] = useState(false);
  const token = localStorage.getItem("token");

  const fetchAdminProfile = async () => {
    try {
      const decoded = jwtDecode(token);
      const admin = await getAdminProfile(decoded.admin.id);

      setEmail(admin.email);
      setUsername(admin.username);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAdminProfile();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSave = () => {
    try {
      setStartUpdate(true);
      const decoded = jwtDecode(token);
      const data = {
        username: username,
        email,
        password: newPassword,
        oldPassword: oldPassword,
      };
      updateAdminProfile(decoded.admin.id, data);
      fetchAdminProfile();
      // empty the password fields
      setOldPassword("");
      setNewPassword("");
    
      fetchAdminProfile();
      setStartUpdate(false);
      toast.success("Profile updated successfully");

      toggleModal();
    } catch (error) {
      console.error(error);
      setStartUpdate(false);
      toast.error("Error updating profile");
    }
  };

  return (
    <>
      {/* Blurred background when modal is open */}
      <div className={`w-full min-h-screen`}>
        <div className="bg-white rounded-lg shadow-md min-h-screen p-8">
          <div className="flex flex-col items-center mb-6">
            <img
              className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-blue-500"
              src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=800&h=533&crop=1"
              alt="Admin Avatar"
            />
            <h2 className="text-2xl font-bold text-gray-800">Admin Profile</h2>
          </div>
          <div>
            <Label htmlFor="username" value="username" />
            <TextInput
              id="username"
              type="username"
              disabled
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput
              id="email"
              type="email"
              disabled
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button className="w-full my-3" onClick={toggleModal}>
            Update Profile
          </Button>
        </div>
      </div>

      {/* Modal for updating profile */}
      <UpdateModal
        username={username}
        setUsername={setUsername}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        email={email}
        setEmail={setEmail}
        oldPassword={oldPassword}
        setOldPassword={setOldPassword}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        showOldPassword={showOldPassword}
        setShowOldPassword={setShowOldPassword}
        showNewPassword={showNewPassword}
        setShowNewPassword={setShowNewPassword}
        handleSave={handleSave}
        startUpdate={startUpdate}
      />
    </>
  );
}
