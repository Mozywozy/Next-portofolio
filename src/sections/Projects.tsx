import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import weatherApp from "@/assets/images/weather.png";
import lidiaPage from "@/assets/images/lidia-page.png";
import disneyClone from "@/assets/images/disney-page.png";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Mohammad Radzy",
    year: "2024",
    title: "Weather App",
    results: [
      { title: "Real-Time Weather Insights App" },
      { title: "Advanced Weather Application Using Go" },
      { title: "Interactive Weather App Powered by Go" },
    ],
    link: "https://github.com/Mozywozy/Weather-App",
    image: weatherApp,
  },
  {
    company: "Muhammad Alfian",
    year: "2024",
    title: "Digital Library Landing Page",
    results: [
      { title: "Modern Landing Page for Digital Library" },
      { title: "Optimized Landing Page for Digital Library" },
      { title: "Innovative Digital Library Landing Page" },
    ],
    link: "https://github.com/Mozywozy/Lidia-Page",
    image: lidiaPage,
  },
  {
    company: "Mohammad Radzy",
    year: "2024",
    title: "Disney Clone",
    results: [
      { title: "Disney-Inspired Clone Web Application" },
      { title: "Interactive Disney Replica Website" },
      { title: "Engaging Disney Clone with Enhanced Features" },
    ],
    link: "https://lidia-page.vercel.app/",
    image: disneyClone,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real world result
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Featured Project
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="md:mt-20 flex flex-col mt-10 gap-20 ">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 
              after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline 
              after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8 px-8 pt-8 
              after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 
                font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    <hr />
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button
                      className="bg-white text-gray-950 h-12 w-full 
                      rounded-xl font-semibold inline-flex items-center 
                      justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>View</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 
                  lg:absolute lg:h-full lg:w-auto lg:max-w-none "
                />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
