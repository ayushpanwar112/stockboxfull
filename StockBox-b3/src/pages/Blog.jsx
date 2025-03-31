import { useState, useEffect } from "react";
import BlogCard from "../components/BlogComponent/BlogCard";
import gsap from "gsap";
import axios from "axios";

import FullSphere from "../assets/Blog/fullSphere.svg";

import "../components/Css/Blog.css";
import { useGSAP } from "@gsap/react";


const Blog = () => {
     
  const [data, setData] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState(""); // Renamed to selectedKeyword

  // Predefined keywords to be shown in the frontend
  const keywords = [
    "Commodities",
    "CryptoCurrency",
    "Dollar",
    "Economic Indicators",
    "Finance",
    "Forex Market",
    "Green Energy",
    "Stock Market",
    "Option Trading",
    "Others",
    "Investment Banking",
    "Mutual Fund",
    "Technology",
    "Trading Tips",
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
        const res1 = await axios.get(`${import.meta.env.VITE_API_URL}/api/fetch`);
        const combinedData = [...res.data.reverse(), ...res1.data]; 
        setData(combinedData);
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Filter blogs based on selected keyword
  const filteredBlogs = selectedKeyword
    ? data.filter((blog) => blog.keywords?.includes(selectedKeyword)) // Changed to keywords
    : data;

  useGSAP(() => {
    const moveSphere = (e) => {
      gsap.to(".fullSphere", {
        x: e.clientX / 10 - 50,
        y: e.clientY / 10 + window.scrollY - 50,
        stagger: 0.1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveSphere);
    window.addEventListener("scroll", moveSphere);

    return () => {
      window.removeEventListener("mousemove", moveSphere);
      window.removeEventListener("scroll", moveSphere);
    };
  }, []);

  return (
    <div className="relative flex w-full bg-gradient-to-b text-white">
       <div className="absolute top-[0] right-[50%] fullSphere opacity-50 z-0">
          <img src={FullSphere} alt="FullSphere" />
          
        </div>
      {/* Sidebar for Filters */}
      <div className="hidden md:block md:w-1/4 lg:w-1/5 sticky top-0 h-screen pt-20 pl-9 z-10">
        <h2 className="text-xl font-semibold mb-4">Filter by Keyword</h2>
        <ul className="space-y-3">
          <li
            className={`cursor-pointer pl-2 rounded-md ${selectedKeyword === "" ? "bg-gray-700" : ""}`}
            onClick={() => setSelectedKeyword("")} // Updated to setSelectedKeyword
          >
            Show All
          </li>
          {keywords.map((keyword, index) => ( // Renamed category to keyword
            <li
              key={index}
              className={`cursor-pointer pl-2 rounded-md ${selectedKeyword === keyword ? "bg-gray-700" : ""}`}
              onClick={() => setSelectedKeyword(keyword)} // Updated to setSelectedKeyword
            >
              {keyword}
            </li>
          ))}
        </ul>
      </div>

      {/* Blog Content */}
      <div className="absolute top-[50%] right-[50%] fullSphere opacity-50 z-0">
          <img src={FullSphere} alt="FullSphere" />
          
        </div>
      <div className="flex-1 flex flex-col items-center p-6">
        {/* Background Decorations */}
        <div className="absolute top-[0] right-[5%] fullSphere opacity-50 z-0">
          <img src={FullSphere} alt="FullSphere" />
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold text-white m-[12vh] text-center">Blog</h1>

        {/* Dropdown for Mobile */}
        <div className="mb-6 w-full md:hidden">
          <select
            className="px-4 py-2 rounded-md bg-gray-900 w-full text-white text-sm"
            value={selectedKeyword} // Updated to selectedKeyword
            onChange={(e) => setSelectedKeyword(e.target.value)} // Updated to setSelectedKeyword
          >
            <option value="">Show All</option>
            {keywords.map((keyword, index) => ( // Renamed category to keyword
              <option key={index} value={keyword}>
                {keyword}
              </option>
            ))}
          </select>
        </div>

        {/* Blog Cards */}
        <div className="flex gap-10 flex-wrap justify-center w-full z-10 lg:w-[100%]">
          {filteredBlogs.map((blog, index) => {
              const content = blog.content;
              const regex = /<img[^>]+src="([^">]+)"/;
              const matches = content.match(regex);
              const imageUrl = matches ? matches[1] : 'default-placeholder.jpg';

          return  (
            <BlogCard 
            id={blog._id}
              key={index}
              title={blog.title || "Untitled Blog"}
              desc={
                blog.content
                  ? blog.content.replace(/<\/?[^>]+(>|$)/g, "").split(" ").slice(0, 20).join(" ") + "..."
                  : "No description available"
              }
              author={blog.author?.displayName || "Unknown"}
              comments={blog.comments || 0}
              Date={blog.
                published || "Unknown"}
              keywords={blog.keywords || []} // Updated to keywords
              imageUrl={imageUrl}
              className="z-10"
            />
          )})}
        </div>
      </div>
    </div>
  );
};

export default Blog;
