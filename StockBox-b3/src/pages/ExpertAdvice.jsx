import span from "../assets/expert/span.png"
import rocket from "../assets/expert/rocket.png"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MainContent from "../components/expert/MainContent";
import USP from "../components/expert/USP";
import { useNavigate } from "react-router-dom";

const ExpertAdvice = () => {
  const navigator =useNavigate();

    gsap.registerPlugin(useGSAP);

      useGSAP(() => {
        gsap.from(".main", {
          opacity: 0,
          x: -30,
          duration: 0.9,
          ease: "power2.in",
          stagger: 0.4,
        });

        gsap.from(".main1", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.in",
            stagger: 0.2,
          });

       
          
          

      });

  return (
    <div className=" h-full mx-10 overflow-hidden mt-[3vh] md:mt-0">
      <div className="headingSection  md:h-[60vh] flex md:gap-[40%] items-center md:flex-row flex-col gap-20 ">
          <h1 className="md:text-8xl font-bold text-white flex flex-col gap-5 text-4xl">
           <span className="main"> Expert</span> <span className="flex main md:flex-row flex-col"><img src={span} alt="" />Advice</span>
          </h1>
          <div className="text-white flex md:h-full items-center w-full ">
            <img src={rocket} alt="" className="w-[30%] main1" />
            <div className="w-[30%] text-start main1">
            <h2 className=" flex flex-col items-start md:text-4xl text-2xl">Unlock the power of expert investing with personalized stock recommendations, delivered straight to your phone inbox.</h2>
            <button className="bg-white hover:scale-105 hover:bg-orange-400 hover:text-red  w-auto text-black font-semibold py-2 pointer px-4 rounded-full mt-4"
             onClick={()=>navigator("/report")}
            >Get the Performance Report</button>
            </div>

            
          </div>
      </div>
      <MainContent/>
      <USP/>
    </div>
  )
}

export default ExpertAdvice
