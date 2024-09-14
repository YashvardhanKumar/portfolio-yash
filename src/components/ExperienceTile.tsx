import { motion } from "framer-motion";
import { BiCalendar } from "react-icons/bi";
import { GrDocumentPdf, GrGithub } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
type ExperienceTileProps = {
  position: string;
  url?: string;
  company: string;
  type: string;
  location: string;
  duration: { start: string; end: string };
  links: {
    name: string;
    playstore: string;
    github?: string;
    website?: string;
  }[];
  lor: string;
  technologies: string[];
  description: string;
  logo: string;
  even: boolean;
  index: number;
};

const ExperienceTile: React.FC<ExperienceTileProps> = ({
  position,
  company,
  type,
  location,
  duration,
  links,
  lor,
  technologies,
  description,
  logo,
  even,
  index,
  url,
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
          src={logo}
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
          <div className="flex flex-col gap-2  text-gray-400 sm:p-5 p-3">
            <div
              className={`text-ui-color font-barlowcondensed sm:text-3xl text-xl ${
                !even ? "lg:text-end" : ""
              }`}
            >
              {position}
            </div>
            <div
              className={`font-poppins flex flex-col sm:gap-1.5 gap-1 ${
                !even ? "lg:items-end" : ""
              }`}
            >
              <div className="sm:text-lg text-white">
                {url ? (
                  <a href={url} target="_blank">
                    {company}
                  </a>
                ) : (
                  company
                )}
              </div>
              <div className="sm:text-base text-sm">{type}</div>
              <div
                className={`sm:text-sm text-xs inline-flex items-baseline gap-1 ${
                  !even ? "lg:flex-row-reverse" : ""
                }`}
              >
                <span>
                  <BiCalendar className="flex-shrink-0" />
                </span>
                <span>{duration.start}</span>
                <span> - </span>
                <span>{duration.end}</span>
              </div>
              <div
                className={`sm:text-sm text-xs inline-flex items-baseline gap-1 ${
                  !even ? "lg:flex-row-reverse" : ""
                }`}
              >
                <MdLocationPin className="flex-shrink-0" />
                {location}
              </div>
              <div
                className={`flex flex-col gap-1 py-1 ${
                  !even ? "lg:items-end" : ""
                }`}
              >
                <div
                  className={`flex flex-wrap gap-1 w-full ${
                    !even ? "lg:justify-end" : ""
                  }`}
                >
                  {links.map((e) => (
                    <div className="bg-ui-color-2 px-2 py-1 rounded-md sm:text-sm text-xs flex items-center gap-2">
                      <div className="text-nowrap">{e.name}</div>
                      <div className="inline-flex gap-2 justify-center w-full">
                        {e.github && (
                          <motion.a
                            key={e.github}
                            whileHover={{
                              color: "#E0E0E0",
                            }}
                            target="_blank"
                            href={e.github}
                          >
                            <GrGithub />
                          </motion.a>
                        )}
                        {e.playstore && (
                          <motion.a
                            key={e.playstore}
                            whileHover={{
                              color: "#E0E0E0",
                            }}
                            target="_blank"
                            href={e.playstore}
                          >
                            <IoLogoGooglePlaystore />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full h-px opacity-20 sm:my-2 my-1 bg-gray-400"></div>
                <div
                  className={`flex flex-wrap gap-1 w-full ${
                    !even ? "lg:justify-end" : ""
                  }`}
                >
                  {technologies.map((e) => (
                    <div className="bg-ui-color-2 px-2 py-1 rounded-md sm:text-sm text-xs flex items-center gap-2">
                      {e}
                    </div>
                  ))}
                </div>
                <div
                  className={`${
                    !even ? "lg:text-end" : ""
                  } py-2 max-sm:text-sm`}
                >
                  {description}
                </div>
                <a
                  href={lor}
                  className="bg-ui-color-2 px-2 py-1 rounded-md sm:text-sm text-xs flex items-center gap-2 w-fit"
                >
                  <GrDocumentPdf /> Completion Letter
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceTile;
