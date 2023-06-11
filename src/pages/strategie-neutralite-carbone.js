import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Expertise() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -250 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <Head>
        <title>
          UN&DEMI - Stratégie neutralité carbone (SBT, SNBC, QuantiGES, ACT…)
        </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />

      <div className="bg-white bg-cover h-full">
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{
            type: "linear",
            duration: "1",
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className="text-009999 text-4xl font-bold uppercase ml-12 pt-12 mb-12 text-center">
            Stratégie neutralité carbone (SBT, SNBC, QuantiGES, ACT…)
          </p>
          <p className="text-black  ml-12 pt-2 text-2xl px-64 sm:px-12">
            Expert des enjeux énergie et climat sectoriels et des leviers
            opérationnels pour s&apos;engager dans la transition bas-carbone,
            UN&amp;DEMI accompagne ses client·es dans l&apos;élaboration de
            stratégies climat robustes et sérieuses, en se fondant sur les
            recommandations du référentiel Net Zero Initiative et de
            l&apos;ADEME.
          </p>
          <p className="text-black  ml-12 pt-2 text-2xl pb-12 px-64 sm:px-12">
            <ol className="list-none list-inside">
              <li>✓ Je réduis mes émissions directes et indirectes</li>
              <li>✓ J&apos;aide mes client·es à se décarboner</li>
              <li>
                ✓ Je développe les puits de carbone dans ma chaîne de valeur
              </li>
              <li>
                ✓ Je finance la transition en soutenant des projets bas-carbone
              </li>
            </ol>
          </p>
          <Image
            className="ml-12 sm:m-0 pb-10 px-64 sm:px-12"
            src="/Illustrations/2023-05-24_18h54_22.png"
            alt="stratégie neutralite"
            width={1000}
            height={200}
          />
          <button className="ml-12 pt-2 bg-009999 border rounded-md p-2">
            <Link href="/contact" className="uppercase text-white">
              être recontacté{" "}
            </Link>{" "}
          </button>{" "}
        </motion.main>
      </div>
      <Footer />
    </>
  );
}
