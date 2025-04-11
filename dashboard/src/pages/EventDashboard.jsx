import { useState, useEffect } from "react";
import axios from "axios";

const EventDashboard = () => {
  const [eventImage, setEventImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch the event image when the component loads
  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/event`);
      if (res.data.image) {
        setEventImage(res.data.image);
      }
    } catch (err) {
      console.error("Error fetching event:", err);
    }
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Upload image to the backend
  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select an image first.");

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/event/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setEventImage(res.data.event.image); // Update with full URL returned from backend
      setSelectedFile(null);
    } catch (err) {
      console.error("Error uploading event image:", err);
    }
  };

  // Delete the event image
  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/event`);
      setEventImage(null);
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Event Management</h2>

      {/* Upload Image */}
      <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
        disabled={!selectedFile}
      >
        Upload Image
      </button>

      {/* Show Uploaded Image */}
      {eventImage && (
        <div className="mt-4">
          <h3 className="text-lg font-medium">Current Event Image</h3>
          <img src={eventImage} alt="Event" className="w-full h-auto rounded-md mt-2" />
          <button onClick={handleDelete} className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md">
            Delete Image
          </button>
        </div>
      )}
    </div>
  );
};

export default EventDashboard;
