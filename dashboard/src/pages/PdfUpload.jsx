import { useState, useEffect } from "react";
import axios from "axios";

const PdfUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(""); // PDF title state
  const [pdfList, setPdfList] = useState({}); // Store PDFs grouped by title
  const [editingFile, setEditingFile] = useState(null); // Track which file is being edited
  const [newFileName, setNewFileName] = useState(""); // New file name input state

  useEffect(() => {
    fetchPdfs();
  }, []);

  const fetchPdfs = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/pdf/all`);
      const groupedData = groupByTitle(data);
      setPdfList(groupedData);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return alert("Please select a file and enter a title");

    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("title", title); // Send title to backend

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/pdf/upload`, formData);
      fetchPdfs();
      setTitle(""); // Clear title input after upload
      setFile(null); // Clear file selection
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleDownload = async (pdfUrl, fileName) => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const handleEditFileName = (pdf) => {
    setEditingFile(pdf._id); // Set the editing file ID
    setNewFileName(pdf.title); // Pre-fill with the current file name
  };

  const handleSaveFileName = async (pdf) => {
    if (!newFileName.trim()) return alert("File name cannot be empty");

    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/pdf/update/${pdf._id}`, {
        newTitle: newFileName,
      });

      setEditingFile(null); // Exit edit mode
      fetchPdfs(); // Refresh list
    } catch (error) {
      console.error("Error updating file name:", error);
    }
  };

  const groupByTitle = (pdfs) => {
    return pdfs.reduce((acc, pdf) => {
      const { title } = pdf;
      if (!acc[title]) acc[title] = [];
      acc[title].push(pdf);
      return acc;
    }, {});
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Upload PDF</h2>
      <form onSubmit={handleUpload} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter PDF title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          required
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Upload</button>
      </form>

      <h2>All PDFs</h2>
      <div>
        {Object.keys(pdfList).length === 0 ? (
          <p>No PDFs uploaded yet.</p>
        ) : (
          Object.keys(pdfList).map((title) => (
            <div key={title} style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              background: "#f9f9f9"
            }}>
              <h3>📂 {title}</h3>
              {pdfList[title].map((pdf, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "5px 0",
                  borderBottom: "1px solid #ddd"
                }}>
                  <span style={{ fontSize: "24px" }}>📄</span>
                  {editingFile === pdf._id ? (
                    <>
                      <input
                        type="text"
                        value={newFileName}
                        onChange={(e) => setNewFileName(e.target.value)}
                        style={{ padding: "5px", flex: 1 }}
                      />
                      <button onClick={() => handleSaveFileName(pdf)} style={{
                        backgroundColor: "green",
                        color: "#fff",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                        borderRadius: "5px"
                      }}>
                        Save
                      </button>
                      <button onClick={() => setEditingFile(null)} style={{
                        backgroundColor: "red",
                        color: "#fff",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                        borderRadius: "5px"
                      }}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <p style={{ margin: 0 }}>{pdf.title}</p>
                      <button onClick={() => handleEditFileName(pdf)} style={{
                        backgroundColor: "#ffc107",
                        color: "#fff",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                        borderRadius: "5px"
                      }}>
                        Edit
                      </button>
                      <button onClick={() => handleDownload(pdf.pdfUrl, pdf.title)} style={{
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                        borderRadius: "5px"
                      }}>
                        Download
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PdfUpload;
