// first we will need to add an import for the Animate Presence component alongside the motion component
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import {
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useAnimation,
} from "framer-motion";
import { ParallaxBanner } from "react-scroll-parallax";

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
      <div className="h-[1900px]">
        <ParallaxBanner
          className="bg-white"
          style={{ aspectRatio: "1 / 1" }}
          layers={[
            {
              image:
                "/beach-2592454.jpg",
              speed: -100,
            },
          ]}
        >
          <div className="absolute inset-0 items-center justify-center">
            <h1 className="text-white text-4xl text-center pt-12">UN ET DEMI</h1>
            <Image
          className="mx-auto"
          src="/UN&DEMI Logo 2.svg"
          width={800}
          height={18}
          alt="logo"
          priority="true"
        />
          </div>
        </ParallaxBanner>
      </div>

      <Footer />
    </>
  );
}
