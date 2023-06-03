// first we will need to add an import for the Animate Presence component alongside the motion component
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useAnimation,
} from "framer-motion";
// For this example we will create a cube and use the useState hook to toggle its visibility while adding the exit animation to it
import { useState } from "react";

export default function App() {
  // State to toggle visibility
  const [show, setShow] = useState(true);
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#00CCCC",
    },
  };
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const Box = ({ text }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
    return (
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1> Que dis-tu d&apos;un texte qui apparait au moment du scroll ?</h1>
      </motion.div>
    );
  };

  const Box1 = ({ text }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
    return (
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1>
          Je peux me servir de ça pour la partie : <br></br>&quot;UN&DEMI vous
          accompagne à chaque étape de la mise en place de votre stratégie
          énergie-climat:&quot;
        </h1>
      </motion.div>
    );
  };
  return (
    <>
      <Navbar />
      <div className="h-FULL bg-white ">
        <div className="bg-white">
          <p className="text-4xl text-009999 text-center pt-12 font-bold tracking-widest">
            ⚠️ UN&DEMI - PAGE DE TESTS ⚠️
          </p>
          <p className="text-md text-009999 text-center italic tracking-widest">
            Rechargement de page nécessaire pour voir les animations !
          </p>
          <p className="text-xl pt-24 text-black ml-12 sm:ml-2 tracking-widest">
            Pour pouvoir créer des animations comme celles-ci, il me faut ton
            logo en format .svg ainsi que son code correspondant. <br></br>{" "}
            <p className="text-red-500">
              Voici le format à demander :
              <p className="font-bold underline">(impératif)</p>
            </p>{" "}
            <br></br>
            <code className="bg-gray-200 text-left">
              &lt;svg <br></br>
              xmlns=&quot;...........................&quot;<br></br>
              viewBox=&quot;.......................&quot;<br></br>
              &gt; <br></br>&lt;path<br></br>{" "}
              d=&quot;...............................&quot;<br></br> /&gt;{" "}
              <br></br>
              &lt;/svg&gt;
            </code>
          </p>
          <div className="h-fit w-full flex justify-center items-center pt-12 pb-5">
            <div className="w-[400px] h-[400px] bg-white mx-auto rounded-xl flex justify-center items-center border border-lg border-009999">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-1/2 overflow-visible	stroke-[#009999] stroke-2"
              >
                <motion.path
                  d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    // default: { duration: 2, ease: "easeInOut" },
                    // fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                  }}
                />
              </motion.svg>
            </div>
          </div>
          <p className="text-md text-red-500 text-center italic tracking-widest">
            Créé avec un composant SVG
          </p>
          <p className="text-sm text-black text-center italic tracking-widest">
            possibilité de changer de couleurs, durée, taille.
          </p>
          <div className="h-fit w-full flex justify-center items-center pt-12 pb-5">
            <div className="w-[400px] h-[400px] bg-white mx-auto rounded-xl flex justify-center items-center border border-lg border-009999">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1920 1080"
                xmlSpace="preserve"
              >
                <g id="Capa_8">
                  <path
                    class="st0"
                    d="M902.9,539.5c0-31.8,19.8-58.9,47.7-69.9c3.8-1.5,6.3-5.2,6.3-9.3V307.5c0-5.1-1.9-10-5.5-13.5
		c-2.2-2.2-4.4-3.2-6.1-3.7c-25.1-7.3-70.3,42.3-89.5,97.5c-3,8.7-6.4,17.4-10.2,25.8c-6.5,14.1-6,16.4-21.7,47.9
		c-8.3,16.6-16.8,32.6-20.8,45.5c0,0-8.5,29.5-6.2,61.5c5.2,72.2,69,144,147.3,146.2c6.9,0.2,12.7-5.3,12.7-12.2v-83.8
		c0-4.1-2.5-7.8-6.3-9.3C922.7,598.4,902.9,571.3,902.9,539.5z"
                  />
                </g>
                <g id="Capa_12">
                  <path
                    class="st0"
                    d="M1014.6,664.7c-6.9,0.2-12.7-5.3-12.7-12.2v-33.8c0-4.1,2.5-7.8,6.3-9.3c27.9-10.9,47.7-38.1,47.7-69.8
		s-19.8-58.9-47.7-69.9c-3.8-1.5-6.3-5.2-6.3-9.3v-94.9c0-5.1,1.9-10,5.5-13.5c2.2-2.2,4.4-3.2,6.1-3.7"
                  />
                </g>
                <g id="Capa_6">
                  <path
                    class="st1"
                    d="M1118.6,510.2c-3-9.6-9.3-21.6-15.5-33.9c-11.6-23.3-11.4-25.2-16.1-35.5c-2.7-6-5.2-12.1-7.3-18.4
		c-14-41.6-48.2-79.3-67.1-73.8c-1.3,0.4-2.9,1.1-4.6,2.8c-2.7,2.6-4.1,6.3-4.1,10l12,99c0,3.8,1.9,7.3,5.1,9.3
		c23,14.9,38.3,40.7,38.3,70.2c0,29.5-15.3,55.3-38.3,70.2c-3.2,2-5.1,5.6-5.1,9.3l-12,36.5c0,5.2,4.3,9.3,9.5,9.1
		c58.4-1.6,106-55.2,109.9-109C1124.9,532.1,1118.6,510.2,1118.6,510.2z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <p className="text-md text-red-500 text-center italic tracking-widest">
            Créé avec un composant SVG
          </p>
          <p className="text-sm text-black text-center italic tracking-widest">
            possibilité de changer de couleurs, durée, taille.
          </p>
          <div className="h-fit w-full flex justify-center items-center pt-12 pb-5">
            <div className="w-[400px] h-[400px] bg-white mx-auto rounded-xl flex justify-center items-center border border-lg border-009999">
              <motion.svg
                className="w-1/2 overflow-visible	stroke-[#00FFFF] stroke-3"
                viewBox="0 0 480 480"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                  }}
                  strokeWidth={4}
                  strokeDasharray="0 1"
                  fill="none"
                  d="M415,275Q422,310,417.5,354Q413,398,378,423Q343,448,299,423Q255,398,227.5,389.5Q200,381,151,401.5Q102,422,86,383.5Q70,345,65,309.5Q60,274,78.5,243.5Q97,213,87.5,176.5Q78,140,107.5,122Q137,104,160.5,74Q184,44,222,33Q260,22,293.5,43.5Q327,65,362,81Q397,97,386,142.5Q375,188,391.5,214Q408,240,415,275Z"
                />
              </motion.svg>
            </div>
          </div>
          <p className="text-md text-red-500 text-center italic tracking-widest">
            Créé avec un composant SVG
          </p>
          <p className="text-sm text-black text-center italic tracking-widest">
            possibilité de changer de couleurs, durée, taille.
          </p>
          <div className="h-fit w-full flex justify-center items-center pt-12 pb-5">
            <div className="w-[400px] h-[400px] bg-white mx-auto rounded-xl flex justify-center items-center border border-lg border-009999">
              <div className="text-2xl text-center">
                <Box />
              </div>
            </div>
          </div>
          <div className="h-fit w-full flex justify-center items-center pt-12 pb-5">
            <div className="w-[400px] h-[400px] bg-white mx-auto rounded-xl flex justify-center items-center border border-lg border-009999">
              <div className="text-2xl text-center">
                <Box1 />
              </div>
            </div>
          </div>

          <p className="text-center pb-5">EXIT ANIMATIONS TESTING</p>
          <div
            classname="h-fit w-full flex justify-center items-center pt-12 pb-5"
            key="a box"
          >
            <h1 className="text-center pb-5">Animation de sortie :</h1>
            <div className="w-full h-[400px] bg-white mx-auto rounded-xl flex justify-center items-center border border-lg border-009999">
              <button
                onClick={() => setShow(!show)}
                className="text-left text-2xl"
              >
                {show ? "Sortie" : "Entrée"}
              </button>
              <AnimatePresence>
                {show && (
                  <motion.div
                    //Note that the AnimatePresence component requires a key prop to identify the choice element in the React component tree
                    key="a box"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 100 }}
                    //Specified Exit animation
                    exit={{ opacity: 0, x: -150 }}
                    style={{
                      height: "140px",
                      width: "140px",
                      background: "#009999",
                      position: "relative",
                    }}
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
