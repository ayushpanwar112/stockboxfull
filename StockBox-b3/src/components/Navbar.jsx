import { faBars, faTimes, faChartLine, faUser, faBriefcase, faSearchDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from '../assets/logo.png';
import { useGSAP } from '@gsap/react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
         

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuItems = useRef([]);
  const timeline = useRef(null);

  gsap.registerPlugin(useGSAP);
  const navItems = [
    { title: 'Expert Advice', icon: faUser, desc: 'Get professional guidance', path:"/expert" },
    { title: 'Portfolio Screener', icon: faChartLine, desc: 'Analyze your investments',path:"/portfolio" },
    { title: 'ReadyMade Stockbox', icon: faBriefcase, desc: 'Pre-built portfolios',path:"/ready" },
    { title: 'Stock Screener', icon: faSearchDollar,path:"/screener", desc: 'Find perfect stocks' },
    {title:"Portfolio Hedger",icon:faUser,path:"/portfoliohedger",desc:"Invest confidently with smart protection."},
    {title:"Fii/Dii Investments",icon:faUser,path:"/invest",desc:"Monitor market trends for better investments."},
  ];

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });

    if (dropdownRef.current && menuItems.current.length > 0) {
      timeline.current
        .fromTo(
          dropdownRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.in' }
        )
        .fromTo(
          menuItems.current,
          { y: 20, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.1, 
            ease: 'power2.out',
            duration: 0.3
          },
          '-=0.2'
        );
    }

    return () => {
      if (timeline.current) {
        timeline.current.kill();
      }
    };
  }, []);

  useGSAP(() => {
    if (timeline.current) {
      if (isOpen) {
        timeline.current.play();
      } else {
        timeline.current.reverse();
      }
    }
  }, [isOpen]);


  function redirectToStore() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android|windows/i.test(userAgent)) {
      // Redirect to Google Play Store for Android and Windows users
      window.location.href = "https://play.google.com/store/search?q=stockBox&c=apps&hl=en";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Redirect to App Store for iOS users
      window.location.href = "https://apps.apple.com/in/app/stockbox-technologies/id6443554700";
    } else {
      // Optional: Handle other devices
      alert("This app is available on Play Store and App Store.");
    }
  }

  return (
    <nav className="fixed w-full top-0 left-0 z-50 ">
      <div className="backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-full md:mx-20 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="w-12 h-12 cursor-pointer" onClick={() => navigate('/')} />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group ">
                <button 
                  className="text-white hover:text-amber-400 transition-colors px-3 py-2 text-sm font-medium  pb-7 pt-7"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  Products
                </button>

                {/* Dropdown Menu */}
                <div 
                  ref={dropdownRef}
                  className={`absolute left-1/2 -translate-x-1/2  w-[42rem] bg-gray-900/95 
                    backdrop-blur-xl rounded-xl shadow-xl border border-white/10 ${isOpen ? 'block' : 'hidden'}`}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 p-6">
                    {navItems.map((item, index) => (
                      <div onClick={()=>{navigate(item.path)}}
                        key={index}
                        ref={el => menuItems.current[index] = el}
                        className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 
                          transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <FontAwesomeIcon 
                            icon={item.icon} 
                            className="text-amber-400 text-xl transform group-hover:scale-110 
                              transition-transform duration-300" 
                          />
                        </div>
                        <div>
                          <h3 className="text-white font-medium group-hover:text-amber-400 
                            transition-colors duration-300">{item.title}</h3>
                          <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {[
                { name: 'About', path: '/About-us' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contactus' },
                {name: 'Blog', path: '/blogs'},
                
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:text-amber-400 transition-colors px-3 py-2 
                    text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <a href='https://stockboxtech.smallcase.com/'className='text-white' target='_blank'>SmallCase</a>

              <button className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 
                rounded-lg text-sm font-medium transition-colors duration-300" onClick={()=>redirectToStore()}>
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FontAwesomeIcon 
                icon={isMobileMenuOpen ? faTimes : faBars} 
                className="text-xl" 
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
<div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
  <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-xl z-50">
    <div className="flex justify-end p-4">
      <button 
        className="text-white text-2xl"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
    <div className="flex flex-col p-6 space-y-6">
      {navItems.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            navigate(item.path);
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center space-x-3 text-white hover:text-amber-400 
            transition-colors duration-300 cursor-pointer"
        >
          <FontAwesomeIcon icon={item.icon} className="text-xl" />
          <span>{item.title}</span>
        </div>
      ))}
      {[
        { name: 'About', path: '/About-us' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contactus' },
        { name: 'Blog', path: '/blogs' },
      ].map((item) => (
        <div
          key={item.name}
          onClick={() => {
            navigate(item.path);
            setIsMobileMenuOpen(false);
          }}
          className="text-white hover:text-amber-400 transition-colors px-3 py-2 
            text-sm font-medium cursor-pointer"
        >
          {item.name}
        </div>
      ))}
      <button 
        className="bg-amber-400 hover:bg-amber-500 text-black px-4 py-2 
        rounded-lg text-sm font-medium transition-colors duration-300 mt-4"
        onClick={() => {
          redirectToStore();
          setIsMobileMenuOpen(false);
        }}
      >
        Get Started
      </button>
    </div>
  </div>
</div>

    </nav>
  );
};

export default Navbar;