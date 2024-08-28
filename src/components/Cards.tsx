import grainImage from "@/assets/images/grain.jpg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({ clasName, children }: PropsWithChildren<{ clasName?: string }>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline  after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20",
    clasName  
    )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};
