import art from "../assets/readymade/art.png"
import ready from "../assets/ready/ready.png"
import  place from "../assets/ready/place.webp"



const ReadyMade = () => {
 

  return (
    <div className="ready-made w-full h-full" >
        <div className="w-full md:flex items-center ">

          <div  className="md:w-1/2 md:ml-2 relative">
       <img src={art} alt="art" className=""/>
        <h1 className="md:text-8xl font-bold text-white flex flex-col gap-5 text-[50px] absolute md:top-[30vh] md:left-[4vh] top-[10vh]">
       
                  <span className="main flex md:flex-col"> Ready</span>made <span className="flex main md:flex-row flex-col text-orange-400"> Stockbox</span>
                 </h1>
        </div>
       <div className="md:w-1/2 md:text-4xl text-2xl text-white h-full mx-2">
      <h2>Get a competitive edge in the market with a tool that provides access to meticulously managed baskets of stocks, ensuring optimal performance based on time-tested investment models.</h2>
       </div>    
        </div>
{/*2nd page */}
        <div className="w-full h-full items-center  flex justify-between mt-[10vh] overflow-x-hidden md:flex-row flex-col">
           <img src={ready} alt="" className="w-[40%]"/>
             <div className="md:ml-20 md:w-1/2 mx-3 overflow-hidden">
               <p className="md:text-3xl text-white">Stockbox’s Wizard Box/Readymade Stockbox allows users to access our specially curated basket of stocks. These readymade baskets are diligently managed by the Stockbox research team using time-tested investment models.
           We have tailored different baskets of stocks that are re-balanced and updated as per the change in the market trends at every fixed interval. Our goal is to maximize clients’ returns with flexible and adaptive long-term investment strategies.</p>
             </div>
          
        </div>
      {/*3rd page*/}
        <div className="w-full flex justify-center md:mt-[20vh] mt-[10vh]">
        <ul className="text-white w-[80%] md:flex gap-10">
  <li>
    <strong className="">Transparency</strong>
    <p className="text-gray-500 hover:text-white transform-transition duration-300 mt-3">
      We at Stockbox are committed to providing transparent information to our
      clients on our performance, holdings, and fees to enable them in making
      informed decisions.
    </p>
  </li>
  <li>
    <strong >Closely Monitored By Registered Professionals</strong>
    <p className="text-gray-500 hover:text-white transform-transition duration-300 mt-3">
      Readymade stock Basket is always closely monitored by a SEBI-registered
      professional who keeps track of your stock basket. Our analysts also
      tweak stock baskets regularly based on ongoing market trends.
    </p>
  </li>
<li>
    <strong>Research Driven Advice</strong>
    <p className="text-gray-500 hover:text-white transform-transition duration-300 mt-3">
    Each ready-made stock basket is powered by top-quality research and 
    investment strategy, created and managed by qualified SEBI registered professionals.
    </p>
   </li>
   <li>
    <strong>Suitable For Every Need</strong>
    <p className="text-gray-500 hover:text-white transform-transition duration-300 mt-3">Whether you are new to investing, have had a bad experience before or an active 
      investor, there is a stock Basket to suit our users’ every need. Pick from a range of short-term/sectoral / themed WealthBaskets.</p>
   </li>
   <li>
    <strong>Transparency & Control</strong>
    <p className="text-gray-500 hover:text-white transform-transition duration-300 mt-3">Stock Baskets are integrated with clients’ broking accounts. Clients can track the stocks on a real-time basis in their Readymade stockbox. They can withdraw anytime and auto-rebalance with a single click.</p>
   </li>

</ul>
   
        </div>
        <div className="w-full flex px-10 mt-[10vh]  ">
          <div className="w-1/2 text-white flex flex-col ">

          <div className="flex flex-col gap-5">
             <h2 className="text-2xl font-semibold">Achieve your investment goals with</h2>
           <h1 className="text-4xl font-bold md:ml-10">Curated Stock Baskets</h1>
           <p className="text-gray-400 w-full">Smallcases are curated baskets of stocks that are managed by stockbox Research Desk.</p>
          </div>
          <button className=" md:w-1/2  mt-1/2 bg-orange-500 hover:scale-105 hover:bg-green-950 transform-transition duration-300 hover:text-white  text-black font-semibold py-2 pointer px-4 rounded-full mt-4">Discover Baskets</button>
          
          
          </div>
          <div className="w-1/2 bg-transparent ">
          <img src={place} alt="" className="object-cover rounded-2xl"/>
          </div>

        </div>
      
    </div>
  )
}

export default ReadyMade
