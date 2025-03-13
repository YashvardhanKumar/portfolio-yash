const Achievements = () => {
  return (
    <div className="flex flex-col w-full md:p-10 p-2 gap-5 items-center">
      <p className="flex flex-wrap gap-5 justify-center items-center w-full">
        
        <img
          src="https://leetcard.jacoblin.cool/YashvardhanKumar?theme=dark&font=Poppins&ext=contest&show_rank=false"
          alt=""
          className="max-w-96 w-full"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=YashvardhanKumar&show_icons=true&locale=en&layout=compact&theme=highcontrast&hide_border=true"
          alt="yashvardhankumar"
          className="max-w-96 w-full"
        />
        <img
          src="https://github-readme-stats.vercel.app/api?username=YashvardhanKumar&show_icons=true&locale=en&layout=compact&theme=highcontrast&hide_border=true"
          alt="yashvardhankumar"
          className="max-w-96 w-full"
        />
{/*         <a href="https://git.io/streak-stats"><img src="https://streak-stats.demolab.com?user=YashvardhanKumar&theme=highcontrast&hide_border=true" className="max-w-96 w-full" alt="GitHub Streak" /></a> */}
        <img src="https://streak-stats.demolab.com?user=YashvardhanKumar&theme=highcontrast&hide_border=true&border_radius=10&fire=EB5454" className="max-w-96 w-full" alt="GitHub Streak" />
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
