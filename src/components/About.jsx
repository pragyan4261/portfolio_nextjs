"use client";
import React from 'react'
import { motion } from "framer-motion";
import { BackgroundLines } from './ui/background-lines'
import { LampContainer } from './ui/lamp'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { Meteors } from './ui/meteors';
import { FloatingDock } from './ui/floating-dock';
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

const About = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <div className='w-full' id='about'>


      <LampContainer>
      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-sky-500/[0.4] dark:bg-transparent dark:border-gray-500 border-black/[0.1] md:w-[50rem] sm:w-[30rem] h-auto rounded-xl p-12 border-2  ">
        <CardItem
          translateZ="50"
          className="md:text-5xl sm:text-2xl font-bold text-neutral-600 dark:text-white mb-5"
        >
          About Me
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 md:text-xl sm:text-sm  mt-2 dark:text-neutral-300"
        >
          Hey there! I’m a dedicated Full Stack Developer with a strong foundation in both web and mobile app development. Currently, I’m pursuing my B.Tech in Electronics and Communication Engineering from NIT Silchar, where I’ve developed a deep interest in crafting dynamic, user-focused applications across a range of platforms.
        
       
        </CardItem> 
        <CardItem translateZ="60" className="w-full mt-4 md:text-xl sm:text-sm">
        With experience in a diverse tech stack, including JavaScript, React, Node.js, and MongoDB, I enjoy building responsive, scalable applications that bridge the gap between technology and user experience. I’m constantly expanding my skills and staying up-to-date with the latest in software engineering and UI/UX design.
        </CardItem>
        <CardItem translateZ="60" className="w-full mt-4 md:text-xl sm:text-sm">
        Beyond coding, I’m enthusiastic about collaborative projects and learning from others in the field. I look forward to contributing to innovative solutions and making an impact in the tech world!
        </CardItem>
        
        
      </CardBody>
    </CardContainer>
    </LampContainer>
    </div>
    </BackgroundLines>
  )
}

export default About