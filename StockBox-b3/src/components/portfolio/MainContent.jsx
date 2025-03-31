


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
    <p className="md:block hidden">
    Portfolio Screener is an algorithmic tool used for evaluation of a user’s existing portfolio quality based on fundamental analysis, valuation & portfolio risk theories to get an optimized report on user’s portfolio.

It will generate a recommendation report that will suggest buy, sell or hold on the basis of their equity portfolio beta and standard deviation etc.


    </p>
    <p className="text-[12px] md:hidden mt-10"> Portfolio Screener is an algorithmic tool used for evaluation of a user’s existing portfolio quality based on fundamental analysis, valuation & portfolio risk theories to get an optimized report on user’s portfolio.

It will generate a recommendation report that will suggest buy, sell or hold on the basis of their equity portfolio beta and standard deviation etc. 🚀</p>
    </div>
   
  </div>
  )
}

export default MainScreener
