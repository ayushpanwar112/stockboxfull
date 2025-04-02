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

        // Filter reviews with a score of 4 or higher and trim text
        const filteredReviews = res.data
          .filter((review) => review.score >= 4)
          .map((review) => ({
            ...review,
            text:
              review.text.split(" ").length > 30
                ? review.text.split(" ").slice(0, 30).join(" ") + "..."
                : review.text,
          }));

        setData(filteredReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  // Function to render stars based on the review score
  const renderStars = (score) => {
    return "⭐".repeat(score) + "☆".repeat(5 - score);
  };

  return (
    <div className="w-full mt-[40vh] md:h-auto overflow-x-hidden md:mt-0">
      <h2 className="font-[plus-jakarta-sans] font-bold md:text-[4rem] lg:text-[7vh] text-white text-center text-3xl">
        What People Say?
      </h2>

      <div className="mt-10 overflow-hidden">
        {data.length > 0 && (
          <div className="flex w-full gap-10 scrollings animate-scroll">
            {data.concat(data).map((item, index) => (
              <div
                key={index}
                className="bg-[#1D1C1C] max-w-sm p-4 rounded-lg flex flex-col md:min-w-[400px] hover:scale-105 transition-transform duration-300"
              >
                <div className="flex gap-4 pb-4">
                  <div className="w-15 h-15 rounded-full overflow-hidden">
                    <img
                      src={item.userImage}
                      alt={item.userName}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white truncate">
                      {item.userName}
                    </h2>
                    <p className="text-yellow-400 text-lg">{renderStars(item.score)}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-200">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
