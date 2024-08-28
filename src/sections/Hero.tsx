import rajimage from "@/assets/images/RAJI_POTO.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Sparkle from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <section id="home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" 
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}>
        </div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="4s">
          <Sparkle className="size-8 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="4s">
          <Sparkle className="size-8 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="4s">
          <div className="size-2 rounded-full text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="4s">
          <Sparkle className="size-14 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="4s">
          <StarIcon className="size-28 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="4s">
          <StarIcon className="size-8 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="3s">
          <div className="size-2 rounded-full text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <Sparkle className="size-14 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={0} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="4s">
          <Sparkle className="size-14 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-75} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300"/>
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image src={rajimage} alt="Raji" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 inset-0 absolute rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center md:text-5xl mt-8 tracking-wide typing-effect">
            Mohammad Radzy
          </h1>
          <p className="text-white/60 text-center mt-4 md:text-lg">
            I believe technology transforms how we work and interact. With a focus on solutions and details, I create functional applications 
            that offer exceptional user experiences. Let’s bring your big ideas to life together.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 border border-white/15 
          px-6 h-12 rounded-xl relative z-20 hover:bg-white hover:text-gray-950">
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4" />
          </a>
          <a
              href="https://github.com/Mozywozy"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip-container inline-flex items-center gap-2 bg-white text-gray-900 h-12 px-6 rounded-xl relative z-20"
            >
              <span className="text text-black">lets connect</span>
              <span className="tooltip">Connect on GitHub</span>
              <span className="icon">🔗</span>
            </a>
        </div>
      </div>
    </section>
  );
};
