import paper from "../assets/portfoliohedger/paper.png"
import headge from "../assets/portfoliohedger/headge.webp"
import headge1 from "../assets/portfoliohedger/headge1.webp"

const PortfolioHedger = () => {
  return (
    <div className="w-full h-full">
    <div className="w-full  flex">
      {/* Left Side */}
      <div className="w-1/2 flex justify-center items-center flex-col">
        <h2 className="md:text-8xl flex flex-col md:gap-5 text-white text-center text-4xl"> 
          <span>Portfolio</span>
          <span className="font-bold ml-5">Hedger</span> 
        </h2>
      </div>

      {/* Right Side */}
      <div className="w-1/2 shadow-md shadow-gray-900 flex items-center">
        <img src={paper} alt="no image" className="w-full h-full object-cover"/>     
      </div>
    </div>
    {/* second Section */} 
     <div className="w-full h-full mt-10 md:mt-[20vh] md:flex gap-10 items-center  md:px-10 px-5">
        <div className="md:w-1/2">
        <img  src={headge} alt="no image" className="w-full h-full object-cover"/>
        </div>

        <div className="md:w-1/2 h-full text-white">
        <p className="mt-5">We, at Stockbox, have spent years brainstorming and developing strategies that can be used to save our clients’ capital during times of uncertainty, when everybody else panics. Finally, we have developed the Portfolio hedger.
It is a unique tool based on risk management algorithms that can be used to mitigate drawdown risks in clients’ portfolios using derivatives strategies. Stockbox has offered this tool to let users hedge their portfolios against uncertainties that occur due to unpredictable macroeconomic& geopolitical events.
The tool gives our clients an edge as if they are prepared to face the uncertainties, they are ahead of 99% of the investors!!</p></div>
     </div>

     <div className="w-full h-full mt-10 md:mt-[20vh] md:flex gap-10 items-center  md:px-10 px-5">
     <div className="md:w-1/2  md:hidden ">
         <img  src={headge1} alt="no image" className="w-full h-full object-cover"/>    
        </div>
        <div className="md:w-1/2 h-full text-white flex flex-col gap-5">
           <h1 className="md:text-4xl text-2xl font-bold">A few of the advantages of using portfolio hedger are:</h1>
           <ul className="flex flex-col gap-5">
            <li>Portfolio Hedger saves clients’ portfolios from big losses as the tool uses algorithms that contain sophisticated statistical calculations</li>
           <li>The tool is free from emotions such as fear or greed, based on this advantage the tool is best suited when there exists fear in the market</li>
           <li>It will also help in hedging clients’ portfolios using statistical calculations to analyze portfolios.</li>
           </ul>
        </div>
        <div className="md:w-1/2  hidden md:block">
         <img  src={headge1} alt="no image" className="w-full h-full object-cover"/>    
        </div>
     </div>
    </div>
  );
}

export default PortfolioHedger;
