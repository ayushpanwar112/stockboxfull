
import mark from "../assets/aboutus/Mark.png"
import Mobile from "../assets/aboutus/SVG/Mobile";

import principal from "../assets/aboutus/principal.png";
import Vision from "../components/AboutSection/Vision";
import { Ball } from "../assets/aboutus/SVG/Ball";
import image from "../assets/aboutus/mobile.png"



const Aboutus = () => {
  return (
    <div className="w-full font-[plus-jakarta-sans] overflow-x-hidden  overflow-y-hidden"  >
      {/* Hero Section */}
      <div className="flex  h-[90vh]  w-full ">
        <div className=" md:w-[60%] relative flex w-[55%]">

          <Ball className="absolute left-0 top-0" />
          <div className=" md:absolute left-25  mb-10">
            <h2 className="font-bold md:text-[57px] text-white text-[35px]">About us</h2>
            <p className="w-full text-[12px] font-bold text-[#DBDBDB] mt-5 lg:text-[3vh] "> 
            Stockbox Technologies is a SEBI-registered research analyst firm that provide in-depth market analysis and actionable investment
             recommendations to help our clients achieve their financial goals.We use cutting-edge tools and techniques to analyze stocks, 
             commodities, and other financial instruments and offer a wide range of services including equity research, technical analysis, 
             and stock recommendations.Our team of analysts has extensive experience in the stock market and has a deep understanding of the 
             various sectors and industries. We also provide regular market updates and insights to keep our clients informed about the latest
              market trends.Our goal is to help our clients make informed decisions about their investments and achieve long-term success in the
               stock market. We strive to help you navigate the markets and make the most of your investments.Contact us to learn more about how
                we can help you to achieve your financial goals?
            </p>
       
          </div>
          <img src={mark} alt="mark" className="w-[190px] h-[120px] md:top-36 md:right-0 absolute -right-35 hidden md:block" />
        </div>
        
      
        <div className=" md:relative top-25 hidden md:block">
          <Mobile className="absolute md:right-0 top-10 md:left-0  "  />
        </div>
        <div className=" w-[60%] relative   md:hidden z-10 ">
          <img src={image} alt="img" className="w-full object-contain absolute"/>
          <img src={mark} alt="mark" className="w-[190px] h-[120px]  absolute bottom-10 -right-10 " />
        </div>
      
        
       
        
      </div>
 {/* Vision Section */}

      <div className=" w-full   lg:flex h-full mt-[8vh]">
          <img src={principal} alt="no img" className="object-contain"/>
          <div className=" ml-6 flex flex-col mt-[3vh]">
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
              <h2 className="font-bold lg:text-[30px] text-[20px]">Principal/Values</h2>
            </div>
            <ul className=" mt-5 space-y-2 text-white list-none text-[16px] w-[80%]">
  <li>
    <span className="text-[#F36711] font-extrabold">INNOVATION</span>
    <br/>
    We at Stockbox create original investment ideas based on cutting-edge market research while delivering our clients with speed, flexibility, and cost effectiveness.
  </li>
  
  <li>
    <span className="text-[#F36711] font-extrabold">RELIABILITY</span>
    <br/>
    Stockbox make no compromises when it comes to data quality.
  </li>

  <li>
    <span className="text-[#F36711] font-extrabold">CONSULTANCY</span>
    <br/>
    Stockbox guarantees highest level of research service and attentive observation.
  </li>

  <li>
    <span className="text-[#F36711] font-extrabold">TRUST</span>
    <br/>
    We will never make promises we can not keep
  </li>

  <li>
    <span className="text-[#F36711] font-extrabold">SOCIAL RESPONSIBILITY</span>
    <br/>
    We believe in a better community and every contribution can make a difference. Stockbox is committed to maintaining the highest standards.
  </li>
</ul>
          </div>
      </div>
        <Vision/>
        
    </div>
  );
};

export default Aboutus;