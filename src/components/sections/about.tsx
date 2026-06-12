import { motion } from "framer-motion";
import yash from "../../assets/yash2.png";

import React from "react";
import Skills from "./skills";
import GradientOrbs from "../GradientOrbs";
import FAQ from "../FAQ";
const About: React.FC<SectionProps> = ({ reference }) => {
  return (
    <div ref={reference} className="relative overflow-hidden w-full">
      <GradientOrbs orbs={[
        {
          position: "top-10 right-10",
          size: "w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]",
          gradient: "bg-gradient-to-tr from-rose-500/60 to-amber-500/40",
          blur: "blur-[100px]",
          duration: 12,
          },
          {
            position: "bottom-10 left-10",
            size: "w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]",
            gradient: "bg-gradient-to-br from-cyan-500/60 to-blue-500/50",
            blur: "blur-[90px]",
            duration: 14,
            delay: 3,
          }
      ]} />
      <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] min-h-10 text-gray-400 font-poppins sm:p-24 xs:p-10 p-7 sm:text-xl max-sm:text-sm flex max-lg:flex-col items-center gap-16">
        <div className="relative sm:h-96 sm:w-96 xs:h-72 xs:w-72 h-60 w-60">
          <div className="flex items sm:w-96 absolute bottom-0 z-0 sm:h-96 xs:h-72 xs:w-72 h-60 w-60 rounded-full overflow-hidden border-8 bg-ui-color border-white shadow-[inset_20px_20px_60px_#18191f,inset_-20px_-20px_60px_#202129]"></div>
          <img
            src={yash}
            alt="Yashvardhan Kumar Profile Photo"
            className="object-cover absolute z-10 bottom-0 p-[8px] rounded-b-full sm:w-96 xs:w-72 w-60"
          />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="lg:text-4xl sm:text-3xl xs:text-2xl text-lg text-white font-poppins relative before:content-about before:-bottom-2  before:lg:w-[450px] before:sm:w-96 before:xs:w-80 before:w-64 before:font-normal before:text-red-600 before:border-[2px_solid_#ffffff] before:font-barlowcondensed before:absolute">
            Yashvardhan Kumar
          </h2>
          <div className="text-ui-color sm:text-sm text-xs font-silkscreen">
            Flutter App Developer and Full-stack Web Developer
          </div>
          <div className="w-full h-[0.5px] bg-slate-700"></div>
          <div className="gap-3 flex flex-col ">
            <p className=" indent-10">
              I am a software developer currently pursuing an integrated BTech
              and MTech in Information Technology at ABV-Indian Institute of
              Information Technology and Management, Gwalior. I specialize in
              mobile and web development, creating innovative and user-friendly
              applications and UIs.
            </p>
            <p className="indent-10">
              I'm skilled in technologies like Flutter, React, and Node.js, and
              I'm always eager to learn new tools and frameworks. I'm
              passionate about using technology to solve real-world problems and
              am driven to make a positive impact through my work.
            </p>
          </div>
          <motion.a
            target="_blank"
            href="https://drive.google.com/file/d/1poTz73QVD9ILQOVzdWzzjufQek5ivroa/view?usp=drive_link"
            initial={{
              scale: 0,
              opacity: 1,
              color: "#ffffff",
              backgroundColor: "#e6324b",
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
            whileHover={{
              scale: 1.2,
              color: "#000000",
              backgroundColor: "#ffffff",
              transition: { duration: 0.2, ease: [0.17, 0.67, 0.83, 0.67] },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-white bg-ui-color shadow-[20px_20px_60px_#18191f,-20px_-20px_60px_#202129] px-5 py-2 w-fit rounded-md my-5"
          >
            Here is my CV
          </motion.a>
        </div>
      </div>
      <Skills />
      <FAQ />
    </div>
  );
};

export default About;
