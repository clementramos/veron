import "@/styles/globals.css";
import { motion, useScroll } from "framer-motion";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <main className={fredoka.className}>
        <motion.div
          className="fixed top-0 right-0 -left-[100%] h-2 bg-009999 z-50 origin[0%]"
          style={{ scaleX: scrollYProgress }}
        />

        <Component {...pageProps} />
      </main>
    </>
  );
}
