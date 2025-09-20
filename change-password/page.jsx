"use client";
import { useState } from "react";
import Navbar from "../components/navbar";

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("❌ New password and confirm password do not match!");
      return;
    }

    if (newPassword.length < 5) {
      alert("❌ New password must be at least 5 characters long!");
      return;
    }

    // ✅ For now, just show alert
    alert("Password changed successfully ✅");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    // Later: axios.post("/user/change-password", { currentPassword, newPassword })
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow mt-6">
      <h1 className="text-2xl font-bold mb-4">Change Password</h1>

      <form onSubmit={handleChangePassword} className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-700">Current Password</label>
          <input
            type="password"
            className="w-full border p-2 rounded"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">New Password</label>
          <input
            type="password"
            className="w-full border p-2 rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Confirm New Password</label>
          <input
            type="password"
            className="w-full border p-2 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Change Password
        </button>
      </form>
    </div>
    </>
  );
}
