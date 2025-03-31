import { useGSAP } from "@gsap/react";
import mobile from "../../assets/expert/mobile.webp";
import gsap from "gsap";

const USP = () => {


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
      <div className="text-white text-lg md:w-1/2 w-full ml-[8vw] usp1">
        <h2 className="font-bold">USPs</h2>
        <ul className="flex flex-col w-full ">
            <li>Credentials and experience</li>
            <li> Investment Philosophy</li>
            <li>Accessibility and availability</li>
            <li>Reputation</li>
            <li>Risk management</li>
           



        </ul>
      </div>
      <div className="w-1/2 hidden md:block">
        <img src={mobile} alt="no image" className="w-full "/>
      </div>
    </div>
  )
}

export default USP
