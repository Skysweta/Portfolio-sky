import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience"
import { words } from "../constants"

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';


const Hero = () => {
    useGSAP(()=>{
        gsap.fromTo('.hero-text h1',
            {y:50,
             opacity:0
            },
            {   y:0,
                opacity:1,
                stagger:0.2,
                duration:1,
                ease:'power2.inOut'
            },

        )
    })
    return (
        <section id="hero" className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 z-0'>
                <img src="/images/bg.png" alt="background"></img>

            </div>
            <div className='hero-layout pb-16'>
                {/* Left:hero content */}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h1>Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word,index) =>(
                                             <span key={`${word.text}-${index}`} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img src={word.imgPath}
                                                     alt={word.text}
                                                     className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"></img>
                                                     <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>

                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I'm Sweta — a passionate Web Developer who loves turning <br/>
                            bold ideas into seamless digital experiences.
                        </p>
                        <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See my work"></Button>
                    </div>
                </header>

                {/* Right 3D Model */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience></HeroExperience>
                    </div>
                </figure>
            </div>
            {/* <AnimatedCounter></AnimatedCounter> */}
        </section>
    )
}

export default Hero