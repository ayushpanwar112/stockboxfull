import { useGSAP } from "@gsap/react";
import mobile from "../../assets/expert/mobile.webp";
import gsap from "gsap";

const UspScreener = () => {


    gsap.registerPlugin(useGSAP);
    useGSAP(()=>{
    
    
       
        
                  gsap.from(".usp", {
                    opacity: 0,
                    x: -30,
                    duration: 1,
                    ease: "power2.in",
                    stagger: 0.4,
                    scrollTrigger: {
                      trigger: ".usp1",  // Element to trigger the animation
                      start: "70% 20%",  // Animation starts when `.para` reaches 80% of the viewport height
                      end: "top 50%",  // Animation ends when `.para` reaches 50% of the viewport
                      toggleActions: "play none none none",
                      
                    },
                  });})

  return (
    <div className="flex mt-20  w-full md:gap-[40vw] usp">
      <div className="text-white text-lg md:w-1/2 w-full md:ml-[8vw] ml-5 usp1 ">
        <h2 className="font-bold">A few of the USPs of the tool are:</h2>
        <ul className="flex flex-col w-full list-disc ">
            <li>Generates a portfolio’s evaluation report.</li>
            <li>   Suggests selling of underwhelming stocks.</li>
            <li>Also suggests buying substitute stocks with better credentials.</li>
            <li>Shows final report after the changes are made in the portfolio.</li>
            <li>Easy to use, requires only a few steps.</li>
            <li>Produces an evaluation report quickly.</li>
            <li>Free from personal bias and emotions, as the tool is based on algorithms.</li>
            <li>The analysis is purely based on logic and calculation, due to the absence of human intervention</li>
        </ul>
      </div>
      <div className="w-1/2 hidden md:block">
        <img src={mobile} alt="no image" className="w-full "/>
      </div>
    </div>
  )
}

export default UspScreener
