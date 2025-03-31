

import span from "../assets/expert/span.png"
import rocket from "../assets/expert/rocket.png"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


import MainScreener from "../components/portfolio/MainContent";
import UspScreener from "../components/portfolio/UspScreener";

const PortfolioScreener = () => {

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
      <div className="headingSection  md:h-[60vh] flex md:gap-[30%] items-center md:flex-row flex-col gap-20 ">
          <h1 className="md:text-8xl font-bold text-white flex flex-col gap-5 text-4xl">
           <span className="main">Portfolio</span> <span className="flex main md:flex-row flex-col"><img src={span} alt="" />Screener</span>
          </h1>
          <div className="text-white flex md:h-full items-center w-full ">
            <img src={rocket} alt="" className="w-[30%] main1" />
            <div className="w-[80%] text-start main1">
            <h2 className=" flex flex-col items-start md:text-4xl text-2xl">Get a comprehensive evaluation of your portfolio’s quality and performance with a tool that uses sophisticated algorithms to deliver actionable insights.</h2>
            <button className="bg-white hover:scale-105 hover:bg-orange-400 hover:text-re  text-black font-semibold py-2 pointer px-4 rounded-full mt-4">Get Started</button>
            </div>

            
          </div>
      </div>
      <MainScreener/>
      <UspScreener/>
    </div>
  )
}

export default PortfolioScreener
