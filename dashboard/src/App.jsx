import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Navbar from "./components/Navbar";
import TableComponent from "./pages/TableComponent";
import TableYearComponent from "./pages/TableYearComponent";
import EventDashboard from "./pages/EventDashboard";
import Crousal_image from "./pages/Crousal_image";
import PdfUpload from "./pages/PdfUpload";
import Login from "./pages/Login";

import CreateBlogs from "./pages/createBlog/CreateBlogs";
import SingleBlog from "./pages/Blog";



const App = () => {

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/tables" element={<TableComponent />} />
        <Route path="/tablesYearly" element={<TableYearComponent />} />
        <Route path="/dashboard" element={<EventDashboard />} />
        <Route path="/carousel" element={<Crousal_image />} />
        <Route path="/upload" element={<PdfUpload/>}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/create-blogs" element={<CreateBlogs />}></Route>
        <Route path="/update_blog/:id" element={<CreateBlogs />}></Route>
        
      </Routes>
    </div>
  );
};

export default App;
