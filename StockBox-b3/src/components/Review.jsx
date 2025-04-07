import { useEffect, useState } from "react";
import axios from "axios";
import "./review.css";
import Marquee from "react-fast-marquee";


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
    <div className="w-full md:h-auto overflow-x-hidden md:mt-0  review-card">
      <h2 className="font-[plus-jakarta-sans] font-bold text-[4vh] md:text-[4rem] lg:text-[7vh] text-white text-center">
        What People Say?
      </h2>

      <div className="mt-10 overflow-hidden h-80">
        {data.length > 0 && (
          <div className="flex w-full gap-10 h-full ">  
          <Marquee className="overflow-hidden flex flex-row  gap-20" speed={50} pauseOnHover={true}>
            {data.concat(data).map((item, index) => (
              <div
                key={index}
                className="bg-[#1D1C1C] max-w-sm  h-40 md:h-52 p-4 rounded-lg flex flex-col mx-5 w-60 md:w-80 hover:scale-105 transition-transform duration-300 overflow-y-hdden"
              >
                <div className="flex gap-4 pb-4">
                  <div className="  w-10 md:w-15 h-10 md:h-15 rounded-full overflow-hidden">
                    <img
                      src={item.userImage}
                      alt={item.userName}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <h2 className="  text-xs lg:text-xl font-bold text-white truncate">
                      {item.userName}
                    </h2>
                    <p className="text-yellow-400  text-xs lg:text-lg">{renderStars(item.score)}</p>
                  </div>
                </div>
                <p className="text-[1.5vh] lg:text-sm text-gray-200 truncate-3-lines pb-4">
  {item.text}
</p>

              </div>
            ))}
          </Marquee>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;