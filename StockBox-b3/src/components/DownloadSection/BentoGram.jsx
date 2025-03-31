import ph1 from "../../assets/Download/BentoGram/ph1.png"
import ph2 from "../../assets/Download/BentoGram/ph2.png"
import ph3 from "../../assets/Download/BentoGram/ph3.png"
import box from "../../assets/Download/BentoGram/box.png"

const BentoGram = () => {
  return (
    <div className="w-full px-4 md:px-16 md:mt-[20vh] mt-10  ">
      {/* Title Section */}
      <div className="text-center mb-10 md:mb-16">
  <h2 className=" font-bold mb-4 text-white md:text-[2vw] text-3xl ">
    Experience StockBox on Your Mobile
  </h2>
  <p className=" md:text-[1.2vw] text-gray-300 text-sm">
    Download our mobile app to access real-time market data and insights on the go
  </p>
</div>


      {/* Grid Layout */}
     {/*  <div className="grid grid-cols-2 gap-5">
  <div className="w-full h-[50vh] bg-amber-400">a</div>
  <div className="w-full bg-amber-700 h-[60vh]">b</div>
  <div className="w-full h-[50vh] bg-amber-400">c</div>
 
</div> */}
<div className="w-full h-full flex gap-5 justify-center">
    <div className="flex flex-col w-[40%] gap-5">
     <div className="w-full h-[30vh]  hover:scale-150 transition-transform duration-500 ">
      <img src={ph2} alt="no image" className="w-full h-full object-cover rounded-sm"/>
     </div>
     <div className="w-full h-[30vh]  hover:scale-150 transition-transform duration-500">
     <img src={ph3} alt="no image" className="w-full h-full object-cover rounded-sm"/>
     </div>
    </div>

<div className="w-[40%] h-full  flex flex-col gap-5">
    <div className="w-full h-[45vh] 0 hover:scale-150 transition-transform duration-500">
    <img src={ph1} alt="no image" className="w-full h-full object-cover rounded-sm"/>
    </div>
    <div className="w-full h-[15vh] bg-black relative rounded-2xl">
      <img src={box} alt="no image" className="absolute w-[1000px] h-full object-fill rounded-lg"/>
      <h2 className="absolute md:bottom-[30%] md:left-[20%] text-white md:text-6xl flex text-2xl top-[20%] 
      left-[25%] hover:text-amber-600 transition-all duration-900 hover:scale-150 lg:text-[10vh]">TRY NOW</h2>
    </div>
</div>
</div>

    </div>
  );
};

export default BentoGram;
