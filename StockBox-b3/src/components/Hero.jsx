import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigator = useNavigate();
  gsap.registerPlugin(useGSAP);
  const t1 = gsap.timeline();
  useGSAP(() => {
    t1.from(".container11", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
    });
    t1.from(".container1", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
    });

    t1.from(".container2", {
      opacity: 0,
      x: -80,
      duration: 0.8,
      ease: "power2.in",
    });
    t1.from(".container3", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.in",
    });
    gsap.from(".container4", {
      opacity: 0,
      y: 500,
      duration: 0.8,
      ease: "power2.in",
    });
  }, []);

  return (
    <div className="flex flex-col items-center mt-[7%]  px-4 sm:px-6 lg:px-8">
      <div className="w-[316px]  h-[32px]  rounded-3xl text-white text-center pt-1  bg-[#262423] container1 ">
        Your Money is our responsibility
      </div>
      <div className="container2 mx-auto px-4">
        <h1
          className="md:text-[80px] text-3xl lg:text-[5vw] text-white font-bold text-center  mx-auto leading-tight  "
          style={{ fontFamily: "plus-jakarta-sans" }}
        >
          Invest in Your Future, With a
          <span className="md:block">Trusted & SEBI Registered</span>
          <span className="md:block mt-2">Research Analyst</span>
        </h1>
      </div>
      <div className="w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[92%]  mt-4 container3">
        <p className="text-sm sm:text-base md:text-lg text-[#909090] text-center 
          leading-relaxed sm:leading-loose">
          We are a SEBI Registered Research Analyst firm that assists in
          empowering your trading and investment decisions/opportunities with
          best-in-class stock market research and insights, utilizing our
          time-tested algorithmic tools.
        </p>
      </div>
      <button onClick={() => navigator("/Download")}
        className="w-[80%] sm:w-[192px] h-[48px] sm:h-[56px] 
          bg-[#262423] mt-6 sm:mt-10 text-white 
          text-base sm:text-lg font-semibold rounded-4xl 
          hover:bg-amber-600 transition-colors duration-1000 container4
          font-[plus-jakarta-sans]"
      >
        Download Now
      </button>
    </div>
  );
};

export default Hero;
