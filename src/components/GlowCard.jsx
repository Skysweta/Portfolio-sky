import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column relative overflow-hidden"
    >
      <div className="glow"></div>

      {children}

      {/* BUTTON ADDED */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 mb-2 mt-2">
        <a
          href={card.link}  // Ensure your card object has a link property!
          target="_blank"
          rel="noopener noreferrer"
           className="bg-white text-black mt-3 font-sans px-4 py-2 rounded-lg hover:bg-black-50 hover:text-white transition-colors duration-300"
  >
        
          View
        </a>
      </div>
    </div>
  );
};

export default GlowCard;
