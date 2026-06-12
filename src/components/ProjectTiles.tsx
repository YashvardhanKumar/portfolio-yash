import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./ProjectTiles.sass";
import { GrGithub } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { LuLink } from "react-icons/lu";

type ProjTileProps = {
  id: string;
  name: string;
  type: string[];
  technologies: string[];
  description: string;
  links: {
    github: string;
    website?: string;
    playstore?: string;
  };
  img: string;
  index: number;
};

const ProjectTiles: React.FC<ProjTileProps> = ({
  name,
  type,
  technologies,
  description,
  links,
  img,
  index,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  useEffect(() => {
    console.log(showInfo);
  });
  return (
    <motion.div
      className="flex justify-center m-auto flex-col"
      initial="offscreen"
      whileInView="onscreen"
      variants={{
        offscreen: {
          scale: 0.8,
          opacity: 0,
          filter: 'blur(8px)',
        },
        onscreen: {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1,
            delay: 0.1 * index,
          },
        },
      }}

      viewport={{ once: false, amount: 0.1 }}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <div
        className={`cursor-pointer relative mb-5 flex flex-col gap-2 flip-card ${
          showInfo ? "flipped" : ""
        }`}
      >
        <div className="h-60 w-80 flip-card-inner">
          <div className="h-full w-full absolute flex items-center justify-center backface-hidden ">
            <img
              src={img}
              alt={name}
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
          <div className="h-full w-full absolute flex text-sm p-3 gap-2 flex-col backface-hidden flip-card-back rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
            <div className="overflow-ellipsis text-justify">{description}</div>
            <div className="flex flex-wrap gap-1 my-auto justify-center">
              {technologies.map((e) => (
                <div className="px-1.5 rounded-md bg-white/10 border border-white/10">{e}</div>
              ))}
            </div>
            <div className="flex gap-1 text-xl justify-center w-full">
              <motion.a
                key={links.github}
                whileHover={{
                  color: "#E0E0E0",
                }}
                target="_blank"
                href={links.github}
              >
                {<GrGithub />}
              </motion.a>
              {links.playstore && (
                <motion.a
                  key={links.playstore}
                  whileHover={{
                    color: "#E0E0E0",
                  }}
                  target="_blank"
                  href={links.playstore}
                  children={<IoLogoGooglePlaystore />}
                />
              )}
              {links.website && (
                <motion.a
                  key={links.website}
                  whileHover={{
                    color: "#E0E0E0",
                  }}
                  target="_blank"
                  href={links.website}
                  children={<LuLink />}
                />
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="text-2xl font-barlowcondensed text-center text-ui-color">
            {name}
          </div>
          <div className="text-center">{type.join(", ")}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectTiles;
