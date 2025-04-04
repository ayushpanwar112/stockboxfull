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
        <p className="mt-5">Get peace of mind knowing that your investments are protected with a tool that uses advanced risk management algorithms to mitigate drawdown risks in your portfolio.!</p></div>
     </div>

     <div className="w-full h-full mt-10 md:mt-[20vh] md:flex gap-10 items-center  md:px-10 px-5">
     <div className="md:w-1/2  md:hidden ">
         <img  src={headge1} alt="no image" className="w-full h-full object-cover"/>    
        </div>
        <div className="md:w-1/2 h-full text-white flex flex-col gap-5">
           <h1 className="md:text-4xl text-2xl font-bold">A few of the advantages of using portfolio hedger are:</h1>
           <ul className="flex flex-col gap-5">
            <li>Portfolio Protection: Shields portfolios from significant losses using advanced algorithms.</li>
           <li>Emotion-Free Decisions: Eliminates fear and greed for objective risk management</li>
           <li>Market Fear Advantage: Most effective during volatile or uncertain market conditions.</li>
           <li>Statistical Hedging: Uses sophisticated calculations to analyze and hedge portfolios.</li>
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
