import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Fade in whole section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Scroll animation for the image
    gsap.fromTo(
      imageRef.current,
      {
        y: 30,
        opacity: 0,
        width: "50%",
      },
      {
        y: -35,
        width: "70%",
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom-=100",
        },
      }
    );
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase py-10 px-4">
      <div className="w-full flex items-center justify-center">
        <div
          ref={imageRef}
          className="w-full md:w-2/3 bg-[#FFEFDB] p-4 rounded-lg overflow-hidden flex justify-center "
        >
          <img
            src="/banner.png"
            alt="Project Showcase"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
