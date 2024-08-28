import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-14 lg:py-24 lg:pt-20">
      <div className="container">
        <div
          className="bg-gradient-to-r from-emerald-300 to-sky-400 
        text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0"
        >
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let’s Collaborate
              </h2>
              <p className="text-sm md:text-base mt-2">
                Interested in working with me or have a query? I’m always open
                to new opportunities and discussions. Drop me a message and
                let’s make great things happen!
              </p>
            </div>
            <div className="">
              <a
                href="https://github.com/Mozywozy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
