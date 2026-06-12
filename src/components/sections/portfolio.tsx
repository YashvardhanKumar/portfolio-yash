import work from "../../assets/work.png";
import { projects } from "../../constants/projects";
import ProjectTiles from "../ProjectTiles";
import education from "../../constants/education";
import EducationTile from "../EducationTile";
import ExperienceTile from "../ExperienceTile";
import experiences from "../../constants/experiences";
import Achievements from "./achievements";
import GradientOrbs from "../GradientOrbs";
const Portfolio: React.FC<SectionProps> = ({ reference }) => {
  return (
    <div ref={reference} className="w-full">
      <div className="relative overflow-hidden bg-ui-color-2 flex flex-col md:p-24 sm:p-10 p-7 gap-10 items-center text-gray-400 w-full">
        <GradientOrbs orbs={[
          {
            position: "top-10 right-10",
            size: "w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]",
            gradient: "bg-gradient-to-tr from-violet-600/60 to-indigo-600/50",
            blur: "blur-[100px]",
            duration: 14,
          },
          {
            position: "top-1/3 left-10",
            size: "w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]",
            gradient: "bg-gradient-to-br from-fuchsia-500/55 to-pink-500/45",
            blur: "blur-[90px]",
            duration: 16,
            delay: 2,
          },
          {
            position: "bottom-10 right-1/4",
            size: "w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]",
            gradient: "bg-gradient-to-tr from-cyan-500/60 to-blue-600/50",
            blur: "blur-[95px]",
            duration: 12,
            delay: 4,
          }
        ]} />
        <div className="relative z-10 w-full flex flex-col items-center gap-10">
        <div className="flex lg:flex-row-reverse flex-col-reverse gap-10 items-center">
          <div className="relative self-end flex-1 w-full">
            <div className="h-full items-end justify-end md:flex">
              <img src={work} alt="Development Work Showcase" className="object-cover max-h-[300px]" />
            </div>
          </div>
          <div className="flex-1 bg-ui-color-2 flex flex-col gap-10">
            <h2 className="lg:text-4xl sm:text-3xl xs:text-2xl text-lg text-white font-poppins relative before:content-portfolio before:-bottom-2 before:lg:w-[750px] before:md:w-[650px] before:xs:w-[540px] before:w-[430px] before:font-normal before:text-red-600 before:border-[2px_solid_#ffffff] before:font-barlowcondensed before:absolute">
              My Recent Works
            </h2>
            <div className="sm:text-xl max-sm:text-sm *:indent-10 flex flex-col gap-3">
              <p>
                Welcome to my Portfolio! Here, you'll find a showcase of my
                work, including cross-platform mobile applications developed
                using Flutter, full-stack applications, and unique
                projects like "Confereus" and "Good Merchant," where I've
                utilized technologies like NodeJS, ReactJS, Flask, and
                TensorFlow.
              </p>
              <p>
                My experiences range from developing user-friendly apps for
                farmers to creating social media platforms with advanced
                features like real-time updates and recommendation systems.
              </p>
              <p>
                Explore my projects to see my commitment to clean architecture,
                efficient state management, and user-centric design. Thank you
                for visiting my portfolio, and I hope my work inspires you as
                much as it has driven my passion for technology! 🚀
              </p>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto p-3 text-5xl text-white border-b-2">Projects</div> */}
        <div className="flex flex-wrap w-full">
          {projects.map((e,index) => (
            <ProjectTiles {...e} index={index}/>
          ))}
        </div>
      </div>
    </div>

      <div className="relative overflow-hidden bg-black h-full w-full lg:py-10 py-8">
        <GradientOrbs orbs={[
          {
            position: "top-1/4 left-10",
            size: "w-[400px] h-[400px] sm:w-[600px] sm:h-[600px]",
            gradient: "bg-gradient-to-br from-amber-500/60 via-rose-600/50 to-transparent",
            blur: "blur-[110px]",
            duration: 18,
          },
          {
            position: "top-1/2 right-10",
            size: "w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]",
            gradient: "bg-gradient-to-tr from-fuchsia-600/60 via-purple-600/50 to-transparent",
            blur: "blur-[100px]",
            duration: 16,
            delay: 2,
          },
          {
            position: "bottom-1/4 left-1/4",
            size: "w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]",
            gradient: "bg-gradient-to-br from-cyan-500/60 via-blue-600/50 to-transparent",
            blur: "blur-[95px]",
            duration: 14,
            delay: 4,
          }
        ]} />
        <div className="relative z-10 w-full">
          <h2 className="lg:text-4xl sm:text-3xl xs:text-2xl text-lg text-white lg:text-center p-5">Experiences</h2>
          <div className="p-10 space-y-8 bg-transparent relative before:absolute before:inset-0 before:ml-10 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {experiences.map((e, i) => (
                <ExperienceTile {...e} even={i % 2 == 0} index={i} />
              
            ))}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-ui-color-2 h-full w-full lg:py-10 py-8">
        <GradientOrbs orbs={[
          {
            position: "bottom-1/4 right-10",
            size: "w-[450px] h-[450px] sm:w-[650px] sm:h-[650px]",
            gradient: "bg-gradient-to-tr from-blue-600/60 via-indigo-600/50 to-transparent",
            blur: "blur-[120px]",
            duration: 17,
          }
        ]} />
        <div className="relative z-10 w-full">
          <h2 className="lg:text-4xl sm:text-3xl xs:text-2xl text-lg text-white lg:text-center p-5">Education</h2>
          <div className="p-10 space-y-8 bg-transparent relative before:absolute before:inset-0 before:ml-10 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {education.map((e, i) => (
                <EducationTile {...e} even={i % 2 == 0} index={i} />
              
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-black h-full w-full lg:py-10 py-8">
        <GradientOrbs orbs={[
          {
            position: "top-1/3 left-1/3",
            size: "w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]",
            gradient: "bg-gradient-to-br from-purple-600/60 via-pink-500/50 to-transparent",
            blur: "blur-[100px]",
            duration: 15,
          }
        ]} />
        <div className="relative z-10 w-full">
          <h2 className="lg:text-4xl sm:text-3xl xs:text-2xl text-lg text-white text-center p-5 pb-10">Achievements</h2>
          <Achievements/>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
