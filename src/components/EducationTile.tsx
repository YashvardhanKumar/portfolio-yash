import { motion } from "framer-motion";
import React from "react";
import { BiCalendar } from "react-icons/bi";
import { LiaBullseyeSolid } from "react-icons/lia";

type EducationTileProps = {
  degree: string;
  university: string;
  from: string;
  to: string;
  course: string;
  img: string;
  even: boolean;
  index: number;
};

const EducationTile: React.FC<EducationTileProps> = ({
  degree,
  university,
  from,
  to,
  course,
  img,
  even,
  index,
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false }}
      className="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group is-active bg-transparent"
    >
      <div className="flex items-center justify-center sm:w-16 sm:h-16 h-8 w-8 rounded-full bg-slate-300 text-slate-500 shadow shrink-0 lg:order-1 lg:group-odd:-translate-x-1/2 lg:group-even:translate-x-1/2 -translate-x-1/2">
        <img
          src={img}
          alt=""
          className="h-full w-full object-scale-down relative p-0.5 bg-white rounded-full "
        />
      </div>
      <motion.div
        className="w-[calc(100%-2rem)] lg:w-[calc(50%-4rem)]"
        variants={{
          offscreen: {
            x: even || window.innerWidth <= 1024 ? 300 : -300,
            opacity: 0,
          },
          onscreen: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 0.1 * index,
            },
          },
        }}
      >
        <div
          className={`flex border-dotted ${
            !even
              ? "lg:flex-row-reverse lg:border-r-4 lg:rounded-s-xl max-lg:border-l-4 max-lg:rounded-e-xl"
              : "border-l-4 rounded-e-xl"
          } bg-ui-color-3`}
        >
          <div className="flex flex-col gap-2 text-gray-400 sm:p-5 p-3">
            <div className="text-ui-color font-barlowcondensed sm:text-3xl text-xl">
              {university}
            </div>
            <div
              className={`font-poppins flex flex-col  sm:gap-1.5 gap-1 ${
                !even ? "lg:items-end" : ""
              }`}
            >
              <div className="sm:text-lg text-white">{degree}</div>
              <div
                className={`sm:text-sm text-xs inline-flex items-baseline gap-1 ${
                  !even ? "lg:flex-row-reverse" : ""
                }`}
              >
                <LiaBullseyeSolid className="flex-shrink-0" /> {course}
              </div>
              <div
                className={`sm:text-sm text-xs inline-flex items-baseline gap-1 ${
                  !even ? "lg:flex-row-reverse" : ""
                }`}
              >
                <BiCalendar className="inline" />
                <div>
                  <span>{from}</span>
                  <span> - </span>
                  <span>{to}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EducationTile;
