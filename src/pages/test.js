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
              <button onClick={() => setShow(!show)} className="text-left text-2xl">
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
