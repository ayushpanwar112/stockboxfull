import span from "../assets/expert/span.png";
import pc from "../assets/expert/pc.webp";

const Investments = () => {
  return (
    <div className="w-full px-5 md:px-10">
      {/* Header Section */}
      <div className="text-white flex flex-col gap-5 text-center md:text-left">
        <h1 className="md:text-8xl font-bold flex flex-col gap-5 text-3xl">
          <span className="main">FII/DII</span>
          <span className="flex main flex-col md:flex-row items-center md:items-start">
            <img src={span} alt="Expert Icon" className="w-[400px] md:w-auto" />
            Investments
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
        Analyze the daily activity of domestic and foreign institutional investors in the Indian stock market. Enjoy efficient monitoring and tracking of market trends, aiding in informed investment decisions.
        </p>
      </div>


      <div className="w-full flex justify-center md:mt-[20vh] mt-[10vh]">
        <ul className="text-white w-[80%] md:flex gap-10">
  <li>
    <strong className="">Track Market Movers</strong>
    <p className="text-gray-500 hover:text-white transform-transition duration-300 mt-3">
    Monitor actions of big bulls & bears in the market.
    </p>
  </li>
  <li>
    <strong >FII & DII Data Access</strong>
    <p className="text-gray-500 hover:text-white transform-transition duration-300 mt-3">
    Easily analyze domestic and foreign investor activity
    </p>
  </li>
<li>
    <strong>Daily Insights</strong>
    <p className="text-gray-500 hover:text-white transform-transition duration-300 mt-3">
    Stay updated on market trends with real-time investment data.
    </p>
   </li>
  
   

</ul>
   
        </div>

    </div>
  );
};

export default Investments;
