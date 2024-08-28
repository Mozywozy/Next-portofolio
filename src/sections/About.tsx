"use client";
import { Card } from "@/components/Cards";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import HTMl from "@/assets/icons/html5.svg";
import Css from "@/assets/icons/css3.svg";
import JavaScript from "@/assets/icons/javascript.svg";
import Bootstrap from "@/assets/icons/boostrap.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import React from "@/assets/icons/react.svg";
import Next from "@/assets/icons/nextjs.svg";
import PHP from "@/assets/icons/php.svg";
import Laravel from "@/assets/icons/laravel.svg";
import Golang from "@/assets/icons/golang.svg";
import MySQL from "@/assets/icons/mysql.svg";
import Figma from "@/assets/icons/figma.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { TechIcon } from "@/components/TechIcon";
import mapRaji from "@/assets/images/mapraji.png";
import iconMoji from "@/assets/images/memoji-avatar-1.png";
import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import {motion} from "framer-motion";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const toolboxItem = [
  {
    title: "HTML",
    iconType: HTMl,
  },
  {
    title: "CSS",
    iconType: Css,
  },
  {
    title: "JavaScript",
    iconType: JavaScript,
  },
  {
    title: "Boostrap",
    iconType: Bootstrap,
  },
  {
    title: "Tailwind",
    iconType: Tailwind,
  },
  {
    title: "React",
    iconType: React,
  },
  {
    title: "Next.js",
    iconType: Next,
  },
  {
    title: "PHP",
    iconType: PHP,
  },
  {
    title: "Laravel",
    iconType: Laravel,
  },
  {
    title: "Golang",
    iconType: Golang,
  },
  {
    title: "MySQL",
    iconType: MySQL,
  },
  {
    title: "Figma",
    iconType: Figma,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Soccer",
    emoji: "⚽",
    left: "80%",
    top: "5%",
  },
  {
    title: "Basketball",
    emoji: "🏀",
    left: "42%",
    top: "4%",
  },
  {
    title: "Gym",
    emoji: "🏋️‍♀️",
    left: "25%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "65%",
    top: "45%",
  },
];

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);
  const constraintRef = useRef(null);
  return (
    <section id="about" className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Discover My Journey"
          description="Explore my background, my journey in technology, 
          and what inspires me to push the boundaries of what's possible."
        />
        <div className="mt-20">
          <Card clasName="h-[420px] p-0 mb-10" data-aos="fade-up">
            <CardHeader
              title="My Flagship Tools"
              description="Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Et ad nihil sint facilis."
              className="px-6 pt-6"
            />
            <ToolboxItems
              items={toolboxItem}
              className="mt-10"
              itemsWrapperClassName="animate-move-left [animation-duration:30s]"
            />
            <ToolboxItems
              items={toolboxItem}
              className="mt-6"
              itemsWrapperClassName="animate-move-right [animation-duration:15s]"
            />
          </Card>
          <Card clasName="h-[320px] p-0 flex flex-col mb-10" data-aos="fade-up">
            <CardHeader
              title="Beyond The Code"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                sapiente error quisquam quaerat ipsum?"
              className="px-6 py-6"
            />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r 
                  from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card clasName="h-[320px] p-0 relative" data-aos="fade-up">
            <Image
              src={mapRaji}
              alt="map raji"
              className="h-full w-full object-cover object-left-top"
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute
            after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image src={iconMoji} alt="icon raji" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
