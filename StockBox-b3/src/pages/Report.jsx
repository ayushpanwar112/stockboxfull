import { useEffect, useState } from "react";
import axios from "axios";

const Report = () => {
  const [pdfList, setPdfList] = useState({});

  useEffect(() => {
    fetchPdfs();
  }, []);

  const fetchPdfs = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/pdf/all`);
      const groupedData = groupByTitle(data);
      setPdfList(groupedData);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
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

  return (
    <div className="p-6 min-h-screen ">
      <h1 className="text-3xl font-bold mb-4 text-white text-center mb-10">Performance Report</h1>
      {Object.keys(pdfList).length === 0 ? (
        <p className="text-center text-lg text-gray-500 mt-10">No PDFs uploaded yet.</p>
      ) : (
        <div className="space-y-6">
          {Object.keys(pdfList).map((title) => (
            <div
              key={title}
              className="p-4 bg-amber-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center justify-center gap-2">
                <span>📂</span> {title}
              </h3>
              <div className="space-y-2">
                {pdfList[title].map((pdf, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 py-2 ${
                      index !== pdfList[title].length - 1 ? "border-b border-gray-200" : ""
                    }`}
                  >
                    <span className="text-2xl">📄</span>
                    <p className="flex-1 font-medium text-gray-700 truncate">{pdf.title}</p>
                    <button
                      onClick={() => handleDownload(pdf.pdfUrl, pdf.title)}
                      className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Report;