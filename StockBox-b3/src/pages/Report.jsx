import { useEffect, useState } from "react";
import axios from "axios";

const Report = () => {
  const [pdfList, setPdfList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPdfs();
  }, []);

  const fetchPdfs = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/pdf/all`);
      setPdfList(data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
      setError("Failed to load PDFs. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadPdf = async (pdfUrl, originalName) => {
    try {
      // Ensure URL is absolute
      const fullUrl = pdfUrl.startsWith('http') ? pdfUrl : 
                     `${import.meta.env.VITE_API_URL}${pdfUrl.startsWith('/') ? '' : '/'}${pdfUrl}`;
  
      const response = await axios.get(fullUrl, {
        responseType: 'blob',
        headers: {
          // Add authorization if needed
          // 'Authorization': `Bearer ${yourToken}`
        }
      });
  
      if (response.status !== 200) {
        throw new Error(`Server responded with ${response.status}`);
      }
  
      // Create safe filename
      const safeFilename = (originalName || 'document')
        .replace(/[^a-z0-9._-]/gi, '_')
        .replace(/_+/g, '_') + '.pdf';
  
      // Create download link
      const blob = new Blob([response.data], { type: response.headers['content-type'] || 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', safeFilename);
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
  
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
  
    } catch (error) {
      console.error('Download failed:', error);
      setError(`Failed to download PDF: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Document Library</h1>
          <p className="text-gray-600 mt-2">Browse and download all uploaded PDF documents</p>
        </header>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        ) : Object.keys(pdfList).length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No PDFs uploaded yet</h3>
            <p className="mt-1 text-gray-500">Upload your first document to get started.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.keys(pdfList).map((title) => (
              <div key={title} className="space-y-4">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {pdfList[title].map((pdf, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center mb-3">
                          <svg className="flex-shrink-0 h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{pdf.originalName}</p>
                            <p className="text-xs text-gray-500">{new Date(pdf.createdAt).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="mt-auto">
                          <button
                            onClick={() => downloadPdf(pdf.pdfUrl, pdf.originalName)}
                            className="w-full inline-flex justify-center items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            Download
                            <svg className="ml-1 -mr-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;