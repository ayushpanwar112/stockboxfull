import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import img0 from "../assets/img3.jpg";
import img1 from "../assets/img4.jpg";
import img2 from "../assets/img2.jpg";

const SideAnimateCard = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;

    const rotateCards = () => {
      // Bring the second card to the front
      const frontCard = cards.shift(); // Remove the first card
      const secondCard = cards.shift();

      // Remove the second card

      // Place the front card at the end of the array

      cards.push(frontCard);
      gsap.to(frontCard, {
        rotateY: 90,
        opacity: 1,
        duration: 0.36, // Shrink back cards progressively
      });

      // Re-insert the second card at the front
      cards.unshift(secondCard);

      gsap.to(cards, {
        duration: 1,
        stagger: 0.1,
        rotateY: 0,

        zIndex: (i) => cards.length - i, // Higher zIndex for front cards
        width: (i) => `${280 + (i + 1) * 200}px`, // Dynamic width
        height: (i) => `${300 + -i * 1}px`, // Fixed height
        scale: (i) => 1 - i * 0.05,
        opacity: (i) => 1 - i * 0.25, // Shrink back cards progressively
      });
    };

    // Run rotateCards every 2 seconds
    const interval = setInterval(rotateCards, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:flex flex-col justify-center items-center h-[60vh] hidden md:display">
      <div>
        <div className="card relative flex justify-center items-center text-white">
          {[img0, img1, img2, img1 , img1 ,img0].map((items, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`absolute flex justify-center items-center`}
              style={{
                borderRadius: "20px",
                boxShadow: "0px 24px 10px rgba(255, 255, 255, 0.09)",
                color: "white", // Ensure text remains visible on gradients
              }}
            >
              <img src={items} className="w-full h-full rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideAnimateCard;