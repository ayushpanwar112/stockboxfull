//Doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import handPhone from "../assets/handphone.png";
import backLight from "../assets/backlight.png";
import phoneReplace from "../assets/phoneReplace.png";
import { useGSAP } from "@gsap/react";
import ComprehensiveIcon from "../assets/Icons/ComprehensiveIcon.svg";
import AnalysisIcon from "../assets/Icons/AnalysisIcon.svg";
import KnowledgeIcon from "../assets/Icons/KnowledgeIcon.svg";
import CustomizableIcon from "../assets/Icons/CustomizableIcon.svg";
import TrackIcon from "../assets/Icons/TrackIcon.svg";
import AccessIcon from "../assets/Icons/AccessIcon.svg";
import axios from "axios";




const ServiceAnimate = () => {

 




  const Data = {
    Set1: {
      icons:[
        KnowledgeIcon,
        ComprehensiveIcon,
        AnalysisIcon,
      ],
      titles: [
        "Knowledge and Expertise",
        "Comprehensive Market Coverage",
        "Investment Strategy",
      ],
      infos: [
        "Stockbox analysts have deep expertise in the stock market, investment strategies, and financial analysis, backed by strong education and experience.",
               "We provide extensive market and sector coverage, aligning with clients’ investment goals through in-depth analysis and trend evaluation.",
        "Our approach is scientific, relying on disciplined, systematic investment strategies rather than speculation or market hype.",
      ],
    },
    Set2: {
      icons:[
        AccessIcon,
        TrackIcon,
        CustomizableIcon,
      ],
      titles: [
        "In-depth Analysis and Insights",
        "Access to the Team",
        "Track Record",
        "Customizable Solutions",
      ],
      infos: [
        "Beyond data, our research includes insightful analysis and interpretations, helping investors make informed decisions and stay ahead.",
        "We offer customized research solutions tailored to individual investment needs, ensuring personalized support and guidance.",
        "Our analysts have a proven track record of delivering accurate and profitable investment recommendations.",
        "We provide clear, concise communication and personal support, ensuring expert guidance on investments and portfolio managem",
      ],
    },
  };

  gsap.registerPlugin(useGSAP);
  const [GapBtwSection, setGapBtwSection] = useState(100);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline();

    t1.to(".sectionFirst", {
      duration: 3,
      transform: "translateY(-160%)",
      opacity: 1,

      scrollTrigger: {
        trigger: ".sectionFirst",
        scroller: "body",
        start: "top 210%",
        end: "top 0%",
        scrub: 1,
      },
    });
    t1.to(".sectionSecond", {
      duration: 1,
      transform: "translateY(-200%)",
      opacity: 1,

      scrollTrigger: {
        trigger: ".sectionSecond",
        scroller: "body",
        start: "top 235%",
        end: "top 0%",
        scrub: 1,
      },
    });

    t1.from(".phoneReplace", {
      duration: 0.5,
      opacity: 0,
      top: "100%",
      scrollTrigger: {
        trigger: ".phoneReplace",
        scroller: "body",
        start: `{top ${GapBtwSection}%}`,
        end: "top 20%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <div className="justify-center h-[140vh] md:h-[118vh]  items-center hidden lg:flex lg:justify-normal lg:items-start">
        {/* Left side: Sticky element */}
        <div className="w-1/2 h-[70vh] sticky top-12 pt-40  flex-col items-center justify-center hidden md:hidden lg:flex ">
        <h1 className="text font-bold text-[5vh] lg:text-4xl text-center bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
         We are trusted by thousands of people
         </h1>

          <div className=" flex justify-center  gap-28  ">
            <img src={backLight} width="78%" className=" flex md:relative " />
            <img
              src={handPhone}
              className="flex md:absolute top-24"
              width="55%"
              alt="handPhone"
            />
            <img
              src={phoneReplace}
              className="flex md:absolute phoneReplace top-[32.5%] left-[41%] opacity-1"
              width="20.5%"
              alt="handPhone"
            />
          </div>
        </div>

        {/* Right side: Scrollable content */}
        <div className="  w-full lg:w-1/2 h-full flex flex-col  justify-center items-center lg:justify-normal  lg:items-center  gap-14 p-4">
          

          {Object.keys(Data).map((key, index) => (
            <div
              key={index}
              className={`flex flex-col  gap-10 p-4 rounded-lg ${
                index == 0
                  ? "sectionFirst  translate-y-[230%]"
                  : "sectionSecond translate-y-[200%] "
              }`}
            >
              {Data[key].titles.map((title, titleIndex) => (
                <div key={titleIndex} className="flex flex-col gap-3">
                  
                  <div className="flex flex-row gap-3.5 items-center">
                    <img src = {Data[key].icons[titleIndex]} alt ="Icon" width={35}></img>
                  <h2 className="text-2xl font-bold text-neutral-300">{title}</h2>
                  </div>
                  <p className="text-neutral-500">{Data[key].infos[titleIndex]}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex h-[130vh] justify-center items-center  lg:hidden">
        <div className="w-full md:w-full h-full bg-black-100 pt-16 justify-center items-center  ">
        <h1 className="text font-bold  text-[5vh] text-center bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent"> 
          {""}
         We are trusted by thousands of people
         </h1>

          {Object.keys(Data).map((key, index) => (
            <div
              key={index}
              className={`flex flex-col gap-10 p-4 text-neutral-300 rounded-lg `}
            >
              {Data[key].titles.map((title, titleIndex) => (
                <div key={titleIndex} className="flex flex-col gap-3">
                  <div className="flex flex-row gap-3.5 items-center">
                    <img src = {Data[key].icons[titleIndex]} alt ="Icon" width={35}></img>
                  <h2 className="text-2xl font-bold text-neutral-300">{title}</h2>
                  </div>
                  <p className="text-neutral-500">{Data[key].infos[titleIndex]}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceAnimate;
