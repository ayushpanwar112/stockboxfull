import { useEffect, useState } from "react";
import axios from "axios";

const Report = () => {
  const [pdfList, setPdfList] = useState({}); // Grouped PDFs

  useEffect(() => {
    fetchPdfs();
  }, []);

  const fetchPdfs = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/pdf/all`);
      setPdfList(data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  return (
    <div className="p-6 min-h-screen">
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

export default Report;