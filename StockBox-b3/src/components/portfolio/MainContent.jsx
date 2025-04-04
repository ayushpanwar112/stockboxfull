


import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import man from "../../assets/expert/man.png"


const MainScreener = () => {

gsap.registerPlugin(useGSAP);
useGSAP(()=>{


       gsap.to(".man", {
                rotation: [10, -10],  // Rotates from 10° to -10°
                y: 10,
                duration: 1.5,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
              });
    
              gsap.from(".para", {
                opacity: 0,
                x: -30,
                duration: 1,
                ease: "power2.in",
                stagger: 0.4,
                scrollTrigger: {
                  trigger: ".para",  // Element to trigger the animation
                  start: "50% 80%",  // Animation starts when `.para` reaches 80% of the viewport height
                  end: "top 50%",  // Animation ends when `.para` reaches 50% of the viewport
                  toggleActions: "play none none none",
               
                },
              });
})
  return (
    <div className="mainContent md:flex h-full items-center">
    <div className="md:w-1/2 w-full ">
        <img src={man} alt="" className="w-[80%] man" /> 
    </div>
    <div className="md:w-1/2 text-white text-lg para w-[90%]">
    <ul className="md:block hidden">
    <li className=" text-white"><span className="font-bold text-gray-400">Portfolio Screener</span>  is an algorithmic tool for evaluating portfolio quality</li>
    <li className=" text-white"> Assesses portfolios using <span className="font-bold text-gray-400">fundamental analysis, valuation metrics, and risk theories.</span></li>
    <li className=" text-white">Provides an <span className="font-bold text-gray-400">optimized evaluation report </span>for better decision-making.</li>
    <li className=" text-white">Generates <span className="font-bold text-gray-400"> buy, sell, or hold </span>recommendations.</li>
    <li className=" text-white">Analysis is based on key risk indicators like <span className="font-bold text-gray-400">portfolio beta and standard deviation.</span> </li>

    </ul>
    <ul className="text-[12px] md:hidden mt-10"> 
    <li className=" text-white"><span className="font-bold text-gray-400">Portfolio Screener</span>  is an algorithmic tool for evaluating portfolio quality</li>
    <li className=" text-white"> Assesses portfolios using <span className="font-bold text-gray-400">fundamental analysis, valuation metrics, and risk theories.</span></li>
    <li className=" text-white">Provides an <span className="font-bold text-gray-400">optimized evaluation report </span>for better decision-making.</li>
    <li className=" text-white">Generates <span className="font-bold text-gray-400"> buy, sell, or hold </span>recommendations.</li>
    <li className=" text-white">Analysis is based on key risk indicators like <span className="font-bold text-gray-400">portfolio beta and standard deviation.</span> </li>


    </ul>
    </div>
   
  </div>
  )
}

export default MainScreener
