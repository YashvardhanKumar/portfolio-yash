import { motion } from "framer-motion";
import { skills } from "../../constants/skills";

const Skills = () => {

  return (
    <div className="flex flex-col py-16 items-center justify-start gap-10">
      <div className="text-white p-3 sm:text-5xl text-lg border-b border-slate-700">
        Technologies I am familiar with
      </div>

      <p className="p-5 w-fit relative flex justify-center flex-wrap gap-3">
        {skills.map((value, i) => (
          <motion.a
            key={i}
            href={value.site}
            target="_blank"
            rel="noreferrer"
            initial="offscreen"
            whileInView="onscreen"
            whileHover="onhover"
            variants={{
              offscreen: {
                scale: 0,
                opacity: 0,
              },

              onscreen: {
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  // bounce: 0.4,
                  duration: 0.8,
                  delay: 0.05 * i,
                },
              },
            }}

            viewport={{ once: false }}
            style={{ backgroundColor: value.color }}
            className={`rounded-xl p-2 bg-opacity-45`}
          >
            <img
              src={value.image}
              className="lg:h-24 lg:w-24 md:h-16 md:w-16 w-10 h-10"
            />
          </motion.a>
        ))}
      </p>
    </div>
  );
};

export default Skills;
