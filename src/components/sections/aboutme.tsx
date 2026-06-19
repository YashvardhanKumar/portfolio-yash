import { MdOutlineEmail, MdPhoneAndroid } from "react-icons/md";
import { handle, tabMenu } from "../../constants/tabs";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GradientOrbs from "../GradientOrbs";

interface AboutMeProps extends SectionProps {
  refAt: number;
  setRefAt: React.Dispatch<React.SetStateAction<number>>;
  refs: React.RefObject<HTMLDivElement>[];
}
const ContactMe: React.FC<AboutMeProps> = ({
  reference,
  refAt,
  setRefAt,
  refs,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [SUCCESS, setSUCCESS] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current ?? "",
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          formRef?.current?.reset();
          setSUCCESS(true);
          console.log("SUCCESS!");
        },
        (error) => {
          formRef?.current?.reset();
          console.log("FAILED...", error.text);
        }
      );
    setTimeout(() => {
      setSUCCESS(false);
    }, 1000);
  };
  return (
    <div ref={reference} className="relative overflow-hidden h-full w-full">
      <GradientOrbs orbs={[
        {
          position: "top-10 right-10",
          size: "w-[350px] h-[350px] sm:w-[550px] sm:h-[550px]",
          gradient: "bg-gradient-to-br from-amber-500/60 to-red-500/50",
          blur: "blur-[100px]",
          duration: 12,
        },
        {
          position: "bottom-40 left-10",
          size: "w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]",
          gradient: "bg-gradient-to-tr from-violet-600/60 to-blue-600/50",
          blur: "blur-[90px]",
          duration: 15,
          delay: 2,
        }
      ]} />
      <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] flex flex-col items-center md:p-24 sm:p-10 p-5 py-10 gap-10 text-gray-400 overflow-y-clip w-full">
        {/* <div className="lg:text-4xl sm:text-3xl xs:text-2xl text-lg text-white font-poppins relative before:content-contact-us xs:before:-bottom-2 before:-bottom-1 before:lg:w-[550px] before:md:w-[450px] before:xs:w-[340px] before:w-[230px] before:absolute">
          Contact Me
        </div> */}
        <h2 className="lg:text-4xl sm:text-3xl xs:text-2xl text-lg text-white font-poppins relative before:lg:w-[550px] before:md:w-[450px] before:xs:w-[340px] before:w-[230px] before:content-contact-us before:absolute before:sm:-left-40 before:-left-2/3 xs:before:-bottom-1 before:-bottom-1">
          Contact Me
        </h2>
        <div className="max-w-[min(500px,100%)]">
          <p>
            I’m actively seeking opportunities to contribute my expertise in
            mobile app development, full-stack applications, and cutting-edge
            technologies like Flutter, NodeJS, ReactJS, and TensorFlow. With
            hands-on experience in building robust, user-friendly applications,
            I'm eager to bring my skills to innovative teams.
          </p>
          <p>
            If your company is looking for a passionate developer who thrives on
            solving complex problems and delivering high-quality solutions, I’d
            love to connect! 🚀
          </p>
        </div>
        <div className="flex max-xl:flex-col w-full gap-6 justify-around items-center">
          <div className="space-y-10">
            <div className="flex gap-2 items-center">
              <MdOutlineEmail className="md:text-3xl text-2xl text-ui-color" />

              <div>
                <div className="flex items-center gap-3 md:text-3xl sm:text-2xl text-xl text-ui-color">
                  Email ID
                </div>
                <a href="mailto:yashram9798@gmail.com">
                  Email me at <u>yashram9798@gmail.com</u>
                </a>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <MdPhoneAndroid className="md:text-3xl text-2xl text-ui-color" />

              <div>
                <div className="flex items-center gap-3 md:text-3xl sm:text-2xl text-xl text-ui-color">
                  Phone No.
                </div>
                <a href="tel:+917021051913">
                  Call me on <u>+91-70210-51913</u>
                </a>
              </div>
            </div>
          </div>
          <div className="text-xl p-3">Or</div>
          <div className="max-lg:w-full">
            <h3 className="sm:text-3xl text-xl text-center font-silkscreen text-ui-color">
              Email Me Here
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              
              className="lg:w-[700px] w-full py-5 *:outline-none flex gap-2 flex-col *:placeholder:text-gray-500"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3"
                autoComplete="name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3"
                autoComplete="email"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3"
                required
              />
              <textarea
                rows={5}
                name="message"
                placeholder="Write your email..."
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 resize-none"
                autoComplete="on"
                required
              />
              <button
                type="submit"
                value="Send"
                className="bg-ui-color rounded-lg w-full py-3 text-white"
              >
                Send
              </button>
              {SUCCESS && (
                <div
                  className="p-2 mt-2 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                  role="alert"
                >
                  <span className="font-medium">Sent Successfully</span> Your
                  message was sent Successfully!!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-black text-white sticky sm:p-10 p-5 max-sm:text-sm">
        <div className="font-dancing-script font-bold text-4xl m-auto ">
          Yashvardhan Kumar
        </div>
        <ul className="flex gap-5 text-sm m-auto cursor-pointer">
          {tabMenu.map((val, i) => (
            <li
              key={val}
              className={`transition-colors duration-500 ${
                refAt == i ? "text-ui-color" : "text-white"
              }  hover:text-ui-color`}
              aria-label="button"
              children={val}
              onClick={() => {
                refs[i].current?.scrollIntoView({
                  behavior: "smooth",
                });
                setRefAt(i);
              }}
            />
          ))}
        </ul>

        <ul
          className="flex gap-3 m-auto text-lg"
          children={handle.map((val) => {
            let Compo = val.icon;
            return (
              <motion.a
                key={val.url}
                whileHover={{
                  color: val.color,
                }}
                // className={`hover:text-[${val.color}]`}
                href={val.url}
                target="_blank"
                children={<Compo />}
              />
            );
          })}
        />
        <div className="text-center">
          © 2024 Yashvardhan Kumar. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
