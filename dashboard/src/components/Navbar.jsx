import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggle = async () => {
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/fetch-blogs`);
      console.log("Published successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/fetch-reviews`);
      console.log("Fetched reviews successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const navButtons = [
    { path: "/tables", label: "ADD Monthly Data" },
    { path: "/tablesYearly", label: "ADD Yearly Data" },
    { path: "/dashboard", label: "Add Event" },
    { path: "/upload", label: "Add PDF / Carousel" },
    { path: "/carousel", label: "Photo Carousel" },
    {path: "/blogData", label: "Add Blog Data"},
  ];

  return (
    <nav className="w-full h-20 bg-gray-800 flex flex-wrap items-center justify-between px-6 md:px-10">
      {/* Left Section */}
      <a
        href="https://www.blogger.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-lg font-semibold"
      >
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300">
          Create Post
        </button>
      </a>

      {/* Right Section - Buttons */}
      <div className="flex flex-wrap gap-2 md:gap-4">
        {/* Fetch & Publish Buttons */}
        <button
          onClick={fetchData}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
          disabled={loading}
        >
          {loading ? "Fetching..." : "Fetch New Reviews"}
        </button>

        <button
          onClick={toggle}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
          disabled={loading}
        >
          {loading ? "Publishing..." : "Publish Blog"}
        </button>

        {/* Dynamic Navigation Buttons */}
        {navButtons.map(({ path, label }, index) => (
          <button
            key={index}
            onClick={() => navigate(path)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
