"use client";
import {useState} from 'react'
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import { Meteors } from "./ui/meteors";
import {LampContainer} from './ui/lamp';
import { BackgroundLines } from "./ui/background-lines";


export default function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [hovering, setHovering] = useState(false);//For Lens Effect

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    (
    <div id='home'
      className="h-[400vh] bg-transparent w-full dark:border dark:border-white/[0.1] rounded-md relative pt-20 overflow-clip"
      ref={ref}>
        {/* <BackgroundLines className="flex items-center justify-center w-full flex-col px-4"> */}
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]} />
        {/* </BackgroundLines> */}
    </div>)
  );
}
