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
        console.log(res.data);

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

  const renderStars = (score) => {
    return "⭐".repeat(score) + "☆".repeat(5 - score);
  };

  return (
    <div className="w-full px-4 py-8 md:py-12 overflow-x-hidden review-card">
      <h2 className="font-[plus-jakarta-sans] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center">
        What People Say?
      </h2>

      <div className="mt-6 md:mt-10 h-auto mb-5">
        {data.length > 0 && (
          <div className="w-full h-full">  
            <Marquee 
              className="flex flex-row gap-4 md:gap-10 overflow-y-hidden" 
              speed={50} 
              pauseOnHover={true}
              gradient={false}
            >
              {data.concat(data).map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1D1C1C] flex-shrink-0 w-52 sm:w-72 md:w-80 h-48 sm:h-44 md:h-52 p-4 rounded-lg flex flex-col mx-2 hover:scale-105 transition-transform duration-300
                  
                glow-card "
                >
                  <div className="flex gap-3 pb-2 md:pb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                      <img
                        src={item.userImage}
                        alt={item.userName}
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <div>
                      <h2 className="text-sm sm:text-base md:text-lg font-bold text-white truncate max-w-[180px]">
                        {item.userName}
                      </h2>
                      <p className="text-yellow-400 text-xs sm:text-sm md:text-base">
                        {renderStars(item.score)}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 line-clamp-4">
                    {item.text}
                  </p>
                </div>
              ))}
            </Marquee>
          </div>
        )}
      </div>
      <div className="mt-6 md:mt-0 h-auto hidden md:block">
        {data.length > 0 && (
          <div className="w-full h-full">  
          <Marquee 
              className="flex flex-row gap-4 md:gap-10 overflow-y-hidden" 
              speed={50} 
              pauseOnHover={true}
              gradient={false}
            >
              {data.concat(data).reverse().map((item, index) => (
                <div
                  key={index}
                  className="bg-[#1D1C1C] flex-shrink-0 w-52 sm:w-72 md:w-80 h-48 sm:h-44 md:h-52 p-4 rounded-lg flex flex-col mx-2 hover:scale-105 transition-transform duration-300
                  
                glow-card "
                >
                  <div className="flex gap-3 pb-2 md:pb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                      <img
                        src={item.userImage}
                        alt={item.userName}
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                    <div>
                      <h2 className="text-sm sm:text-base md:text-lg font-bold text-white truncate max-w-[180px]">
                        {item.userName}
                      </h2>
                      <p className="text-yellow-400 text-xs sm:text-sm md:text-base">
                        {renderStars(item.score)}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 line-clamp-4">
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