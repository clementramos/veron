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
        <title>UN&DEMI - Le Bilan carbone du Français moyen</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mainlogo.svg" />
      </Head>
      <Navbar />

      <div className="bg-white bg-cover h-full px-64 sm:px-12">
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
          Le Bilan carbone du Français moyen
          </p>
          <p className="text-black  ml-12 pt-2 text-2xl">
          L&apos;empreinte carbone moyenne d&apos;un Français en 2019 était de 10.2 tonnes équivalent CO2. L&apos;empreinte carbone est la comptabilité de toutes les
émissions de gaz à effet de serre entrainées par nos activités (déplacements, nourriture, logement, achats…). Nous aurions dû avoir une empreinte
carbone moyenne par personne de 9.2 tonnes sur l&apos;année 2021 si nous étions parvenus à respecter les fameux accords de Paris. Le résultat pour l&apos;année
2021 est de 9.9 tonnes, soit seulement 3% de moins qu&apos;en 2019. Nous ne sommes donc, pour l&apos;instant, absolument pas alignés avec une limitation de
l&apos;augmentation de la température moyenne globale de la Terre inférieure à +2°C. L&apos;année covid nous a pourtant beaucoup aidé en réduisant nos
émissions de GES de 5% entre 2019 et 2020. Notre objectif est désormais de réduire nos émissions de 6% par an.
          </p>
          <Image
            className="mx-auto pb-10 "
            src="/Illustrations/BC FR 2021.jfif"
            alt="bilan carbone - logo"
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
