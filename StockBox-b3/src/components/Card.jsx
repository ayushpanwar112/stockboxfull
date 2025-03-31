import  {  useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SideAnimateCard from "./SideAnimateCard";

const Card = () => {
  const cardRefs = useRef([]);

  useGSAP(() => {
    const rotateCards = () => {
      if (cardRefs.current.length < 2) return;

      // Move first card to the end
      const firstCard = cardRefs.current.shift();
      cardRefs.current.push(firstCard);

      // Animate each card with GSAP
      cardRefs.current.forEach((card, i) => {
        gsap.to(card, {
          duration: 1,
          zIndex: cardRefs.current.length - i,
          width: `${280 + i * 10}px`,
          height: "350px",
          scale: 1 - i * 0.05,
          x: i * 10,
          y: i * 20,
          opacity: 1 - i * 0.3,
        });
      });
    };

    const interval = setInterval(rotateCards, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
 
         <SideAnimateCard className="w-screen bg-amber-100"/>
 




     {/* mobile */}
    <div className="flex justify-center items-center h-[70vh] md:hidden">
      <div className="relative flex justify-center  w-1/2 items-center">
        {["Card 1", "Card 2", "Card 3", "Card 4"].map((text, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            className={`absolute flex justify-center items-center text-white ${
              index === 0
                ? "bg-blue-700"
                : index === 1
                ? "bg-green-400"
                : index === 2
                ? "bg-yellow-300"
                : "bg-red-400"
            }`}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "20px",
              boxShadow: "0px 24px 10px rgba(255, 255, 255, 0.04)",
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Card;
