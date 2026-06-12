import { motion } from "framer-motion";

const glassCard = "rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]";

const Achievements = () => {
  return (
    <div className="flex flex-col w-full md:p-10 p-2 gap-5 items-center">
      <p className="flex flex-wrap gap-5 justify-center items-center w-full">
        
        <motion.div className={glassCard} initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }} viewport={{ once: false }}>
          <img
            src="https://leetcard.jacoblin.cool/YashvardhanKumar?theme=dark&font=Poppins&ext=contest&show_rank=false"
            alt=""
            className="max-w-96 w-full"
          />
        </motion.div>
        <motion.div className={glassCard} initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.8, type: 'spring', bounce: 0.3, delay: 0.1 }} viewport={{ once: false }}>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=YashvardhanKumar&show_icons=true&locale=en&layout=compact&theme=highcontrast&hide_border=true"
            alt="yashvardhankumar"
            className="max-w-96 w-full"
          />
        </motion.div>
        <motion.div className={glassCard} initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.8, type: 'spring', bounce: 0.3, delay: 0.2 }} viewport={{ once: false }}>
          <img
            src="https://github-readme-stats.vercel.app/api?username=YashvardhanKumar&show_icons=true&locale=en&layout=compact&theme=highcontrast&hide_border=true"
            alt="yashvardhankumar"
            className="max-w-96 w-full"
          />
        </motion.div>
{/*         <a href="https://git.io/streak-stats"><img src="https://streak-stats.demolab.com?user=YashvardhanKumar&theme=highcontrast&hide_border=true" className="max-w-96 w-full" alt="GitHub Streak" /></a> */}
        <motion.div className={glassCard} initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.8, type: 'spring', bounce: 0.3, delay: 0.3 }} viewport={{ once: false }}>
          <img src="https://streak-stats.demolab.com?user=YashvardhanKumar&theme=highcontrast&hide_border=true&border_radius=10&fire=EB5454" className="max-w-96 w-full" alt="GitHub Streak" />
        </motion.div>
      </p>{" "}
      <a href="https://github.com/ryo-ma/github-profile-trophy">
          <img
            src="https://github-profile-trophy.vercel.app/?username=YashvardhanKumar&column=3&margin-w=8&margin-h=8&theme=juicyfresh&no-frame=true"
            alt="yashvardhankumar"
            className="w-full"
          />
        </a>{" "}
    </div>
  );
};

export default Achievements;
