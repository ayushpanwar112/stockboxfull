import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import {
  Menu,
  PlusCircle,
  Calendar,
  Upload,
  Image,
  FileText,
  RefreshCw,
  Database,
  Home,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const Dashboard = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setExpanded(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const fetchBlogs = async () => {
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

  const fetchReviews = async () => {
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

  const navItems = [
    { path: "/tables", label: "Monthly Data", icon: <Database size={20} /> },
    { path: "/tablesYearly", label: "Yearly Data", icon: <Database size={20} /> },
    { path: "/dashboard", label: "Add Event", icon: <Calendar size={20} /> },
    { path: "/upload", label: "Add PDF", icon: <FileText size={20} /> },
    { path: "/carousel", label: "Photo Carousel", icon: <Image size={20} /> },
    { path: "/blogData", label: "Blog Data", icon: <PlusCircle size={20} /> },
  ];

  const actionButtons = [
    { 
      label: "Fetch Reviews", 
      onClick: fetchReviews, 
      icon: <RefreshCw size={20} />, 
      color: "bg-blue-500 hover:bg-blue-600"
    },
    { 
      label: "Publish Blog", 
      onClick: fetchBlogs, 
      icon: <Upload size={20} />, 
      color: "bg-green-500 hover:bg-green-600"
    },
    { 
      label: "Create Post", 
      onClick: () => window.open("https://www.blogger.com/", "_blank"), 
      icon: <PlusCircle size={20} />, 
      color: "bg-amber-500 hover:bg-amber-600" 
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${expanded ? "w-64" : "w-20"} bg-gray-800 text-white transition-all duration-300 flex flex-col`}>
        {/* Logo area */}
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {expanded && <span className="text-xl font-bold">Admin Panel</span>}
           
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
          
        </div>
        

        {/* Navigation Links */}
        <div className="flex-grow overflow-y-auto py-4">
        
          <ul className="space-y-2 px-2">
          {expanded? <h1 className="p-3 font-bold text-2xl text-violet-500 "> Dashboard</h1> : ""}
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "bg-indigo-600 text-white"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {expanded && <span className="ml-3">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className={`p-4 border-t border-gray-700 space-y-2 ${expanded ? "" : "flex flex-col items-center"}`}>
          {actionButtons.map((btn, index) => (
            <button
              key={index}
              onClick={btn.onClick}
              disabled={loading}
              className={`${btn.color} text-white font-medium ${
                expanded ? "w-full" : "w-12 h-12"
              } rounded-lg shadow-md transition-all duration-300 flex items-center justify-center ${
                expanded ? "px-4 py-2" : "p-2"
              }`}
              title={btn.label}
            >
              {loading && btn.label.includes("Fetch") ? 
                <RefreshCw className="animate-spin" size={20} /> : 
                btn.icon}
              {expanded && <span className="ml-2">{loading && (btn.label.includes("Fetch") || btn.label.includes("Publish")) ? 
                (`${btn.label.includes("Fetch") ? "Fetching..." : "Publishing..."}`) : 
                btn.label}</span>}
            </button>
          ))}
        </div>

        {/* Settings and Logout */}
        <div className={`p-4 border-t border-gray-700 ${expanded ? "" : "flex flex-col items-center"}`}>
          <div className="flex flex-col space-y-2">
            <button className={`flex items-center ${expanded ? "w-full" : "justify-center"} p-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors`}>
              <Settings size={20} />
              {expanded && <span className="ml-3">Settings</span>}
            </button>
            <button className={`flex items-center ${expanded ? "w-full" : "justify-center"} p-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors`}>
              <LogOut size={20} />
              {expanded && <span className="ml-3">Logout</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Menu className="h-6 w-6 md:hidden cursor-pointer" onClick={toggleSidebar} />
              <h1 className="ml-4 text-xl font-semibold text-gray-800">
                {navItems.find(item => item.path === location.pathname)?.label || "Dashboard"}
              </h1>
            </div>
            <div>
              <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;