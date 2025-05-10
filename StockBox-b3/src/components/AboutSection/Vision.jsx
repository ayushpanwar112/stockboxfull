import graphic from"../../assets/aboutus/graphic.png"
import stock from "../../assets/aboutus/stock.png"
import { Ball2, Ball3 } from "../../assets/aboutus/SVG/Ball"
import Design from "../../assets/aboutus/SVG/Design"
import Effects from "../../assets/aboutus/SVG/Effect"
import Management from "./Management"
import "../Css/vision.css"


const Vision = () => {
  return (
    <div className="relative ">

 
   <div className=" w-full h-auto  flex mt-25  ">  
          <Design className="absolute left-0 top-0"/>  
           <div className=" flex flex-col relative">
             
           <div className="w-[300px] md:w-[400px] md:h-[91px] h-[78px] bg-white rounded-[100px] flex  text-center gap-5 items-center px-10">
                 <span>
                 <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden lg:block">
<g clipPath="url(#clip0_722_3516)">
<path d="M35.9774 1.78711L30.5379 7.23633L42.7645 19.4629L48.2039 14.0234C50.3426 11.8848 50.3426 8.42773 48.2039 6.28906L43.7117 1.78711C41.5731 -0.351562 38.116 -0.351562 35.9774 1.78711ZM28.1258 9.23828L27.2274 9.51172L13.1551 13.7305C11.2117 14.3164 9.66877 15.8008 9.02423 17.7344L0.371889 43.5352C0.000795364 44.6387 0.274233 45.8691 1.08478 46.6992L16.0848 31.709C15.7918 31.0938 15.6258 30.4102 15.6258 29.6875C15.6258 27.0996 17.7254 25 20.3133 25C22.9012 25 25.0008 27.0996 25.0008 29.6875C25.0008 32.2754 22.9012 34.375 20.3133 34.375C19.5906 34.375 18.907 34.209 18.2918 33.916L3.29181 48.916C4.13166 49.7266 5.35236 50.0098 6.45587 49.6289L32.2664 40.9766C34.1903 40.332 35.6844 38.7891 36.2703 36.8457L40.4891 22.7734L40.7528 21.875L28.1258 9.23828Z" fill="#F66407"/>
</g>
<defs>
<clipPath id="clip0_722_3516">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>

<svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:hidden ">
<g clipPath="url(#clip0_722_3516)">
<path d="M35.9774 1.78711L30.5379 7.23633L42.7645 19.4629L48.2039 14.0234C50.3426 11.8848 50.3426 8.42773 48.2039 6.28906L43.7117 1.78711C41.5731 -0.351562 38.116 -0.351562 35.9774 1.78711ZM28.1258 9.23828L27.2274 9.51172L13.1551 13.7305C11.2117 14.3164 9.66877 15.8008 9.02423 17.7344L0.371889 43.5352C0.000795364 44.6387 0.274233 45.8691 1.08478 46.6992L16.0848 31.709C15.7918 31.0938 15.6258 30.4102 15.6258 29.6875C15.6258 27.0996 17.7254 25 20.3133 25C22.9012 25 25.0008 27.0996 25.0008 29.6875C25.0008 32.2754 22.9012 34.375 20.3133 34.375C19.5906 34.375 18.907 34.209 18.2918 33.916L3.29181 48.916C4.13166 49.7266 5.35236 50.0098 6.45587 49.6289L32.2664 40.9766C34.1903 40.332 35.6844 38.7891 36.2703 36.8457L40.4891 22.7734L40.7528 21.875L28.1258 9.23828Z" fill="#F66407"/>
</g>
<defs>
<clipPath id="clip0_722_3516">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>
   
                 </span>
                 <h2 className="font-bold lg:text-[30px] text-[20px]"><span>Vision </span>& Mission</h2>
               </div>
               <p className=" mt-5 space-y-2 text-white list-none lg:text-[16px] md:w-[60%] w-[80%] ">
               Our vision is to be the leading provider of comprehensive, data-driven stock market research and analytics that empowers investors with the insights and knowledge they need to make informed investment decisions. We aim to deliver innovative solutions and cutting-edge technology, coupled with our team’s deep expertise and commitment to excellence, to drive superior outcomes for our clients. Through our relentless focus on delivering actionable insights and exceptional customer service, we aspire to be the trusted partner of choice for investors seeking to maximize their returns in the dynamic world of stock market investing.
               
               </p>
                <img src={graphic} className="absolute md:right-[25%] md:top-[25%] -bottom-20 right-[10%]"/>
             </div>
              
               <img src={stock} alt="no img" className="w-[26%] z-10  hidden md:block"/>
             
         </div>
         
         <div className="absolute top-[30vh]">
          <span className="hidden md:block">
          <Effects />  
          </span>
        
       
        <h2 className="absolute md:top-[38%] md:left-15 md:right-0 text-center text-[48px] font-extrabold text-white mt-[59vh]   md:mt-[1vh] ">
         <span className="md:block hidden">Meet the Management Team</span> 
         <span className="md:hidden flex flex-col items-start ml-3"> <span>Meet the</span> <span>Management</span> <span>Team</span></span>
        </h2>
        <div className="absolute top-[48%] -right-[10%] ball">
          <Ball2 className="ball" />
        </div>
        <div className="absolute md:top-[85%]  z-10 top-[66vh] ball1">
          <Ball3 className=""/>
        </div>
        <div className="absolute top-[118%] -right-[10%] ball">
          <Ball2 className="ball" />
        </div>
        <div className="absolute md:top-[155%]  z-10 top-[66vh] ball1">
          <Ball3 className=""/>
        </div>



        <div className="absolute top-[218%] -right-[10%] ball">
          <Ball2 className="ball" />
        </div>
        <div className="absolute md:top-[245%]  z-10 top-[66vh] ball1">
          <Ball3 className=""/>
        </div>
      </div>
         <Management/>
         <div className="mb-[200px]"></div>
        
        
         </div>
  )
}

export default Vision
