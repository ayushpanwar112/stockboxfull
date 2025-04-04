import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import TableComponent from "./pages/TableComponent";
import TableYearComponent from "./pages/TableYearComponent";
import EventDashboard from "./pages/EventDashboard";
import Crousal_image from "./pages/Crousal_image";
import PdfUpload from "./pages/PdfUpload";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/tables" element={<TableComponent />} />
        <Route path="/tablesYearly" element={<TableYearComponent />} />
        <Route path="/dashboard" element={<EventDashboard />} />
        <Route path="/carousel" element={<Crousal_image />} />
        <Route path="/upload" element={<PdfUpload/>}/>
      </Routes>
    </div>
  );
};

export default App;
