import { useEffect, useState } from "react";
import axios from "axios";
import "./review.css";

const Review = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/review`);
        console.log(res.data); // Debugging: Log fetched data
        setData(res.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="w-full mt-[40vh] md:h-auto overflow-x-hidden md:mt-0">
      <h2 className="font-[plus-jakarta-sans] font-bold md:text-[4rem] lg:text-[7vh] text-white text-center text-3xl">
        What People Say?
      </h2>

      <div className="flex flex-col mt-10 gap-5">
        {/* First row */}
        {data.length > 0 && (
          <div className="flex w-full gap-10 scrollings">
            {[...data,...data].map((item, index) => (
              <div
                key={index}
                className="bg-[#1D1C1C] max-w-sm p-4 rounded-lg flex flex-col md:min-w-[400px]"
              >
                <div className="flex gap-4 pb-4">
                  <div className="w-15 h-15 rounded-full overflow-hidden">
                    <img
                      src={item.userImage}
                      alt={item.userName}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-white truncate flex py-2">
                    {item.userName}
                  </h2>
                </div>
                <p className="text-sm text-gray-200">{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* Second row */}
        <div className="hidden md:block">
        {data.length > 0 && (
          <div className="md:flex w-full gap-10  scrollings  ">
            {[...data,...data].reverse().map((item, index) => (
              <div
                key={index}
                className="bg-[#1D1C1C] max-w-sm p-4 rounded-lg flex flex-col md:min-w-[400px]"
              >
                <div className="flex gap-4 pb-4">
                  <div className="w-15 h-15 rounded-full overflow-hidden">
                    <img
                      src={item.userImage}
                      alt={item.userName}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-white truncate flex py-2">
                    {item.userName}
                  </h2>
                </div>
                <p className="text-sm text-gray-200">{item.text}</p>
              </div>
            ))}
          </div>
        )}</div>
      </div>
    </div>
  );
};

export default Review;
