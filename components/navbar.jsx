"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token"); // clear fake login
    router.push("/login"); // back to login
  };

  return (
    <nav className="fixed top-0 left-0 w-screen p-4 bg-blue-600 text-white flex justify-between items-center z-50">
      {/* Left side navigation */}
      <div className="flex gap-6">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      {/* Right side menu */}
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-blue-800 px-3 py-1 rounded"
        >
          ☰ Menu
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
            <Link
              href="/profile"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Manage Profile
            </Link>
            <Link
              href="/change-password"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Change Password
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
