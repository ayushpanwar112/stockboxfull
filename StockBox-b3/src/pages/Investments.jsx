import span from "../assets/expert/span.png";
import pc from "../assets/expert/pc.webp";

const Investments = () => {
  return (
    <div className="w-full px-5 md:px-10">
      {/* Header Section */}
      <div className="text-white flex flex-col gap-5 text-center md:text-left">
        <h1 className="md:text-8xl font-bold flex flex-col gap-5 text-3xl">
          <span className="main">Expert</span>
          <span className="flex main flex-col md:flex-row items-center md:items-start">
            <img src={span} alt="Expert Icon" className="w-[400px] md:w-auto" />
            Advice
          </span>
        </h1>
        <h2 className="md:text-4xl text-xl">
          Unlock the power of expert investing with personalized stock recommendations, delivered straight to your phone inbox.
        </h2>
      </div>

      {/* Content Section */}
      <div className="mt-[10vh] flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-[10%]">
        {/* Image */}
        <img src={pc} alt="PC" className="w-full md:w-1/2 object-cover" />
        
        {/* Text */}
        <p className="text-white text-lg md:text-2xl text-center md:text-left">
          It is always good to keep an eye on what the big bulls (& bears) are doing! 
          This Stockbox tool makes FII’s and DII’s data easily accessible, 
          allowing clients to track and analyze the daily activity of domestic and foreign investors in the Indian stock market.
        </p>
      </div>
    </div>
  );
};

export default Investments;
