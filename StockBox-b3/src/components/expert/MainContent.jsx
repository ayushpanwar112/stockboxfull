import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import man from "../../assets/expert/man.png"


const MainContent = () => {

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
     <li>Smart Investing Made Easy: No need to track market trends—our tool does it for you!</li>
     <li>Expert Stock Picks: Get curated stock recommendations directly on your smartphone.</li>
     <li></li>
    </ul>
    <p className="text-[12px] md:hidden mt-10">Tired of tracking stock market trends? Let our tool do the work for you!

Get expert stock recommendations straight to your smartphone. Our analysts curate top-performing stocks to help you invest wisely.

Perfect for beginners and experts alike, our tool saves you time while maximizing returns. Customize preferences, set goals, and make informed decisions effortlessly.

Join our community and start investing smarter today. Subscribe now and secure your financial future! 🚀</p>
    </div>
   
  </div>
  )
}

export default MainContent
