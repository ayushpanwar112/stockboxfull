import { useGSAP } from "@gsap/react"
import broker from "../assets/brokerspng/broker"
import gsap from "gsap"


const Brokers = () => {
  gsap.registerPlugin(useGSAP)

  useGSAP(()=>{
    gsap.to(".scrolling", {
      xPercent: 20,
      duration: 25,
      ease: "none",
      repeat: -1,
      repeatDelay: 0,
      yoyo: false,
    });


    gsap.to(".scrolling2", {
      xPercent: 20,
      duration: 20,
      ease: "none",
      repeat: -1,
      repeatDelay: 0,
      yoyo: false,
    });
  })
  return (
    <div className="md:mt-[40vh] mb-[10vh] relative mt-[10vh]">
      <div className="absolute left-0 top-0 w-[100px] h-full bg-gradient-to-r from-[#161515d8] to-transparent z-10"></div>
      <div className="bg-[#1615151b] h-full overflow-hidden ">
 <h1 className="md:text-[4rem] lg:text-[7vh] text-white text-center text-3xl">Easy One Tap Execution</h1>
 <p className="md:text-[2rem] lg:text-[3vh] text-[#909090] text-center text-sm">We Support 16 brokers</p>
 <div className="fle flex-col h-[30vh] mt-10">
   {/* first row */}
   <div className="flex  md:gap-30 scrolling w-[60%] gap-10 ">
      {[...broker(),...broker()].map((item, key) => (
        <img 
          src={item} 
          alt={`Image ${key + 1}`} 
          className="md:w-[10vh] md:h-[10vh] w-[50px] h-[50px] object-cover" 
          key={key} 
        />
      ))}
    </div>
{/* second row */}
    <div className="flex  md:gap-30 scrolling2 w-[60%] mt-10 gap-10">
      {[...broker().reverse(),...broker()].map((item, key) => (
        <img 
          src={item} 
          alt={`Image ${key + 1}`} 
          className="md:w-[10vh] md:h-[10vh] w-[50px] h-[50px] object-cover" 
          key={key} 
        />
      ))}
    </div>

 </div>
      </div>
      <div className="absolute right-0 top-0 w-[100px] h-full bg-gradient-to-l from-[#161515] to-transparent z-10"></div>
    </div>
  )
}

export default Brokers








