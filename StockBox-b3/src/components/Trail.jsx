
import { useNavigate } from "react-router-dom";
import mockup from "../assets/mockup.svg";

const Trail = () => {
  const navigator= useNavigate();

   return (
      <div className="flex relative text-white h-full bg">
            <img src ={mockup} width="20%" className ="absolute "></img>
            <div className="flex flex-col w-full items-center mb-20 relative">
            <h2 className=" font-bold mb-4 text-3xl lg:text-5xl">Start Your Free Trial 
            </h2>
            <div className="text-neutral-400 mb-4 text-sm flex flex-col justify-center items-center">
            <p>With Our All-In-One Setup </p>
            <p>Trading And Stock Analysis Are Seamless</p>
            </div>
            <p className="text-neutral-300 text-sm">Start Your Free Trial</p>
            <button className="bg-white hover:scale-105 hover:bg-orange-400 hover:text-white  text-black font-semibold py-2 pointer px-4 rounded-full mt-4"
            onClick={()=>navigator("/contactus")}
            >Get Start</button>
            </div>
            </div>
  )
}

export default Trail
