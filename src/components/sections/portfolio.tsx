import work from "../../assets/work.png";
import { projects } from "../../constants/projects";
import ProjectTiles from "../ProjectTiles";
import education from "../../constants/education";
import EducationTile from "../EducationTile";
import ExperienceTile from "../ExperienceTile";
import experiences from "../../constants/experiences";
const Portfolio: React.FC<SectionProps> = ({ reference }) => {
  return (
    <div ref={reference} className="w-full">
      <div className="bg-ui-color-2 flex flex-col md:p-24 sm:p-10 p-7 gap-10 items-center text-gray-400 overflow-y-clip">
        <div className="flex lg:flex-row-reverse flex-col-reverse gap-10 items-center">
          <div className="relative self-end flex-1 w-full">
            <div className="h-full items-end justify-end md:flex">
              <img src={work} alt="" className="object-cover max-h-[300px]" />
            </div>
          </div>
          <div className="flex-1 bg-ui-color-2 flex flex-col gap-10">
            <div className="lg:text-4xl sm:text-3xl xs:text-2xl text-lg text-white font-poppins relative before:content-portfolio before:-bottom-2 before:lg:w-[750px] before:md:w-[650px] before:xs:w-[540px] before:w-[430px] before:font-normal before:text-red-600 before:border-[2px_solid_#ffffff] before:font-barlowcondensed before:absolute">
              My Recent Works
            </div>
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

      <div className="bg-black h-full w-full overflow-hidden lg:py-10 py-8">
        <div className="lg:text-4xl sm:text-3xl xs:text-2xl text-lg text-white lg:text-center p-5">Experiences</div>
        <div className="p-10 space-y-8 bg-transparent relative before:absolute before:inset-0 before:ml-10 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {experiences.map((e, i) => (
              <ExperienceTile {...e} even={i % 2 == 0} index={i} />
            
          ))}
        </div>
      </div>
      <div className="bg-ui-color-2 h-full w-full overflow-hidden lg:py-10 py-8">
        <div className="lg:text-4xl sm:text-3xl xs:text-2xl text-lg text-white lg:text-center p-5">Education</div>
        <div className="p-10 space-y-8 bg-transparent relative before:absolute before:inset-0 before:ml-10 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {education.map((e, i) => (
              <EducationTile {...e} even={i % 2 == 0} index={i} />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
