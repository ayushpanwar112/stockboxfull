
import team from "../../assets/aboutus/team.png";
import "../Css/management.css"

const Management = () => {
  return (
    <div className="min-h-screen flex flex-col relative md:top-[50vh] mt-[35vh] md:mt-0 ">
      
      <div className="flex-grow flex  w-full md:flex-row flex-col">

      <div className="w-full  justify-end md:hidden flex flex-col text-center ">
      <h2 className="font-bold text-[65px] text-red-600 flex justify-end mr-10">Founder</h2>
          <img
            src={team}
            alt="Management Team"
            className="w-[400px] h-[350px] mr-20 mt-10"
          />
        </div>
        <div className="md:w-1/2 w-full mt-10 md:ml-15 ml-3 flex md:flex-col">
        <h2 className="font-bold text-[65px] text-red-600 hidden md:block">Founder</h2>
        <h3 className="text-gray-300">Mr. R S Chauhan</h3>
          <ul className="md:w-[80%] md:text-[16px] font-bold text-white w-[90%] ">
           <li>NISM Certified Research Analyst with 17+ years in the financial sector.</li>
           <li>M.Com & MBA in Marketing & Finance.</li>
           <li>Innovator & trainer focused on educating retail investors.</li>
           <li>Integrates AI, research, and risk management for trading models.</li>
           <li>Key contributor to technology-driven solutions at Stockbox.</li>
          </ul>
        </div>

        <div className="w-1/2 md:flex justify-end hidden md:block">
          <img
            src={team}
            alt="Management Team"
            className="w-[450px] h-[400px] mr-20 mt-10"
          />
        </div>
      </div>

      {/* scenond manaag. */}

      <div className="mt-auto md:py-10"></div>
      <div className="w-full h-[75vh] md:mb-0 second mb-30">

      <div className="flex-grow flex mt-20 w-full justify-between md:flex-row flex-col ">
      <div className="md:w-1/2 flex md:ml-7 flex-col justify-end">
      <h2 className="font-bold text-[65px] text-red-600 md:hidden ml-3"> Co-Founder & CEO</h2>
          <img
            src={team}
            alt="Management Team"
            className="w-[450px] h-[400px]  md:mt-10 transform scale-x-[-1]"
          />
        </div>
        <div className="md:w-1/2 mt-10 md:ml-15 ml-3">
          <h2 className="font-bold text-[65px] text-red-600 hidden md:block"> Co-Founder & CEO</h2>
          <h3 className="text-gray-300">Dr. Shushant Singh</h3>
          <ul className="md:w-[80%] text-[16px] font-bold text-white w-[90%]">
           <li>Doctorate in Engineering (Design) from IIT (BHU), Varanasi.</li>
           <li>NISM Certified Research Analyst.</li>
           <li>Oversees company operations, strategy execution & digital marketing.</li>
           <li>Committed to enhancing customer experience at Stockbox.</li>
          </ul>
        </div>

     
      </div>

      </div>

{/*third*/}
<div className="mt-[40vh] md:mt-0"></div>
      <div className="flex-grow flex  w-full md:flex-row flex-col ">

<div className="w-full  justify-end md:hidden flex flex-col text-center ">
<h2 className="font-bold text-[65px] text-red-600 flex justify-end mr-10">HR Manager</h2>
    <img
      src={team}
      alt="Management Team"
      className="w-[400px] h-[350px] mr-20 mt-10"
    />
  </div>
  <div className="md:w-1/2 w-full mt-10 md:ml-15 ml-3 flex md:flex-col">
  <h2 className="font-bold text-[65px] text-red-600 hidden md:block">HR Manager</h2>
  <h3 className="text-gray-300">Dolly Singh</h3>
    <ul className="md:w-[80%] md:text-[16px] font-bold text-white w-[90%]">
      <li>Postgraduate in Marketing & HR from ICFAI University.</li>
      <li>10+ years of experience in financial markets.</li>
      <li>Expert in investment techniques & digital marketing outreach.</li>
    </ul>
  </div>

  <div className="w-1/2 md:flex justify-end hidden md:block">
    <img
      src={team}
      alt="Management Team"
      className="w-[450px] h-[400px] mr-20 mt-10"
    />
  </div>
</div>

{/*fourty*/}


<div className="w-full h-[90vh] third">

<div className="flex-grow flex mt-20 w-full justify-between md:flex-row flex-col third">
<div className="md:w-1/2 flex md:ml-7 flex-col justify-end">
<h2 className="font-bold text-[65px] text-red-600 md:hidden ml-3"> Senior Research Analyst & Research Head</h2>
    <img
      src={team}
      alt="Management Team"
      className="w-[450px] h-[400px]  md:mt-10 transform scale-x-[-1]"
    />
  </div>
  <div className="md:w-1/2 mt-10 md:ml-15 ml-3">
    <h2 className="font-bold text-[65px] text-red-600 hidden md:block"> Senior Research Analyst & Research Head</h2>
    <h3 className="text-gray-300">Mr. Siddhart Rai Mangla</h3>
    <ul className="md:w-[80%] text-[16px] font-bold text-white w-[90%]">
    <li>FRM Charter (GARP, USA) | EPAT (Quantinsti) | NISM Certified.</li>
    <li>8+ years in capital market research & advisory.</li>
    <li>Guest market expert on Zee Business & speaker at ICAI & academic institutions.</li>
    <li>Skilled in technical & fundamental analysis.</li>
    </ul>
  </div>


</div>

</div>


{/*5 manga */}
<div className="mt-[40vh] md:mt-0"></div>
<div className="flex-grow flex  w-full md:flex-row flex-col ">

<div className="w-full  justify-end md:hidden flex flex-col text-center ">
<h2 className="font-bold text-[65px] text-red-600 flex justify-end mr-10">COO</h2>
    <img
      src={team}
      alt="Management Team"
      className="w-[400px] h-[350px] mr-20 mt-10"
    />
  </div>
  <div className="md:w-1/2 w-full mt-10 md:ml-15 ml-3 flex md:flex-col">
  <h2 className="font-bold text-[65px] text-red-600 hidden md:block">COO</h2>
    <ul className="md:w-[80%] md:text-[16px] font-bold text-white w-[90%] ">
      <li>NISM Certified Research Analyst with 5+ years of trading experience.</li>
      <li>Background in Commerce & CA (Intermediate).</li>
      <li>Worked with international blockchain startups in operations & fundraising.</li>
      <li>Key contributor to marketing & sales strategies at Stockbox.</li>
    </ul>
  </div>

  <div className="w-1/2 md:flex justify-end hidden md:block">
    <img
      src={team}
      alt="Management Team"
      className="w-[450px] h-[400px] mr-20 mt-10"
    />
  </div>
</div>

      <div className="w-full md:h-[25vh] "></div>
    </div>
  );
};

export default Management;
