import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faQuora,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faBatteryQuarter, faQuran, faX } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";



const EndSection = () => {

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/About-us" },
    { name: "Blogs", path: "/blogs" },
    { name: "Partner with us", path: "/partner" },
    { name: "Career", path: "/career" },
    { name: "Media", path: "/media" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Investor Charter", path: "/investor-charter" },
  ];
  return (
    <footer className="text-white py-7 w-full h-full font-plus-jakarta-sans  fonts">
      


      <hr className="h-[2px] mb-[99px] w-full opacity-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info & Social */}
          <div className="space-y-6 flex flex-col items-center">
            <img
              src={logo}
              alt="StockBox Logo"
              className="w-[152px] h-[152px] hover:scale-105 transition-transform duration-300"
            />
            <p className="text-lg font-light">Follow us</p>
            <div className="flex gap-6">
              {[
                { icon: faFacebook, link: "https://facebook.com/stockbox" },
                { icon: faX, link: "https://twitter.com/stockboxtech" },
                { icon: faInstagram, link: "https://instagram.com/stockboxtech" },
                { icon: faLinkedin, link: "#" },
                {icon:faYoutube,link:"https://www.youtube.com/@stockboxtech"},
                {icon:faQuora,link:"#"},
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                   rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-500 transform hover:scale-125 transition-all duration-300" target="_blank"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </div>
          </div>

          {/* Products mobile */}

          <div className="flex md:hidden">

        
          <nav className="space-y-6">
            <h2 className="text-xl font-bold">Products</h2>
            <ul className="space-y-4">
              {[
                {name:"Expert Advice",path:"/expert"},
                {name:"Portfolio Screener",path:"/portfolio"},
                {name:"Ready Made StockBox",path:"/ready"},
                {name:"Stocks Screener",path:"/screener"},
               {name: "Portfolio Hedger",path:"/portfoliohedger"},
                {name:"FII/DII Investment",path:"/invest"},
        
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-amber-500 flex items-center group transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Links */}
          <nav className="space-y-6">
            <h2 className="text-xl font-bold">Company</h2>
            <ul className="space-y-4">
            {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="text-gray-400 hover:text-amber-500 flex items-center group transition-colors duration-300"
            >
              <span>{item.name}</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300"
              />
            </Link>
          </li>
        ))}
            </ul>
          </nav>
          </div>


          {/*product big screen*/}


          <nav className="space-y-6 hidden md:block">
            <h2 className="text-xl font-bold">Products</h2>
            <ul className="space-y-4">
              {[
                {name:"Expert Advice",path:"/expert"},
                {name:"Portfolio Screener",path:"/portfolio"},
                {name:"Ready Made StockBox",path:"/ready"},
                {name:"Stocks Screener",path:"/screener"},
               {name: "Portfolio Hedger",path:"/portfoliohedger"},
                {name:"FII/DII Investment",path:"/invest"},
        
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-amber-500 flex items-center group transition-colors duration-300"
                  >
                    <span>{item.name}</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Links */}
          <nav className="space-y-6 hidden md:block">
            <h2 className="text-xl font-bold">Company</h2>
            <ul className="space-y-4">
            {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="text-gray-400 hover:text-amber-500 flex items-center group transition-colors duration-300"
            >
              <span>{item.name}</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300"
              />
            </Link>
          </li>
        ))}
            </ul>
          </nav>


             {/*product end*/}

          {/* Support */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Support</h2>
            <div className="space-y-6">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
              >
                FAQ
              </a>

              <div className="space-y-4">
                <h3 className="text-gray-400">Customer Care Number</h3>
                <div className="space-y-2">
                  <a
                    href="tel:+917217019005"
                    className="text-white hover:text-amber-500 block transition-colors duration-300"
                  >
                    +91 72170 19005
                  </a>
                  <a
                    href="tel:+917217019001"
                    className="text-white hover:text-amber-500 block transition-colors duration-300"
                  >
                    +91 72170 19001
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-gray-400">Timing</h3>
                <p className="text-white">Monday- Saturday</p>
                <p className="text-white">(10am – 6pm)</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-gray-400">Email us:</h3>
                <a
                  href="mailto:customercare@stockboxtech.com"
                  className="text-white hover:text-amber-500 block transition-colors duration-300"
                >
                  customercare@stockboxtech.com
                </a>
                <a
                  href="mailto:support@stockboxtech.com"
                  className="text-white hover:text-amber-500 block transition-colors duration-300"
                >
                  support@stockboxtech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SEBI Information */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* SEBI Registration Details */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold">
              SEBI Registered Research
              <br /> Analyst Details
            </h2>
            <dl className="space-y-4">
              {[
                {
                  term: "Registered Name",
                  desc: "Stockbox Technologies Pvt. Ltd.",
                },
                { term: "Type of Registration", desc: "Non-Individual" },
                { term: "Registration Number", desc: "INH100008799" },
                {
                  term: "Registration Validity",
                  desc: "October 08, 2021 -Perpetual",
                },
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <dt className="text-white font-medium">{item.term}</dt>
                  <dd className="text-gray-400">{item.desc}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Company Details */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold">
              Stockbox Technologies Pvt. Ltd.
            </h2>
            <address className="not-italic space-y-4">
              <div className="space-y-1">
                <span className="text-white font-medium">Address</span>
                <p className="text-gray-400">
                  9, Lane No.-3, Doon Enclave Extension,
                  <br />
                  Subhash Nagar, Dehradun, Uttarakhand
                </p>
              </div>
              {[
                { label: "Email", value: "stockboxtech@example.com" },
                { label: "Phone", value: "+91-135-3506155" },
                { label: "CIN", value: "U72900UR2021PTC012142" },
                { label: "GST", value: "05ABFCS5905F1ZH" },
                { label: "BSE Enlistment Number", value: "5487" },
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <span className="text-white font-medium">{item.label}</span>
                  <p className="text-gray-400">{item.value}</p>
                </div>
              ))}
            </address>
          </div>

          {/* Officers Contact */}

          {/* Officers Contact Section */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold">Officers Contact</h2>
            {[
              {
                term: "Principal Officer",
                desc: "Radhey Shyam Chauhan",
                email: "rschauhan@stockboxtech.com",
                phone: "+91-9997098943",
              },
              {
                term: "Grievance Officer",
                desc: "Shushant Singh",
                email: "grievance@stockboxtech.com",
                phone: "+91-0135-3506155",
              },
              {
                term: "Compliance Officer",
                desc: "Shushant Singh",
                email: "compliance@stockboxtech.com",
                phone: "+91-0135-350615",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="space-y-2">
                  <span className="text-white font-medium">{item.term}</span>
                  <p className="text-gray-400">{item.desc}</p>
                  <div className="space-y-1">
                    <p className="text-gray-400">
                      <span className="">Email: </span>
                      {item.email}
                    </p>
                    <p className="text-gray-400">
                      <span className="">Phone: </span>
                      {item.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-20 text-center space-y-4 text-sm text-gray-400">
          <p className="max-w-4xl mx-auto fonts">
            Warning- “Investment in securities market are subject to market
            risks. Read all the related documents carefully before investing.”
          </p>
          <p className="max-w-7xl mx-auto fonts">
            Disclaimer-“Registration granted by SEBI & BASL and certification
            from NISM in no way guarantee performance of the intermediary or
            provide any assurance of returns to investors.”
          </p>
          <p className="max-w-4xl mx-auto"></p>
        </div>
      </div>
      <div className="w-full flex justify-between px-4 mt-10">
        <p className="fonts">
          Copyright @2024 Stockbox Technologies Pvt. Ltd. All Rights Reserved.
        </p>
        <p className="fonts">Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default EndSection;
