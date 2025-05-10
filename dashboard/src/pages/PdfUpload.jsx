import { useState, useEffect } from "react";
import axios from "axios";

const PdfUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(""); // Container title (e.g., "June")
  const [pdfList, setPdfList] = useState({}); // Grouped PDFs

  useEffect(() => {
    fetchPdfs();
  }, []);

  const fetchPdfs = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/pdf/all`);
      setPdfList(data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) return alert("Please select a file and enter a title");
  
    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("title", title);
  
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/pdf/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchPdfs(); // Refresh the list
      setTitle(""); // Clear title input
      setFile(null); // Clear file selection
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Upload PDF</h2>
      <form onSubmit={handleUpload} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter container title (e.g., June)"
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
            <div
              key={title}
              style={{
                marginBottom: "20px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                background: "#f9f9f9",
              }}
            >
              <h3>📂 {title}</h3>
              {pdfList[title].map((pdf, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "5px 0",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>📄</span>
                  <p style={{ margin: 0 }}>{pdf.originalName}</p> {/* Display original file name */}
                  <a
                    href={pdf.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#007bff", textDecoration: "underline" }}
                  >
                    View
                  </a>
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
