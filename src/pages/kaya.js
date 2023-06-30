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
        <title>UN&DEMI - Kaya</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />
      <div className="bg-white bg-cover h-full px-64 sm:px-12">
        {" "}
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
            L&apos;équation de Kaya, ou &quot;où taper &quot;?
          </p>
          <p className="text-009999 mx-12 pt-2 text-2xl">
            {" "}
            <p className="text-black  ml-2 pt-2 text-2xl">
              L&apos;équation de Kaya aurait été élaborée par l&apos;économiste
              Japonais Yoishi Kaya en 1993. Elle nous permet de relier les
              émissions anthropiques de CO 2 à la démographie, l&apos;économie
              et l&apos;énergie. En la manipulant, elle nous permet
              d&apos;identifier les leviers qui permettraient la réduction des
              émissions de CO 2 .
            </p>
            <Image
              className="ml-12 pt-12 pb-12 sm:mx-auto"
              src="/Kaya.png"
              alt="équation de kaya"
              width={800}
              height={200}
            />
            <ol className="ml-12 list-disc">
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  Décarboner l&apos;énergie avec des méthodes de production
                  bas-carbone (hydro, nucléaire, éolien, solaire...)
                </p>
              </li>
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  Augmenter l&apos;efficacité énergétique des machines(
                  Diminuer la quantité d&apos;énergie nécessaire pour générer 1€
                  de PIB)
                </p>
              </li>
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  Réduire la productivité du travail (baisser le pouvoir
                  d&apos;achat)
                </p>
              </li>
              <li>
                <p className="text-black  ml-2 pt-2 text-2xl">
                  Baisser la population mondiale{" "}
                </p>
              </li>
            </ol>
            {/* <p className="text-black italic ml-2 pt-2 text-2xl">
              kg CO2eq = kg CO2eq/kWh x kWh/€ x €/hab x hab
            </p> */}
            <p className="text-black  ml-2 pt-2 text-2xl">
              Il est clair que les deux dernières options de sont pas
              réjouissantes. C&apos;est pourquoi il est urgent de plancher sur
              les deux premières : décarboner l&apos;économie mondiale.
            </p>
          </p>
          
          <button className="ml-12 mt-12 bg-009999 border rounded-md p-2">
            <Link href="/contact" className="uppercase text-white">
              être recontacté{" "}
            </Link>{" "}
          </button>
        </motion.main>
      </div>
      <Footer />
    </>
  );
}
