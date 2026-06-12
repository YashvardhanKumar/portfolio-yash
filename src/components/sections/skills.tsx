import { motion } from "framer-motion";
import { skills } from "../../constants/skills";
import GradientOrbs from "../GradientOrbs";

const Skills = () => {
  return (
    <div className="relative overflow-hidden w-full flex flex-col py-16 items-center justify-start gap-10">
      <GradientOrbs orbs={[
        {
          position: "top-1/2 left-1/4 -translate-y-1/2",
          size: "w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]",
          gradient: "bg-gradient-to-r from-teal-500/55 via-emerald-500/45 to-cyan-500/50",
          blur: "blur-[80px]",
          duration: 15,
        }
      ]} />
      <div className="relative z-10 w-full flex flex-col items-center gap-10">
        <div className="text-white p-3 sm:text-5xl text-lg border-b border-slate-700">
          Technologies I am familiar with
        </div>
        <p className="p-5 w-fit relative flex justify-center flex-wrap gap-6">
        {skills.map((value, i) => (
          <div key={i} className="w-fit flex flex-col gap-3 items-center">
            <motion.a
              href={value.site}
              target="_blank"
              rel="noreferrer"
              initial="offscreen"
              whileInView="onscreen"
              whileHover={{
                scale: 1.1,
                y: -6,
                borderColor: `${value.color}aa`,
                boxShadow: `0 12px 40px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.3), 0 0 20px 4px ${value.color}40`,
              }}
              whileTap={{ scale: 0.95 }}
              variants={{
                offscreen: {
                  scale: 0.8,
                  opacity: 0,
                  filter: 'blur(6px)',
                },

                onscreen: {
                  scale: 1,
                  opacity: 1,
                  filter: 'blur(0px)',
                  transition: {
                    type: "spring",
                    duration: 0.8,
                    delay: 0.03 * i,
                  },
                },
              }}
              viewport={{ once: false }}
              style={{
                backgroundColor: `${value.color}33`,
                borderColor: `${value.color}55`,
              }}
              className="rounded-2xl p-4 backdrop-blur-md border shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] transition-colors duration-300 flex items-center justify-center"
            >
              <img
                src={value.image}
                className="lg:h-20 lg:w-20 object-contain md:h-16 md:w-16 w-10 h-10"
              />
            </motion.a>
            <div className="text-white md:text-sm lg:text-base text-xs font-poppins">
              {value.name}
            </div>
          </div>
        ))}
      </p>
      </div>
    </div>
  );
};

export default Skills;
