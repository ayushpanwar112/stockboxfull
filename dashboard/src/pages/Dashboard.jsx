import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../contest/MyProvider";

const Dashboard = () => {
 /*  const navigate = useNavigate();
  const { data, setData, setPath } = useMyContext();
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res2 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/fetch`);
        const res1 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/blogs`);
        const combinedData = [...res1.data.reverse(), ...res2.data];
        setData(combinedData);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
 */
 /*  const handleUpdateAuthor = async (id) => {
    try {
    
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/update/${id}`, {
        displayName: authorName,
      });
      // Fetch the updated data
      const res2 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/fetch`);
      const res1 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/blogs`);
      const combinedData = [...res1.data.reverse(), ...res2.data];
      setData(combinedData);
    } catch (error) {
      console.error("Error updating author name:", error);
    }
  }; */

  return (
    <div className="bg-black text-white w-full h-screen">
    {/*   <div className="flex flex-col mt-10 gap-4">
        {data.map((item) => {
          const content = item.content;
          const regex = /<img[^>]+src="([^">]+)"/;
          const matches = content.match(regex);
          const imageUrl = matches ? matches[1] : "default-placeholder.jpg";

          return (
            <div key={item._id} className="bg-white w-full p-4 flex justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-40 h-40 bg-gray-300">
                  <img
                    src={imageUrl}
                    alt="Post Image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-black">{item.title}</h1>
                  <p className="text-gray-700">Published on: {new Date(item.published).toDateString()}</p>
                  <p className="text-gray-700">Author: {item.author.displayName || "Anonymous"}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Read More
                  </a>
                  <input
                    type="text"
                    placeholder="New Author Name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="mt-2 p-2 border border-gray-300 rounded text-black"
                  />
                  <button
                    className="bg-green-500 mt-2 p-2 rounded"
                    onClick={() => handleUpdateAuthor(item._id)}
                  >
                    Update Author Name
                  </button>
                </div>
              </div>
              <button
                className="bg-red-500 w-[100px] rounded-md"
                onClick={() => {
                  setPath(item._id);
                  navigate(`/blogs/${item._id}`);
                }}
              >
                Preview
              </button>
            </div>
          );
        })}
      </div>
    </div> */}
    </div>
  );
};

export default Dashboard;