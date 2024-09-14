const ContactMe: React.FC<SectionProps> = ({ reference }) => {
  return (
    <div ref={reference} className="h-screen w-full">
      <div className="bg-ui-color-3 flex flex-col md:p-24 sm:p-10 p-5 gap-10 text-gray-400 overflow-y-clip w-full">
        <div className="lg:text-4xl sm:text-3xl xs:text-2xl text-lg text-white font-poppins relative before:content-contact-us xs:before:-bottom-2 before:-bottom-1 before:lg:w-[550px] before:md:w-[450px] before:xs:w-[340px] before:w-[230px] before:font-normal before:text-red-600 before:border-[2px_solid_#ffffff] before:font-barlowcondensed before:absolute">
          Contact Me
        </div>
        <div className="flex w-full gap-6 flex-wrap">
          <div className="max-w-[min(500px,100%)]">
            <p>
              I’m actively seeking opportunities to contribute my expertise in
              mobile app development, full-stack applications, and cutting-edge
              technologies like Flutter, NodeJS, ReactJS, and TensorFlow. With
              hands-on experience in building robust, user-friendly
              applications, I'm eager to bring my skills to innovative teams.
            </p>
            <p>
              If your company is looking for a passionate developer who thrives
              on solving complex problems and delivering high-quality solutions,
              I’d love to connect! 🚀
            </p>
          </div>

          <div className="flex-1">
            <div className="sm:text-3xl text-xl font-silkscreen text-ui-color">Email Me Here</div>
            
            <form
              action=""
              method="post"
              className="sm:w-[500px] w-full py-5 *:outline-none flex gap-2 flex-col *:placeholder:text-gray-500"
            >
              <input type="text" name="name" placeholder="Name" className="bg-ui-color-2 p-3" />
              <input type="email" name="email" placeholder="Email" className="bg-ui-color-2 p-3" />
              <input type="text" name="subject" placeholder="Subject" className="bg-ui-color-2 p-3" />
              <textarea
                rows={5}
                placeholder="Write your email..."
                className="bg-ui-color-2 p-3 resize-none"
              />
              <button className="bg-ui-color w-fit px-12 py-3 text-white">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
