


import art from "../assets/readymade/art.png"
import ready from "../assets/ready/ready.png"
import  place from "../assets/ready/place.webp"



const StockScreener = () => {
 

  return (
    <div className="ready-made w-full h-full" >
        <div className="w-full md:flex items-center ">

          <div  className="md:w-1/2 md:ml-2 relative">
       <img src={art} alt="art" className=""/>
        <h1 className="md:text-8xl font-bold text-white flex flex-col gap-5 text-[50px] absolute md:top-[30vh] md:left-[4vh] top-[10vh]">
       
                  <span className="main flex md:flex-col font-extrabold">Stock</span><span className="flex main md:flex-row flex-col text-orange-400">Screener</span>
                 </h1>
        </div>
       <div className="md:w-1/2 md:text-4xl text-2xl text-white h-full mx-2">
      <h2>Get a competitive edge with a tool that provides in-depth analysis and ratings on every stock listed in Nifty 500,
         giving you the information, you need to invest smarter.</h2>
       </div>    
        </div>
{/*2nd page */}
        <div className="w-full h-full items-center  flex justify-between mt-[10vh] overflow-x-hidden md:flex-row flex-col text-white">
           <img src={ready} alt="" className="w-[40%]"/>
             <div className="md:ml-20 md:w-1/2 mx-3 overflow-hidden">
              <h2 className="text-4xl font-bold">Stockbox Ratings</h2>
              <p>Introducing the ultimate tool for every investor and trader in the stock market – our StockboxRating tool!</p>
              <ul className="list-disc pl-5 space-y-2">
               
                <li className="point">Investing can be complicated, but with our 
                    investment ratings tool, it doesn’t have to be. Our tool simplifies the investing process and gives you the confidence to make informed decisions.</li>
                <li className="point">Whether you’re an experienced investor or just getting started, our tool is easy 
                    to navigate and understand.</li>
                <li className="point">Provides a comprehensive analysis of every stock in the market, rating 
                    them on a range of different parameters such as Technicals, Valuation, Trust, Financial, and overall.</li>
                <li className="point">With our investment ratings tool, you’ll be able to quickly identify the top-performing stocks in the market, as well as those with high growth potential. This means you can make investments that are tailored to your specific goals and risk tolerance.</li>
                <li className="point">Our tool is powered by advanced algorithms and data analysis techniques, ensuring that the ratings are accurate, reliable, and up to date. You can trust our tool to provide you with the most current and comprehensive analysis of every stock in the market.</li>
               <li className="point">With all this information, you can make informed investment decisions and maximize your returns.</li>
                </ul>
             </div>
          
        </div>
      {/*3rd page*/}
      <div className="flex flex-col md:mt-[20vh] mt-[10vh]">
  <h1 className="md:text-8xl font-bold text-white mb-[5vh] text-center text-4xl">
    Features
  </h1>
  <div className="w-full flex justify-center">
    <ul className="text-white w-[80%] flex flex-wrap gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
      <li className="w-full md:w-auto">
        <strong>FILTER CRITERIA</strong>
        <p className="text-gray-500 hover:text-white transition duration-300 mt-3">
        Screen stocks based on 52-week high/low, sector, dividend yield, debt-free status, top gainers/losers, and more
        </p>
      </li>
      <li className="w-full md:w-auto">
        <strong>CUSTOMIZABLE SCREENS</strong>
        <p className="text-gray-500 hover:text-white transition duration-300 mt-3">
        Create and save custom filters for quick future use.
        </p>
      </li>
      <li className="w-full md:w-auto">
        <strong>USER-FRIENDLY INTERFACE</strong>
        <p className="text-gray-500 hover:text-white transition duration-300 mt-3">
        Easy-to-use design for seamless stock screening and analysis.
        </p>
      </li>
      <li className="w-full md:w-auto">
        <strong>Reliable Data:</strong>
        <p className="text-gray-500 hover:text-white transition duration-300 mt-3">
        Sources information from authorized and trustworthy providers.
        </p>
      </li>
      <li className="w-full md:w-auto">
        <strong>NEWS UPDATES</strong>
        <p className="text-gray-500 hover:text-white transition duration-300 mt-3">
        Stay informed with real-time stock news and insights.
        </p>
      </li>
      <li className="w-full md:w-auto">
        <strong>ADDITIONAL TOOLS</strong>
        <p className="text-gray-500 hover:text-white transition duration-300 mt-3">
        Includes fundamental and technical analysis for better investment decisions.
        </p>
      </li>
      <li className="w-full md:w-auto">
        <strong>Cost-Effective</strong>
        <p className="text-gray-500 hover:text-white transition duration-300 mt-3">
        Almost free, unlike competitors that charge subscription fees.
        </p>
      </li>
    </ul>
  </div>
</div>

        <div className="w-full flex px-10 mt-[10vh]  ">
          <div className="w-1/2 text-white flex flex-col ">

          <div className="flex flex-col gap-5">
             <h2 className="text-2xl font-semibold">Achieve your investment goals with</h2>
           <h1 className="text-4xl font-bold md:ml-10">Curated Stock Baskets</h1>
           <p className="text-gray-400 w-full">Smallcases are curated baskets of stocks that are managed by stockbox Research Desk.</p>
          </div>
          <button className=" md:w-1/2  mt-1/2 bg-orange-500 hover:scale-105 hover:bg-green-950 transform-transition duration-300 hover:text-white  text-black font-semibold py-2 pointer px-4 rounded-full mt-4">Discover Baskets</button>
          
          
          </div>
          <div className="w-1/2 bg-transparent ">
          <img src={place} alt="" className="object-cover rounded-2xl"/>
          </div>

        </div>
      
    </div>
  )
}

export default StockScreener

